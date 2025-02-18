"use client"
import Button from "@/components/auth/Button"
import { ImageInput } from "@/components/my-page/profile/ImageInput"
import { handleDeleteButton, handleImageChange } from "@/utils/changeImage"
import { modifyProfileSchema, ModifyProfileType } from "@/validations/profileSchema"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useFindMemberInfo } from "@/api/member-controller/member-controller"
import { cn } from "@/utils/cn"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  useFindMyChannelMemberProfile,
  useUpdateChannelMemberProfile
} from "@/api/channel-member-controller/channel-member-controller"
import { useParams, useRouter } from "next/navigation"
import { useUpdateMemberProfile, useUploadProfileImage } from "@/api/profile-image-controller/profile-image-controller"

interface ModifyProfileFormProps {
  profileType: "common" | "channel"
}
export default function ModifyProfileForm({ profileType }: ModifyProfileFormProps) {
  const router = useRouter()
  const params = useParams()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  const { data: userInfo } = useFindMemberInfo()
  const { data: channelProfileInfo } = useFindMyChannelMemberProfile(params.id as string)

  const defaultName = profileType === "common" ? userInfo?.body?.name : channelProfileInfo?.body?.codeName
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ModifyProfileType>({
    defaultValues: {
      nickname: defaultName
      // profileImage: ""
    },
    resolver: zodResolver(modifyProfileSchema),
    mode: "onChange"
  })
  const nickname = watch("nickname")

  const { mutateAsync: uploadImage } = useUploadProfileImage({
    request: { headers: { "Content-Type": "multipart/form-data" } }
  })
  const { mutateAsync: updateCommonProfile } = useUpdateMemberProfile()
  const { mutateAsync: updateChannelProfile } = useUpdateChannelMemberProfile()

  const onSubmit = async () => {
    try {
      if (file) {
        const { imageUrl } = await uploadImage({ data: { file } })
        console.log(imageUrl)
        if (profileType === "common") {
          updateCommonProfile({ data: { nickName: nickname, image: imageUrl } })
        }
        if (profileType === "channel") {
          updateChannelProfile({ channelId: params.id as string, data: { codeName: nickname, image: imageUrl } })
        }
      }
      router.back()
    } catch (error) {
      console.error("닉네임 등록 실패:", error)
    }
  }

  const isButtonDisabled = !nickname?.trim().length || !!errors.nickname || defaultName === nickname

  useEffect(() => {
    if (profileType === "common") {
      setPreview(userInfo?.body?.profileImage as string)
    }
    if (profileType === "channel") {
      setPreview(channelProfileInfo?.body?.profileImageUrl as string)
    }
  }, [userInfo?.body?.profileImage, channelProfileInfo?.body?.profileImageUrl, profileType])

  console.log(channelProfileInfo?.body?.profileImageUrl)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex size-full flex-col justify-between px-[16px] pb-[12px] pt-[20px]"
    >
      <div className="flex flex-col items-center gap-[28px]">
        <div className="flex flex-col gap-[12px]">
          <ImageInput
            previewImage={preview}
            handleDeleteButton={() => handleDeleteButton({ setPreview })}
            handleImageChange={(event) => handleImageChange({ event, setFile, setPreview })}
          />
        </div>
        <div className="flex w-full flex-col gap-[2px]">
          <div className="flex flex-col gap-[4px]">
            <input
              {...register("nickname")}
              className={cn(
                "placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none",
                !!errors.nickname && "border-error focus:border-error"
              )}
              placeholder="코드명을 작성해주세요."
              autoFocus
            />
            <div className="flex justify-between text-caption-02 text-error">
              {errors.nickname && <p className="">{String(errors.nickname.message)}</p>}
              <p className={cn("absolute right-4", !errors.nickname && "text-black/60")}>{nickname?.length}/10</p>
            </div>
          </div>
        </div>
      </div>
      <Button variant="default" size="default" isSubmit disabled={isButtonDisabled}>
        완료
      </Button>
    </form>
  )
}

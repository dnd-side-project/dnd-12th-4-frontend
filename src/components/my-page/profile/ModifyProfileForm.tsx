"use client"
import { handleDeleteButton, handleImageChange } from "@/utils/changeImage"
import { useEffect, useState } from "react"
import { ImageInput } from "@/components/my-page/profile/ImageInput"
import Button from "@/components/auth/Button"
import { useForm } from "react-hook-form"
import { modifyProfileSchema, ModifyProfileType } from "@/validations/profileSchema"
import { useUploadProfileImage } from "@/api/profile-image-controller/profile-image-controller"
import { cn } from "@/utils/cn"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFindMemberInfo } from "@/api/member-controller/member-controller"

export default function ModifyProfileForm() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  console.log(preview)
  const [errorMessage, setErrorMessage] = useState("")
  const { data: userInfo } = useFindMemberInfo()

  console.log("file", file)
  const {
    register,
    handleSubmit,
    // setValue,
    watch,
    formState: { errors }
  } = useForm<ModifyProfileType>({
    defaultValues: {
      nickname: userInfo?.body?.name,
      profileImage: ""
    },
    resolver: zodResolver(modifyProfileSchema),
    mode: "onChange"
  })
  console.log("errors", errors)
  const nickname = watch("nickname")
  console.log(userInfo)
  const { mutateAsync: uploadImage } = useUploadProfileImage()

  const onSubmit = async (data: any) => {
    try {
      console.log("폼 데이터:", data)
      // await registerCommonNameMutation.mutateAsync({ params: { name: nickname } })
      //api 요청 성공하면 onNext 실행
      // onNext()
    } catch (error) {
      console.error("닉네임 등록 실패:", error)
    }
  }
  useEffect(() => {
    if (file) {
      const upload = async () => {
        try {
          console.log("filedddd", file)
          const formData = new FormData()
          formData.append("file", file) // ✅ 여기서 FormData 생성
          console.log("formData", formData)
          // const data = await uploadImage({ data: { file: formData } })
          // console.log("data", data)
          // setPreview(data.imageUrl ?? "") // ✅ 서버에서 받은 이미지 URL 저장
        } catch {
          setErrorMessage("이미지 업로드에 실패했습니다. 다시 시도해주세요.")
        }
      }
      upload()
    }
  }, [file, uploadImage]) // ✅ file 변경 시 실행
  console.log(file)
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
            handleImageChange={(event) => handleImageChange({ event, setFile, setPreview, setErrorMessage })}
          />
          {errorMessage && <div>이미지를 다시 선택해주세요.</div>}
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
              <p className={cn("absolute right-4", !errors.nickname && "text-black/60")}>{nickname.length}/10</p>
            </div>
          </div>
        </div>
      </div>
      <Button variant="default" size="default" isSubmit disabled={!nickname?.trim().length || !!errors.nickname}>
        완료
      </Button>
    </form>
  )
}

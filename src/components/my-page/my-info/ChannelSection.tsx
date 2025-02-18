"use client"

import { useFindChannelById } from "@/api/channel-controller/channel-controller"
// import { editChannelSchema, EditChannelType } from "@/validations/channelEditSchema"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from "next/navigation"
// import { FieldValues, FormProvider, useForm } from "react-hook-form"
import CurrentChannelBox from "./CurrentChannelBox"
import { useState } from "react"
import ChannelEditBottomSheet from "@/components/channels/ChannelEditBottomSheet"
import {
  useFindMyChannelMemberProfile,
  useLeaveOneChannel
} from "@/api/channel-member-controller/channel-member-controller"
import ConfirmModal from "@/components/common/ConfirmModal"
// import { useFindMyChannelMemberProfile } from "@/api/channel-member-controller/channel-member-controller"

export default function ChannelSection() {
  const router = useRouter()
  const [isOpenChannelSheet, setIsOpenChannelSheet] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)

  const params = useParams()
  const { data: channelInfo } = useFindChannelById(params.id as string)
  const { data: userInfo } = useFindMyChannelMemberProfile(params.id as string)

  console.log(channelInfo)
  console.log(
    "userInfo?.body?.name",
    userInfo?.body?.codeName,
    "data?.body?.channelOwnerName",
    channelInfo?.body?.channelOwnerName
  )
  // const formMethods = useForm<EditChannelType>({
  //   defaultValues: {
  //     channelName: "",
  //     // commonProfile: { profileImage: "", nickname: "" },
  //     channelProfile: { profileImage: "", nickname: "" }
  //   },
  //   resolver: zodResolver(editChannelSchema)
  // })

  // const { handleSubmit } = formMethods

  // const onSubmit = async (data: FieldValues) => {
  //   console.log("data", data)
  // }
  const leaveChannelMutation = useLeaveOneChannel()
  const handleButtonClick = async () => {
    setIsDeleteModal(true)
    setIsOpenChannelSheet(false)

    try {
      await leaveChannelMutation.mutateAsync({ channelId: channelInfo?.body?.channelId as string })
      router.push("/channels")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <section className="flex flex-col gap-[20px]">
        <CurrentChannelBox
          key={channelInfo?.body?.channelId}
          count={channelInfo?.body?.signalCount || 0}
          name={channelInfo?.body?.channelRoomName ?? "-"}
          memberCount={channelInfo?.body?.countPerson || 1}
          owner={channelInfo?.body?.channelOwnerName ?? "-"}
          onClick={() => setIsOpenChannelSheet(true)}
        />
      </section>
      {/* </form> */}
      <ChannelEditBottomSheet
        isOpen={isOpenChannelSheet}
        setIsOpen={setIsOpenChannelSheet}
        isOwner={userInfo?.body?.codeName === channelInfo?.body?.channelOwnerName}
        onClick={() => {
          setIsOpenChannelSheet(false)
          setIsDeleteModal(true)
        }}
      />
      {isDeleteModal && (
        <ConfirmModal
          title={`채널을 나가시면..\n데이터가 모두 사라져요`}
          description={`지금 나가시면 채널 데이터가\n전부 삭제되어 복구가 불가해요`}
          onCancel={() => setIsDeleteModal((prev) => !prev)}
          onClick={handleButtonClick}
        />
      )}
    </>
  )
}

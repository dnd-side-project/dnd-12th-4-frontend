"use client"

import Guide from "@/components/auth/Guide"
import Header from "@/components/auth/Header"
import ChannelNicknameSection from "@/components/auth/section/ChannelNicknameSection"
import CreateChannelNameSection from "@/components/auth/section/CreateChannelNameSection"
import CreatedCodeSection from "@/components/auth/section/CreatedCodeSection"
import { createChannelNameSchema } from "@/validations/channelSchema"
// import { nicknameSchema } from "@/validations/nicknameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
// import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

const steps = ["CreateChannelName", "ChannelNickname", "CreatedCode", "LaterInvitation"]

function Page() {
  // const session = useSession()
  const [stepLevel, setStepLevel] = useState(0)
  const router = useRouter()

  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  const onPrev = () => {
    if (stepLevel > 0) {
      setStepLevel((prev) => prev - 1)
    } else {
      router.back()
    }
  }

  const formMethods = useForm({
    defaultValues: {
      channelName: "",
      channelNickname: ""
    },
    resolver: zodResolver(createChannelNameSchema),
    mode: "onChange"
  })

  const { watch, handleSubmit } = formMethods
  const channelName = watch("channelName")
  const channelNickname = watch("channelNickname")

  console.log(channelName, channelNickname)
  const onSubmit = (data: any) => {
    console.log("폼 데이터:", data)
    //api 요청 및 응답 성공하면 onNext 실행(API 연동 시 구현 예정)
    // onNext()
  }

  // useEffect(() => {
  //   if (steps[stepLevel] === "LaterInvitation") {
  //     setTimeout(() => {
  //       router.push(`/${session?.user.channelId}`)
  //     }, 2000)
  //   }
  // }, [stepLevel, router])

  return (
    <div className="relative h-full px-[16px] pb-[12px] pt-[56px]">
      {steps[stepLevel] !== "LaterInvitation" && <Header onPrev={onPrev} />}
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
          {steps[stepLevel] === "CreateChannelName" && <CreateChannelNameSection onNext={onNext} />}
          {steps[stepLevel] === "ChannelNickname" && <ChannelNicknameSection type="create" onNext={onNext} />}
          {steps[stepLevel] === "CreatedCode" && <CreatedCodeSection onNext={onNext} />}
          {steps[stepLevel] === "LaterInvitation" && (
            <Guide title={`그럼 채널로\n보내드릴게요!`} imageUrl="https://placehold.co/229x229.png" />
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default Page

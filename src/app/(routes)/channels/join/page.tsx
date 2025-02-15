"use client"

import Guide from "@/components/auth/Guide"
import Header from "@/components/auth/Header"
import ChannelNicknameSection from "@/components/auth/section/ChannelNicknameSection"
import InviteCodeInputSection from "@/components/auth/section/InviteCodeInputSection"
import { createChannelNameSchema } from "@/validations/channelSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

const steps = ["InvitationCode", "ChannelNickname", "CreatedCode"]

function Page() {
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
      inviteCode: "",
      channelNickname: ""
    },
    resolver: zodResolver(createChannelNameSchema),
    mode: "onChange"
  })

  const { watch, handleSubmit } = formMethods
  const inviteCode = watch("inviteCode")
  const channelNickname = watch("channelNickname")

  console.log(inviteCode, channelNickname)

  const onSubmit = (data: any) => {
    console.log("폼 데이터:", data)
    //api 요청 성공하면 onNext 실행
    onNext()
  }

  useEffect(() => {
    if (steps[stepLevel] === "CreatedCode") {
      setTimeout(() => {
        router.push("/2")
      }, 2000)
    }
  }, [stepLevel, router])

  return (
    <div className="relative h-full px-[16px] pb-[12px] pt-[56px]">
      {steps[stepLevel] !== "CreatedCode" && <Header onPrev={onPrev} />}
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
          {steps[stepLevel] === "InvitationCode" && <InviteCodeInputSection onNext={onNext} />}
          {steps[stepLevel] === "ChannelNickname" && <ChannelNicknameSection type="invite" onNext={onNext} />}
          {steps[stepLevel] === "CreatedCode" && (
            <Guide
              title={`이제 친구와 소통하도록\n주파수를 맞춰볼게요.`}
              onNext={onNext}
              imageUrl="https://placehold.co/229x229.png"
            />
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default Page

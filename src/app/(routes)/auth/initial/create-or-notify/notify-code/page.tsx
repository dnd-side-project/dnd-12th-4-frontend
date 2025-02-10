"use client"

import Guide from "@/components/auth/Guide"
import ChannelNicknameSection from "@/components/auth/section/ChannelNicknameSection"
import InviteCodeInputSection from "@/components/auth/section/InviteCodeInputSection"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

const steps = ["InvitationCode", "ChannelNickname", "CreatedCode"]

function Page() {
  const [stepLevel, setStepLevel] = useState(0)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }

  const formMethods = useForm({
    defaultValues: {
      inviteCode: "",
      channelNickname: ""
    }
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

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
        {steps[stepLevel] === "InvitationCode" && <InviteCodeInputSection onNext={onNext} />}
        {steps[stepLevel] === "ChannelNickname" && <ChannelNicknameSection type="invite" onNext={onNext} />}
        {steps[stepLevel] === "CreatedCode" && (
          <Guide title={`이제 친구와 소통하도록\n주파수를 맞춰볼게요.`} onNext={onNext} />
        )}
      </form>
    </FormProvider>
  )
}

export default Page

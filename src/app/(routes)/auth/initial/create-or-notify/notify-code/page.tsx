"use client"

import Guide from "@/components/auth/Guide"
import InitialSetupForm from "@/components/auth/InitialSetupForm"
import { INITIAL_SETUP_INFO } from "@/constants/auth"
import { useState } from "react"

const steps = ["InvitationCode", "ChannelNickname", "CreatedCode"]

function Page() {
  const [stepLevel, setStepLevel] = useState(0)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  return (
    <>
      {steps[stepLevel] === "InvitationCode" && (
        <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.INVITATION_CODE} onNext={onNext} showButton />
      )}
      {steps[stepLevel] === "ChannelNickname" && (
        <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.INVITE_CHANNEL_NICKNAME} onNext={onNext} showButton />
      )}
      {steps[stepLevel] === "CreatedCode" && (
        <Guide title={`이제 친구와 소통하도록\n주파수를 맞춰볼게요.`} onNext={onNext} />
      )}
    </>
  )
}

export default Page

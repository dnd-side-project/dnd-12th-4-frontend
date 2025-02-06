"use client"

import Guide from "@/components/auth/Guide"
import InitialSetupForm from "@/components/auth/InitialSetupForm"
import { GUIDE_INFO, INITIAL_SETUP_INFO } from "@/constants/auth"
import { useState } from "react"

const steps = ["InvitationCode", "ChannelNickname", "CreatedCode"]

function Page() {
  const [stepLevel, setStepLevel] = useState(0)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  return (
    <div>
      {steps[stepLevel] === "InvitationCode" && (
        <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.INVITATION_CODE} onNext={onNext} showButton />
      )}
      {steps[stepLevel] === "ChannelNickname" && (
        <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.INVITE_CHANNEL_NICKNAME} onNext={onNext} showButton />
      )}
      {steps[stepLevel] === "CreatedCode" && (
        <Guide guideInfo={GUIDE_INFO.CHANNEL_NICKNAME} onNext={onNext} isButton={false} />
      )}
    </div>
  )
}

export default Page

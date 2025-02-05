"use client"

import InitialSetupForm from "@/components/auth/initial-setup-form"
import { INITIAL_SETUP_INFO } from "@/constants/auth"
import { useState } from "react"

const steps = ["ChannelName", "ChannelNickname", "CreatedCode"]

function Page() {
  const [stepLevel, setStepLevel] = useState(0)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  return (
    <div>
      {steps[stepLevel] === "ChannelName" && (
        <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.CHANNEL_NAME} onNext={onNext} showButton />
      )}
      {steps[stepLevel] === "ChannelNickname" && (
        <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.CREATE_CHANNEL_NICKNAME} onNext={onNext} showButton />
      )}
      {steps[stepLevel] === "CreatedCode" && (
        <InitialSetupForm
          initialSetupInfo={INITIAL_SETUP_INFO.CREATED_CHANNEL}
          onNext={onNext}
          showInput={false}
          showButton={false}
        >
          <div className="flex h-[108px] w-full flex-col items-center justify-center gap-[4px] rounded-[16px] border-2 border-[#637180] font-semibold">
            <div className="opacity-60">초대코드</div>
            <div className="text-[24px]">2414214124</div>
          </div>
          <div className="flex gap-[12px]">
            <button className="h-[54px] w-full cursor-pointer rounded-xl bg-[#D7DFE7] font-medium">나중에</button>
            <button className="h-[54px] w-full cursor-pointer rounded-xl bg-[#FDD835] font-medium">
              지금 공유할래
            </button>
          </div>
        </InitialSetupForm>
      )}
    </div>
  )
}

export default Page

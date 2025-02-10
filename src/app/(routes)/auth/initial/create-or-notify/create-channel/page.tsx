"use client"

import Button from "@/components/auth/Button"
import Guide from "@/components/auth/Guide"
import InitialSetupForm from "@/components/auth/InitialSetupForm"
import { INITIAL_SETUP_INFO } from "@/constants/auth"
import { useState } from "react"

const steps = ["ChannelName", "ChannelNickname", "CreatedCode", "LaterInvitation"]

function Page() {
  const [stepLevel, setStepLevel] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }

  return (
    <>
      {steps[stepLevel] === "ChannelName" && (
        <InitialSetupForm
          initialSetupInfo={INITIAL_SETUP_INFO.CHANNEL_NAME}
          onNext={onNext}
          setInput={setInputValue}
          inputValue={inputValue}
          showButton
        />
      )}
      {steps[stepLevel] === "ChannelNickname" && (
        <InitialSetupForm
          initialSetupInfo={INITIAL_SETUP_INFO.CREATE_CHANNEL_NICKNAME}
          onNext={onNext}
          setInput={setInputValue}
          inputValue={inputValue}
          showButton
        />
      )}
      {steps[stepLevel] === "CreatedCode" && (
        <InitialSetupForm
          initialSetupInfo={INITIAL_SETUP_INFO.CREATED_CHANNEL}
          showInput={false}
          setInput={setInputValue}
          inputValue={inputValue}
          showButton={false}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex h-[108px] w-full flex-col items-center justify-center gap-[4px] rounded-[16px] border-2 border-[#9CAAB9] font-semibold">
              <div className="opacity-60">초대코드</div>
              <div className="text-[24px]">2414214124</div>
            </div>
            <div className="flex gap-[12px]">
              <Button variant="default" size="default" className="bg-[#ECF0F3]" onNext={onNext}>
                나중에
              </Button>
              <Button variant="default" size="default">
                지금 공유할래
              </Button>
            </div>
          </div>
        </InitialSetupForm>
      )}
      {steps[stepLevel] === "LaterInvitation" && <Guide title={`그럼 채널로\n보내드릴게요!`} />}
    </>
  )
}

export default Page

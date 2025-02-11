"use client"
import Guide from "@/components/auth/Guide"
import CommonNicknameSection from "@/components/auth/section/CommonNicknameSection"
import { FIRST_PAGE } from "@/constants/auth"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

function Page() {
  const steps = ["CommonNickname", "GoodNickname"]

  const [stepLevel, setStepLevel] = useState(FIRST_PAGE)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }

  const formMethods = useForm({
    defaultValues: {
      nickname: ""
    }
  })

  const { watch, handleSubmit } = formMethods
  const nickname = watch("nickname")
  const onSubmit = (data: any) => {
    console.log("폼 데이터:", data)
    //api 요청 성공하면 onNext 실행
    onNext()
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
        {steps[stepLevel] === "CommonNickname" && <CommonNicknameSection onNext={onNext} />}
        {steps[stepLevel] === "GoodNickname" && (
          <Guide title={`${nickname}!\n멋진 이름이네요.`} buttonValue="고마워" nextPageUrl="create-or-notify" />
        )}
      </form>
    </FormProvider>
  )
}

export default Page

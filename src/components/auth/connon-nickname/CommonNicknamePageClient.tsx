"use client"
import { useRegisterName } from "@/api/member-controller/member-controller"
import Guide from "@/components/auth/Guide"
import CreateCommonNicknameSection from "@/components/auth/section/CreateCommonNicknameSection"
import { FIRST_PAGE } from "@/constants/auth"
import { createCommonNicknameSchema } from "@/validations/nicknameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"

function CommonNicknamePageClient() {
  const steps = ["CommonNickname", "GoodNickname"]

  const [stepLevel, setStepLevel] = useState(FIRST_PAGE)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }

  const formMethods = useForm({
    defaultValues: {
      nickname: ""
    },
    resolver: zodResolver(createCommonNicknameSchema),
    mode: "onChange"
  })

  const { watch, handleSubmit } = formMethods
  const nickname = watch("nickname")

  const registerCommonNameMutation = useRegisterName()
  const onSubmit = async () => {
    try {
      await registerCommonNameMutation.mutateAsync({ params: { name: nickname } })
      onNext()
    } catch (error) {
      toast("오류가 발생했습니다!")
      console.error("닉네임 등록 실패:", error)
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col justify-between">
        {steps[stepLevel] === "CommonNickname" && <CreateCommonNicknameSection onNext={onNext} />}
        {steps[stepLevel] === "GoodNickname" && (
          <Guide
            title={`${nickname}!\n멋진 이름이네요.`}
            buttonValue="고마워"
            nextPageUrl="create-or-join"
            imageUrl={"/talki/gif/talki_shinning.gif"}
            unoptimized
          />
        )}
      </form>
    </FormProvider>
  )
}

export default CommonNicknamePageClient

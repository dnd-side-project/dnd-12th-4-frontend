"use client"

import Button from "@/components/common/Button"
import "@/styles/bottomSheet.css"
import { questionSchema } from "@/validations/questionSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Info } from "lucide-react"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import Textarea from "../../common/Textarea"
import Toggle from "../../common/Toggle"
import RecommendQuestionBottomSheet from "./RecommendQuestionBottomSheet"

export default function FormSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      question: "",
      isAnonymous: false
    },
    resolver: zodResolver(questionSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <>
      <section className="h-full w-full px-[16px] pb-[16px]">
        <form className="flex h-full flex-col gap-[12px]" onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            count={2}
            date={new Date()}
            maxLength={100}
            value={watch("question")}
            onChange={(e) => setValue("question", e.target.value, { shouldValidate: true })}
          />
          <section className="flex justify-between">
            <button className="flex items-center gap-[4px]" onClick={() => setIsOpen(true)}>
              <p className="text-[14px] text-black/60">추천 시그널</p>
              <Info size={16} />
            </button>
            <article className="flex items-center gap-[8px]">
              <Toggle
                label="익명으로 보내기"
                checked={watch("isAnonymous")}
                onChange={(e) => setValue("isAnonymous", e.target.checked)}
              />
            </article>
          </section>
          <div className="flex h-full items-end justify-center">
            <Button type="submit" className="w-full">
              보내기
            </Button>
          </div>
        </form>
      </section>
      <RecommendQuestionBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

"use client"

import Button from "@/components/common/Button"
import { Info } from "lucide-react"
import { FieldValues, useForm } from "react-hook-form"
import Textarea from "./Textarea"
import Toggle from "./Toggle"
import { zodResolver } from "@hookform/resolvers/zod"
import { questionSchema } from "@/validations/questionSchema"

export default function FormSection() {
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      question: "",
      isAnonymous: false
    },
    resolver: zodResolver(questionSchema)
  })

  const onSubmit = (data: FieldValues) => {
    console.log("data", data)
  }

  return (
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
          <article className="flex items-center gap-[4px]">
            <p className="text-[14px] text-black/60">추천 시그널</p>
            <Info size={16} />
          </article>
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
  )
}

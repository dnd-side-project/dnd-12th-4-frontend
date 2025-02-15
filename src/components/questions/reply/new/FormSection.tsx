"use client"
import Button from "@/components/common/Button"
import Textarea from "@/components/common/Textarea"
import Toggle from "@/components/common/Toggle"
import { replySchema } from "@/validations/replySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"

export default function FormSection() {
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      question: "",
      isAnonymous: false
    },
    resolver: zodResolver(replySchema)
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <form className="mt-[12px] flex h-full w-full flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <section>
        <Textarea
          maxLength={500}
          value={watch("question")}
          onChange={(e) => setValue("question", e.target.value, { shouldValidate: true })}
        />
        <div className="mt-[16px] flex justify-end">
          <Toggle
            label="익명으로 보내기"
            checked={watch("isAnonymous")}
            onChange={(e) => setValue("isAnonymous", e.target.checked)}
          />
        </div>
      </section>
      <Button type="submit" className="w-full">
        보내기
      </Button>
    </form>
  )
}

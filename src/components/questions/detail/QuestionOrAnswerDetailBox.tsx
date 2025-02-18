"use client"
import { cn } from "@/utils/cn"
import { replyEditSchema } from "@/validations/replySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useRef, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface QuestionOrAnswerDetailBoxProps {
  imageSrc: string
  content: string
  nickname: string
  time: number
  isMyAnswer?: boolean
}
export default function QuestionOrAnswerDetailBox({
  imageSrc,
  content,
  nickname,
  time,
  isMyAnswer
}: QuestionOrAnswerDetailBoxProps) {
  const [edit, setEdit] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleEditClick = () => {
    setEdit(true)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const { watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      content: content
    },
    resolver: zodResolver(replyEditSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)

    setEdit(false)
  }

  return (
    <form
      className="flex flex-col gap-[12px] rounded-[24px] bg-[#F5F8FA] px-[20px] py-[24px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-[8px]">
        <Image src={imageSrc} className="rounded-full object-cover" width={32} height={32} alt="프로필 이미지" />
        <div className="flex flex-col">
          <div className="text-body-03 text-emphasis-high">{nickname}</div>
          <div className="text-caption-02 text-emphasis-medium">{time}시간 전</div>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        className={cn(
          "resize-none bg-inherit text-body-04 text-emphasis-high",
          edit ? "cursor-text outline-2" : "cursor-default outline-none"
        )}
        rows={2}
        value={watch("content")}
        onChange={(e) => setValue("content", e.target.value, { shouldValidate: true })}
        readOnly={!edit}
      />
      {isMyAnswer &&
        (edit ? (
          <div className="flex justify-end gap-[12px] text-caption-02 text-emphasis-medium">
            <button type="button" onClick={() => setEdit(false)}>
              취소
            </button>
            <button type="submit">수정</button>
          </div>
        ) : (
          <div className="flex justify-end gap-[12px] text-[12px] text-black/60">
            <button type="button" onClick={handleEditClick}>
              수정
            </button>
            <button type="button">삭제</button>
          </div>
        ))}
    </form>
  )
}

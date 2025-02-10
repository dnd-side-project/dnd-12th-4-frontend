"use client"

import Button from "@/components/common/Button"
import ModalWrapper from "@/components/common/ModalWrapper"
import Tag from "@/components/common/Tag"
import { cn } from "@/utils/cn"
import { replyEditSchema } from "@/validations/replySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface AnswerCardItemProps {
  message: string
  channelName: string
}

export default function AnswerCardItem({ message, channelName }: AnswerCardItemProps) {
  const [edit, setEdit] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleEditClick = () => {
    setEdit(true)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const { watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      content: message
    },
    resolver: zodResolver(replyEditSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)

    setEdit(false)
  }

  return (
    <>
      <form className="flex flex-col gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px]" onSubmit={handleSubmit(onSubmit)}>
        <Tag text="000번째 시그널" className="bg-[#D7DFE7]" />
        <textarea
          ref={textareaRef}
          className={cn(
            "resize-none bg-inherit text-[14px] font-medium text-black/80",
            edit ? "cursor-text outline-2" : "cursor-default outline-none"
          )}
          rows={2}
          value={watch("content")}
          onChange={(e) => setValue("content", e.target.value, { shouldValidate: true })}
          readOnly={!edit}
        />
        <div className="flex items-center justify-between text-black text-opacity-60">
          <div className="text-[14px]">{channelName}</div>
          {edit ? (
            <div className="flex justify-end gap-[12px] text-[12px] text-black/60">
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
              <button type="button" onClick={() => setIsDeleteModal(true)}>
                삭제
              </button>
            </div>
          )}
        </div>
      </form>
      {isDeleteModal && (
        <ModalWrapper>
          <section className="flex w-[340px] flex-col items-center gap-[20px] rounded-[24px] bg-white px-[20px] pb-[20px] pt-[40px]">
            <article className="flex flex-col gap-[8px]">
              <p className="text-[20px] font-semibold">채널을 나가시겠어요?</p>
              <p>초대 코드로 재참여가 가능해요.</p>
            </article>
            <article className="flex gap-[12px]">
              <Button className="h-[52px]" onClick={() => setIsDeleteModal((prev) => !prev)}>
                취소하기
              </Button>
              <Button className="h-[52px]" onClick={() => console.log("delete")}>
                삭제하기
              </Button>
            </article>
          </section>
        </ModalWrapper>
      )}
    </>
  )
}

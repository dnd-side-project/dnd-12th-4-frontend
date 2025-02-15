"use client"

import ConfirmModal from "@/components/common/ConfirmModal"
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
        <ConfirmModal
          title="삭제 하시겠습니까?"
          onCancel={() => setIsDeleteModal((prev) => !prev)}
          onClick={() => console.log("delete 요청")}
        />
      )}
    </>
  )
}

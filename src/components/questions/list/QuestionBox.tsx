"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface QuestionBoxProps {
  id: number
  signalNumber: number
  replyCount: number
  nickname: string
  time: string
  content: string
}
export default function QuestionBox({ id, signalNumber, replyCount, nickname, time, content }: QuestionBoxProps) {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")

  return (
    <>
      <Link
        href={`questions/${id}/detail`}
        className="flex cursor-pointer flex-col gap-[12px] rounded-[24px] bg-[#F5F8FA] px-[20px] py-[24px]"
      >
        <p className="inline-block w-fit rounded-[40px] bg-secondary-0 px-[12px] py-[4px] text-[12px] font-medium text-secondary-300">
          {signalNumber}번째 시그널
        </p>
        <div className="text-body-04 text-emphasis-high">{content}</div>
        <div className="flex text-[12px] text-caption-02 text-emphasis-medium">
          <div className="flex flex-1 gap-[12px]">
            {tab !== "my-signal" && <p>{nickname}</p>}
            <p>{time}시간 전</p>
          </div>
          <div className="flex items-center gap-[4px]">
            <MessageCircle className="size-[16px]" />
            <p>{replyCount}</p>
          </div>
        </div>
      </Link>
      <div className="mb-[12px]" />
    </>
  )
}

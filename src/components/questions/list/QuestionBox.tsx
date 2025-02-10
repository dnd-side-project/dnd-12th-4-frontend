"use client"

import { MessageCircle } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface QuestionBoxProps {
  count: number
  nickname: string
  time: number
  text: string
}
export default function QuestionBox({ count, nickname, time, text }: QuestionBoxProps) {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")
  const router = useRouter()

  const handleBoxClick = () => {
    router.push(`questions/${2}/detail`)
  }

  return (
    <>
      <div
        onClick={handleBoxClick}
        className="flex cursor-pointer flex-col gap-[12px] rounded-[24px] bg-[#F5F8FA] px-[20px] py-[24px]"
      >
        <p className="inline-block w-fit rounded-[40px] bg-[#D7DFE7] px-[12px] py-[4px] text-[12px] font-medium text-black/60">
          {count}번째 시그널
        </p>
        <div className="text-[14px] font-medium">{text}</div>
        <div className="flex text-[12px]">
          <div className="flex flex-1 gap-[12px]">
            {tab !== "my-signal" && <p className="font-medium">{nickname}</p>}
            <p className="text-black/60">{time}시간 전</p>
          </div>
          <div className="flex items-center gap-[4px]">
            <MessageCircle className="size-[16px]" />
            <p className="text-black/60">{count}</p>
          </div>
        </div>
      </div>
      <div className="mb-[12px]" />
    </>
  )
}

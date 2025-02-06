"use client"

import { cn } from "@/utils/cn"
import Tag from "./Tag"

interface Params {
  count?: number
  replyCount?: number
  date?: Date
  nickname?: string
  text: string
}

export default function QuestionBox({ count = 1, replyCount = 0, date, nickname = "익명", text }: Params) {
  return (
    <section className="relative flex w-full flex-col gap-[12px] rounded-[20px] bg-[#F5F8FA] px-[20px] py-[24px] font-semibold">
      <div className={cn("flex w-full items-center")}>
        {<Tag text={`${count}번째 시그널`} className="bg-[#D7DFE7]" />}
      </div>
      <p className="text-[12px]">
        지금까지 <span className="text-[#9CAAB9]">{replyCount}</span>명이 응답했어요
      </p>
      <p className="w-full bg-inherit font-semibold">{text}</p>
      <div className="flex gap-[12px] text-[12px]">
        <p>{nickname}</p>
        {date && <p className="text-black/60">2025.00.00</p>}
      </div>
    </section>
  )
}

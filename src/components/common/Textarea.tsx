"use client"

import { cn } from "@/utils/cn"
import type { TextareaHTMLAttributes } from "react"
import Tag from "@/components/common/Tag"

interface Params extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  count?: number
  date?: Date
  maxLength?: number
}

export default function Textarea({ count, date, maxLength, ...props }: Params) {
  return (
    <section className="relative flex w-full flex-col items-center gap-[12px] rounded-[20px] bg-gray-01 p-[20px] font-semibold">
      {(count || date) && (
        <div className={cn("flex w-full items-center", count ? "justify-between" : "justify-end")}>
          {count && <Tag text={`${count}번째 시그널`} />}
          {date && <p className="text-[12px] text-black/60">2025.00.00</p>}
        </div>
      )}
      <textarea
        {...props}
        maxLength={maxLength}
        placeholder="가이드 텍스트입니다."
        className={cn(
          "w-full resize-none bg-inherit text-body-04 text-emphasis-medium outline-none placeholder:text-emphasis-medium",
          props.className
        )}
      />
      {maxLength && (
        <p className="self-end text-caption-02 text-emphasis-medium">
          <span className="">{props.value ? props.value.toString().length : 0}</span>
          <span className="">/{maxLength}</span>
        </p>
      )}
    </section>
  )
}

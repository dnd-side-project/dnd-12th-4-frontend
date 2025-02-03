"use client"

import { cn } from "@/utils/cn"
import type { TextareaHTMLAttributes } from "react"

interface Params extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  count?: number
  date?: Date
  maxLength?: number
}

export default function Textarea({ count, date, maxLength, ...props }: Params) {
  return (
    <section className="relative flex w-full flex-col items-center gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px] font-semibold">
      {(count || date) && (
        <div className={cn("flex w-full items-center", count ? "justify-between" : "justify-end")}>
          {count && (
            <p className="rounded-[40px] bg-[#D7DFE7] px-[12px] py-[4px] text-[12px] text-black/60">000번째 시그널</p>
          )}
          {date && <p className="text-[12px] text-black/60">2025.00.00</p>}
        </div>
      )}
      <textarea
        {...props}
        maxLength={maxLength}
        className={cn("w-full resize-none bg-inherit outline-none placeholder:text-black/60", props.className)}
      />
      {maxLength && (
        <p className="self-end text-[14px] text-black/60">{`${props.value ? props.value.toString().length : 0}/${maxLength}`}</p>
      )}
    </section>
  )
}

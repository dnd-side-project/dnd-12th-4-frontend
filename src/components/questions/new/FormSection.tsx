"use client"

import { Info } from "lucide-react"
import Textarea from "./Textarea"
import Toggle from "./Toggle"
import Button from "@/components/common/Button"

export default function FormSection() {
  return (
    <section className="flex h-full w-full flex-col gap-[12px] px-[16px] pb-[16px]">
      <Textarea count={2} date={new Date()} maxLength={100} />
      <section className="flex justify-between">
        <article className="flex items-center gap-[4px]">
          <p className="text-[14px] text-black/60">추천 시그널</p>
          <Info size={16} />
        </article>
        <article className="flex items-center gap-[8px]">
          <Toggle label="익명으로 보내기" />
        </article>
      </section>
      <div className="flex h-full items-end justify-center">
        <Button className="w-full">보내기</Button>
      </div>
    </section>
  )
}

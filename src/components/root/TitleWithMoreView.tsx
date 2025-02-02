"use client"

import { cn } from "@/utils/cn"
import { ChevronRight } from "lucide-react"

interface Params {
  title: string
  className?: string
  onClick?: () => void
}
export default function TitleWithMoreView({ title, className, onClick }: Params) {
  return (
    <div className={cn("flex justify-between", className)}>
      <p className="text-[20px] font-semibold">{title}</p>
      <button className="flex items-center justify-center" onClick={onClick}>
        더보기 <ChevronRight size={24} />
      </button>
    </div>
  )
}

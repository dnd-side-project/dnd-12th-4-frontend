"use client"

import { ChevronRight } from "lucide-react"

interface Params {
  title: string
  onClick?: () => void
}
export default function TitleWithMoreView({ title, onClick }: Params) {
  return (
    <div className="flex justify-between">
      <p className="text-[20px] font-semibold">{title}</p>
      <button className="flex items-center justify-center" onClick={onClick}>
        더보기 <ChevronRight size={24} />
      </button>
    </div>
  )
}

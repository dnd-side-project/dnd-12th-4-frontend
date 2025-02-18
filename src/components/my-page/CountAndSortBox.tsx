"use client"
import { ChevronDown } from "lucide-react"
import FilterBottomSheet from "@/components/channels/FilterBottomSheet"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

interface CountAndSortBoxProps {
  type: "채널" | "응답" | "시그널"
  count: number
}
export default function CountAndSortBox({ type, count }: CountAndSortBoxProps) {
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort")
  const [isOpenFilterSheet, setIsOpenFilterSheet] = useState(false)

  return (
    <div className="flex justify-between py-[12px]">
      <div className="flex items-center gap-[2px] text-body-03 text-emphasis-high">
        <div>{type}</div>
        <div className="text-secondary-300">{count}</div>
      </div>
      <button className="flex items-center gap-[2px]" onClick={() => setIsOpenFilterSheet(true)}>
        <div className="text-[14px] font-medium">{sort === "oldest" ? "오래된 순" : "최신순"}</div>
        <ChevronDown size={12} />
      </button>
      <FilterBottomSheet isOpen={isOpenFilterSheet} setIsOpen={setIsOpenFilterSheet} />
    </div>
  )
}

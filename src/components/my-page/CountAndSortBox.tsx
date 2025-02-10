"use client"
import { ChevronDown } from "lucide-react"
import FilterBottomSheet from "@/components/channels/FilterBottomSheet"
import { useState } from "react"

interface CountAndSortBoxProps {
  type: "채널" | "응답" | "시그널"
  count: number
}
export default function CountAndSortBox({ type, count }: CountAndSortBoxProps) {
  const [isOpenFilterSheet, setIsOpenFilterSheet] = useState(false)

  return (
    <div className="flex justify-between py-[12px]">
      <div className="flex items-center gap-[2px] text-[14px]">
        <div>{type}</div>
        <div className="text-[#9CAAB9]">{count}</div>
      </div>
      <button className="flex items-center gap-[2px]" onClick={() => setIsOpenFilterSheet(true)}>
        <div className="text-[14px] font-medium">최신순</div>
        <ChevronDown className="w-[12px]" />
      </button>
      <FilterBottomSheet isOpen={isOpenFilterSheet} setIsOpen={setIsOpenFilterSheet} />
    </div>
  )
}

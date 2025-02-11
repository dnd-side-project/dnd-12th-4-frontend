"use client"
import FilterBottomSheet from "@/components/channels/FilterBottomSheet"
import { ChevronDown } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"

interface Params {
  count: number
  setEditMode: Dispatch<SetStateAction<boolean>>
}
export default function ListHeader({ count, setEditMode }: Params) {
  const [isOpenFilterSheet, setIsOpenFilterSheet] = useState(false)

  return (
    <section className="flex justify-between py-[12px]">
      <article className="flex items-center gap-[4px] text-[14px]">
        <p>채널</p>
        <p className="text-[#9CAAB9]">{count}</p>
      </article>
      <article className="flex items-center gap-[12px]">
        <button onClick={() => setEditMode(true)}>
          <p className="text-[14px] font-medium">편집</p>
        </button>
        <div className="flex h-[12px] items-center justify-center">
          <div className="h-full w-[2px] bg-gray-300" />
        </div>
        <button className="flex items-center gap-[4px]" onClick={() => setIsOpenFilterSheet(true)}>
          <p className="text-[14px] font-medium">최신순</p>
          <ChevronDown size={12} />
        </button>
      </article>
      <FilterBottomSheet isOpen={isOpenFilterSheet} setIsOpen={setIsOpenFilterSheet} />
    </section>
  )
}

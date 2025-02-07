import { ChevronDown } from "lucide-react"

interface CountAndSortBoxProps {
  type: "채널" | "응답"
  count: number
}
export default function CountAndSortBox({ type, count }: CountAndSortBoxProps) {
  return (
    <div className="flex justify-between py-[12px]">
      <div className="flex items-center gap-[2px] text-[14px]">
        <div>{type}</div>
        <div className="text-[#9CAAB9]">{count}</div>
      </div>
      <div className="flex items-center gap-[2px]">
        <div className="text-[14px] font-medium">최신순</div>
        <ChevronDown className="w-[12px]" />
      </div>
    </div>
  )
}

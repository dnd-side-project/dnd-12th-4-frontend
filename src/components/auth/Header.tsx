import { ArrowLeft } from "lucide-react"

export default function Header({ onPrev }: { onPrev: () => void }) {
  return (
    <div className="absolute top-0 flex h-[56px] items-center">
      <ArrowLeft onClick={onPrev} className="size-[24px] cursor-pointer text-[#5F6368]" />
    </div>
  )
}

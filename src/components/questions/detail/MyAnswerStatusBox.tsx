"use client"
import { cn } from "@/utils/cn"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface MyAnswerStatusBoxProps {
  title: string
  isMyAnswer?: boolean
}
export default function MyAnswerStatusBox({ title, isMyAnswer }: MyAnswerStatusBoxProps) {
  const router = useRouter()

  const handleBoxClick = () => {
    if (!isMyAnswer) {
      router.push("reply/new")
    }
  }

  return (
    <div
      onClick={handleBoxClick}
      className={cn(
        "flex items-center justify-between rounded-[12px] bg-[#F5F8FA] px-[20px] py-[12px]",
        isMyAnswer ? "pointer-events-none" : "cursor-pointer hover:bg-gray-200"
      )}
    >
      <div className="flex flex-1 items-center gap-[12px]">
        <Image src="https://placehold.co/230x230.png" width={24} height={24} alt="아이콘" />
        <p className="text-[14px] font-medium">{title}</p>
      </div>
      {!isMyAnswer && <ChevronRight className="size-[24px]" />}
    </div>
  )
}

"use client"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface CardButtonProps {
  title: string
  description?: string
  onClick?: () => void
  nextUrl: string
  className?: string
}

const CardButton = ({ title, description, nextUrl, className = "" }: CardButtonProps) => {
  const router = useRouter()
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push(nextUrl)
  }

  return (
    <button
      onClick={handleButtonClick}
      className={`flex h-[100px] w-full items-center justify-between rounded-[12px] border border-[#9CAAB9] px-[20px] py-[24px] transition hover:bg-gray-100 ${className}`}
    >
      <div className="flex flex-col items-start">
        <div className="text-[20px] font-semibold">{title}</div>
        {description && <div className="text-[14px] font-medium text-gray-600">{description}</div>}
      </div>
      <ChevronRight />
    </button>
  )
}

export default CardButton

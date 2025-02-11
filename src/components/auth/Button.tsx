"use client"
import { cn } from "@/utils/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonVariants
  size: keyof typeof buttonSizes
  children: React.ReactNode
  className?: string
  onNext?: () => void
  isSubmit?: boolean
}

const buttonVariants = {
  default:
    "cursor-pointer rounded-xl font-medium bg-[#FDD835] cursor-pointer hover:opacity-70 active:opacity-80 disabled:bg-[#ECF0F3] disabled:pointer-events-none",
  kakao:
    "mb-[12px] relative flex items-center justify-center rounded-xl bg-[#FEE500] hover:opacity-70 active:opacity-80 cursor-pointer"
}

const buttonSizes = {
  default: "h-[54px] w-full",
  kakao: "h-[51.45px] w-full"
}

export default function Button({ variant, children, size, className, onNext, isSubmit, ...props }: ButtonProps) {
  console.log(isSubmit)
  const handleButtonClick = () => {
    if (!isSubmit && onNext) {
      onNext()
    }
  }
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cn(buttonVariants[variant], buttonSizes[size], className)}
      onClick={handleButtonClick}
      {...props}
    >
      {children}
    </button>
  )
}

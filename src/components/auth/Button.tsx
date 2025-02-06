"use client"
import { cn } from "@/utils/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonVariants
  size: keyof typeof buttonSizes
  children: React.ReactNode
  className?: string
}

const buttonVariants = {
  default: "cursor-pointer rounded-xl font-medium bg-[#FDD835]",
  kakao: "relative flex items-center justify-center rounded-xl bg-[#FEE500] hover:opacity-70 active:opacity-80"
}

const buttonSizes = {
  default: "h-[54px] w-full",
  kakao: "h-[51.45px] w-full"
}

export default function Button({ variant, children, size, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants[variant], buttonSizes[size], className)} {...props}>
      {children}
    </button>
  )
}

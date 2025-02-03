"use client"

import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"
import { ReactNode } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...buttonProps }: Params) {
  return (
    <button
      {...buttonProps}
      className={cn("w-fit rounded-[12px] bg-[#D7DFE7] px-[24px] py-[16px]", buttonProps.className)}
    >
      {children}
    </button>
  )
}

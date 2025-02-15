"use client"

import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes, ForwardedRef } from "react"
import { ReactNode, forwardRef } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = forwardRef(function Button({ children, ...buttonProps }: Params, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={cn("w-fit rounded-[12px] bg-primary px-[24px] py-[16px]", buttonProps.className)}
    >
      {children}
    </button>
  )
})

export default Button

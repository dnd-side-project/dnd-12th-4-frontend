"use client"

import { InputHTMLAttributes } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Toggle({ label, ...props }: Params) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-[8px]">
      {label && <span className="text-[14px] text-black/60">{label}</span>}
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className="peer relative h-[20px] w-[36px] rounded-full bg-[#D7DFE7] after:absolute after:start-[2px] after:top-[2px] after:h-[16px] after:w-[16px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-[16px] peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
    </label>
  )
}

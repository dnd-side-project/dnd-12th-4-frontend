import { cn } from "@/utils/cn"

interface Params {
  text: string
  className?: string
}
export default function Tag({ text, className }: Params) {
  return (
    <div
      className={cn(
        "flex w-fit items-center justify-center rounded-[40px] bg-[#ECF0F3] px-[12px] py-[4px] text-[12px] text-black/60",
        className
      )}
    >
      {text}
    </div>
  )
}

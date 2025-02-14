import { cn } from "@/utils/cn"

interface Params {
  text: string
  className?: string
}
export default function Tag({ text, className }: Params) {
  return (
    <div
      className={cn(
        "flex w-fit items-center justify-center rounded-[40px] bg-secondary-0 px-[12px] py-[4px] text-[12px] text-secondary-300",
        className
      )}
    >
      {text}
    </div>
  )
}

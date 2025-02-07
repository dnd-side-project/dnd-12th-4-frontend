import { cn } from "@/utils/cn"

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}
export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <section
      className={cn(
        "rounded-[100px] bg-[#F5F8FA] px-[12px] py-[6px] text-[14px]",
        isActive && "bg-[#637180] text-white"
      )}
      onClick={onClick}
    >
      {label}
    </section>
  )
}

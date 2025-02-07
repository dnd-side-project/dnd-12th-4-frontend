import { TAB_MENUS } from "@/constants/myPage"
import { cn } from "@/utils/cn"
import Link from "next/link"

export function TabList({ tab }: { tab: string }) {
  return (
    <ul className="flex gap-[8px]">
      {TAB_MENUS.map((tabMenu) => (
        <li
          key={tabMenu.href}
          className={cn(
            "rounded-[100px] bg-[#F5F8FA] px-[12px] py-[6px] text-[14px]",
            tabMenu.href === tab && "bg-[#637180] text-white"
          )}
        >
          <Link href={`/my-page/channel-profile/?tab=${tabMenu.href}`}>{tabMenu.label}</Link>
        </li>
      ))}
    </ul>
  )
}

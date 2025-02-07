import { TABS } from "@/constants/myPage"
import Link from "next/link"

export function TabList() {
  return (
    <ul className="flex gap-[8px]">
      {TABS.map((tab) => (
        <li key={tab.href} className="rounded-[100px] bg-[#F5F8FA] px-[12px] py-[6px] text-[14px]">
          <Link href={tab.href}>{tab.label}</Link>
        </li>
      ))}
    </ul>
  )
}

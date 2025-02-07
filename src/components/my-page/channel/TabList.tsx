"use client"
import Tab from "@/components/common/Tab"
import { TAB_MENUS } from "@/constants/myPage"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function TabList() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const tab = searchParams.get("tab")
  return (
    <>
      {TAB_MENUS.map((TAB_MENU) => (
        <Tab
          key={TAB_MENU.value}
          label={TAB_MENU.label}
          isActive={tab === TAB_MENU.value}
          onClick={() => router.push(`${pathname}?tab=${TAB_MENU.value}`)}
        />
      ))}
    </>
  )
}

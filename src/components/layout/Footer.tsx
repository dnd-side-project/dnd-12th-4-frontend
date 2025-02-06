"use client"

import { Antenna, House, ScrollText, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const navButtonClassName = "flex h-full w-full flex-col items-center justify-center"

  return (
    <div className="fixed bottom-0 z-50 flex h-[80px] w-full max-w-screen-lg items-center justify-around bg-gray-500 px-[12px]">
      <button className={navButtonClassName} onClick={() => router.push("/")}>
        <House size={24} />
        <p>홈</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push("/questions")}>
        <ScrollText size={24} />
        <p>리스트</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push("/channels")}>
        <Antenna size={24} />
        <p>채널</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push("/my-page")}>
        <User size={24} />
        <p>나</p>
      </button>
    </div>
  )
}

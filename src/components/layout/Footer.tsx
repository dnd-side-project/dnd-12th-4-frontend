"use client"

import { Antenna, House, ScrollText, User } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

export default function Footer() {
  const { id } = useParams()
  const router = useRouter()

  const navButtonClassName = "flex h-full w-full flex-col items-center justify-center"

  return (
    <div className="fixed bottom-0 z-50 flex h-[80px] w-full max-w-screen-lg items-center justify-around bg-gray-500 px-[12px]">
      <button className={navButtonClassName} onClick={() => router.push(`/${id}`)}>
        <House size={24} />
        <p>홈</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push(`/${id}/questions`)}>
        <ScrollText size={24} />
        <p>리스트</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push(`/${id}/channels`)}>
        <Antenna size={24} />
        <p>채널</p>
      </button>
      <button className={navButtonClassName} onClick={() => router.push(`/${id}/my-page`)}>
        <User size={24} />
        <p>나</p>
      </button>
    </div>
  )
}

"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProfileCard() {
  const { id } = useParams()
  return (
    <Link
      href={`/${id}/my-page/modify/common-profile`}
      className="flex h-[113px] items-center gap-[12px] rounded-[20px] bg-primary-200/15 p-[20px]"
    >
      <Image
        src="https://placehold.co/229x229.png"
        className="rounded-full object-cover"
        width={60}
        height={60}
        alt="프로필 이미지"
      />
      <div className="flex flex-col">
        <div className="text-caption-01 opacity-60">공용 프로필</div>
        <div className="text-subtitle-02 opacity-[0.87]">닉네임이에요</div>
        <div className="text-body-04 opacity-60">email@google.com</div>
      </div>
    </Link>
  )
}

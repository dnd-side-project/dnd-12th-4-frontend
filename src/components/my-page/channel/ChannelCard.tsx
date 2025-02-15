"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

interface ChannelCardProps {
  imageSrc: string
  nickname: string
  channelName: string
}
export function ChannelCard({ imageSrc, nickname, channelName }: ChannelCardProps) {
  const { id } = useParams()
  return (
    <div className="flex h-[113px] items-center gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px]">
      <Image src={imageSrc} className="rounded-full object-cover" width={60} height={60} alt="프로필 이미지" />
      <div className="flex w-full flex-col gap-[4px]">
        <div className="flex items-center justify-between">
          <div className="text-[18px] font-semibold">{nickname}</div>
          <Link
            href={`/${id}/my-page/modify/channel-profile?channelName=${"dd"}`}
            className="text-[12px] text-opacity-60"
          >
            수정
          </Link>
        </div>
        <div className="text-[14px] opacity-60">{channelName}</div>
      </div>
    </div>
  )
}

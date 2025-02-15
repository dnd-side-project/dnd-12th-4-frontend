"use client"
import { useFindChannelById } from "@/api/channel-controller/channel-controller"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function TitleSection() {
  const { id } = useParams()
  const { data } = useFindChannelById(id as string)
  return (
    <section className="flex items-center justify-between p-[16px]">
      <Image src={"/favicon.ico"} alt="타이틀" width={40} height={40} />
      <div className="flex flex-col items-end font-pixel text-pixel-headline text-gray-01">
        <p className="01">{data?.body?.channelRoomName ?? ""}</p>
        <p>
          <span className="text-primary-200">{data?.body?.countPerson}</span>명이 참여 중
        </p>
      </div>
    </section>
  )
}

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
      <div className="flex flex-col items-end text-white">
        <p>{data?.body?.channelRoomName ?? ""}</p>
        <p>{data?.body?.countPerson}명이 참여 중</p>
      </div>
    </section>
  )
}

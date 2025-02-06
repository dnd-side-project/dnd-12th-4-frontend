"use client"
import { Share2 } from "lucide-react"
import Tag from "@/components/common/Tag"
import { share, ShareAPIRequest } from "@/utils/share"
interface Params {
  count: number
  name: string
  memberCount: number
  owner: string
}
export default function ChannelBox({ count, name, memberCount, owner }: Params) {
  const handleShare = async () => {
    const shareData: ShareAPIRequest = {
      // Todo 데이터 알맞게 수정
      title: "DND",
      text: "DND-12-4팀",
      url: "https://dnd.ac"
    }
    share(shareData)
  }
  return (
    <section className="flex flex-col gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px]">
      <article className="flex justify-between">
        <Tag text={`${count}번째 시그널`} className="bg-[#D7DFE7]" />
        <button onClick={handleShare}>
          <Share2 size={24} />
        </button>
      </article>
      <article>
        <p className="text-[18px] font-semibold">채널명 {name}</p>
        <p className="text-[16px]">누군가 시그널을 보냈어요</p>
      </article>
      <article className="flex justify-between text-[12px] text-black/60">
        <p>{memberCount}명과 소통 중이에요.</p>
        <p>채널장 : {owner}</p>
      </article>
    </section>
  )
}

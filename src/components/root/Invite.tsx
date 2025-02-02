import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Invite() {
  return (
    <section className="flex flex-col gap-[12px] rounded-[20px] bg-white p-[20px]">
      <article className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <Image src={"/favicon.ico"} alt="logo" width={45} height={45} />
          <div className="flex flex-col gap-[4px]">
            <p className="font-semibold">새로운 친구와 소통해 보세요.</p>
            <p className="text-[14px]">코드를 보내 채널에 초대해보세요.</p>
          </div>
        </div>
        <ChevronRight size={24} />
      </article>
    </section>
  )
}

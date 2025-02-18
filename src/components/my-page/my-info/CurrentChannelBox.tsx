import Tag from "@/components/common/Tag"
import { cn } from "@/utils/cn"
import { EllipsisVertical } from "lucide-react"

interface CurrentChannelBoxProps {
  count: number
  name: string
  memberCount: number
  owner: string
  selected?: boolean
  onClick: () => void
}

export default function CurrentChannelBox({ count, name, memberCount, owner, onClick }: CurrentChannelBoxProps) {
  return (
    <section className={cn("flex flex-col gap-[12px] rounded-[24px] bg-gray-01 p-[20px]")}>
      <article className="flex items-center justify-between">
        <Tag text={`${count}번째 시그널`} className="bg-primary-200/15 text-caption-01 font-medium text-primary-400" />

        <div className="flex h-[24px] w-[24px] items-center justify-center" onClick={onClick}>
          <EllipsisVertical size={24} className="cursor-pointer text-black/60" />
        </div>
      </article>
      <article>
        <p className="text-subtitle-02 font-semibold text-emphasis-high">{name}</p>
        <p className="text-body-03 text-emphasis-medium">채널장 : {owner}</p>
      </article>
      <article className="flex justify-between text-[12px] text-emphasis-medium">
        <p className="text-caption-02">응답을 기다리는 중..</p>
        <p className="text-caption-01">
          <span className="text-secondary-300">{memberCount}명</span> 참여 중
        </p>
      </article>
    </section>
  )
}

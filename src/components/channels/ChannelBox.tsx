"use client"
import Tag from "@/components/common/Tag"
import { cn } from "@/utils/cn"
import { share, ShareAPIRequest } from "@/utils/share"
import { DeleteChannelType } from "@/validations/channelSchema"
import { Share2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useFormContext } from "react-hook-form"
interface Params {
  channelId: string
  count: number
  name: string
  memberCount: number
  owner: string
  selected?: boolean
  editMode?: boolean
}
export default function ChannelBox({
  channelId,
  count,
  name,
  memberCount,
  owner,
  editMode = false,
  selected = false
}: Params) {
  const { setValue, watch } = useFormContext<DeleteChannelType>()
  const router = useRouter()

  const onClickChannelBox = () => {
    const currentChannelId = watch("channelIds") || []

    if (!selected) {
      setValue("channelIds", [...currentChannelId, channelId], { shouldValidate: true })
    } else {
      const updatedChannelId = currentChannelId.filter((id) => id !== channelId)
      setValue("channelIds", updatedChannelId, { shouldValidate: true })
    }
  }

  const handleShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const shareData: ShareAPIRequest = {
      // Todo 데이터 알맞게 수정
      title: "DND",
      text: "DND-12-4팀",
      url: "https://dnd.ac"
    }
    share(shareData)
  }

  return (
    <section
      className={cn(
        "flex flex-col gap-[12px] rounded-[20px] border bg-[#F5F8FA] p-[20px]",
        editMode && selected ? "border-[#3C4754]" : "border-transparent"
      )}
      onClick={() => {
        if (editMode) {
          onClickChannelBox()
        } else {
          router.push(`/${channelId}`)
        }
      }}
    >
      <article className="flex justify-between">
        <Tag text={`${count}번째 시그널`} className="bg-[#D7DFE7]" />
        <button type="button" onClick={handleShare}>
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

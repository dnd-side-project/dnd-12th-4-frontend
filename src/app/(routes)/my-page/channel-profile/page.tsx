import { ChannelCard } from "@/components/my-page/channel/ChannelCard"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"

export default async function ChannelProfilePage() {
  return (
    <div className="flex flex-col">
      <CountAndSortBox type="채널" count={333} />
      <ChannelCard
        imageSrc="https://placehold.co/229x229.png"
        nickname={"닉네임이에요"}
        channelName={"채널명: 채널명23123123"}
      />
    </div>
  )
}

import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { ChannelCard } from "@/components/my-page/ChannelCard"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"
import { TabList } from "@/components/my-page/TabList"

export default async function ChannelProfilePage() {
  return (
    <HeaderFooterWrapper header footer headerTitle="채널 프로필">
      <div className="flex flex-col px-[16px] py-[12px]">
        <TabList />
        <CountAndSortBox type="채널" count={333} />
        <ChannelCard
          imageSrc="https://placehold.co/229x229.png"
          nickname={"닉네임이에요"}
          channelName={"채널명: 채널명23123123"}
        />
      </div>
    </HeaderFooterWrapper>
  )
}

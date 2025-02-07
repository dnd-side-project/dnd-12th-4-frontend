import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { TabList } from "@/components/my-page/channel/TabList"

export default function ChannelProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderFooterWrapper header footer headerTitle="채널프로필">
      <div className="px-[16px] pt-[12px]">
        <TabList />
        {children}
      </div>
    </HeaderFooterWrapper>
  )
}

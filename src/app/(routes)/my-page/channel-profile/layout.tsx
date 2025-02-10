import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

export default async function ChannelProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderFooterWrapper header footer headerTitle="채널프로필">
      <div className="px-[16px] pt-[12px]">{children}</div>
    </HeaderFooterWrapper>
  )
}

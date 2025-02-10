import ChannelBox from "@/components/channels/ChannelBox"
import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

export default function ChannelsPage() {
  return (
    <HeaderFooterWrapper footer>
      <section className="flex flex-col px-[16px]">
        <MenuHeader button title="채널" buttonTitle="추가" />
        <section className="flex flex-col gap-[20px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <ChannelBox key={data} count={1} name="0000999" memberCount={5} owner="CODECODE" />
          ))}
        </section>
      </section>
    </HeaderFooterWrapper>
  )
}

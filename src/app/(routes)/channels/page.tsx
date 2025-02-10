import ChannelBox from "@/components/channels/ChannelBox"
import Button from "@/components/common/Button"

export default function ChannelsPage() {
  return (
    <section className="flex flex-col px-[16px]">
      <section className="flex justify-between px-[16px] py-[12px]">
        <p className="text-[20px] font-bold">채널</p>
        <Button className="rounded-[4px] bg-[#ECF0F3] px-[12px] py-[4px] text-black/60">추가</Button>
      </section>
      <section className="flex flex-col gap-[20px]">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
          <ChannelBox key={data} count={1} name="0000999" memberCount={5} owner="CODECODE" />
        ))}
      </section>
    </section>
  )
}

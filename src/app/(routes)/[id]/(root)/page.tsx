import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CharacterInformation from "@/components/root/CharacterInformation"
import FriendsSlider from "@/components/root/FriendsSlider"
import InviteButton from "@/components/root/InviteButton"
import TitleSection from "@/components/root/TitleSection"
import TodayAnswerSlider from "@/components/root/TodayAnswerSlider"
import TodayAnswerSummary from "@/components/root/TodayAnswerSummary"

type Params = Promise<{ id: string }>

export default async function Home({ params }: { params: Params }) {
  const { id } = await params
  console.log(id)
  return (
    <HeaderFooterWrapper footer>
      <section className="flex h-full flex-col bg-[#292D30]">
        <TitleSection />
        <CharacterInformation />
        <section className="flex h-full flex-col gap-[40px] rounded-t-[20px] bg-[#EFF3F7] p-[16px]">
          <TodayAnswerSummary />
          <TodayAnswerSlider />
          <InviteButton />
          <FriendsSlider />
        </section>
      </section>
    </HeaderFooterWrapper>
  )
}

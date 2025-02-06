import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CharacterInformation from "@/components/root/CharacterInformation"
import FriendsSlider from "@/components/root/FriendsSlider"
import InviteButton from "@/components/root/InviteButton"
import TitleSection from "@/components/root/TitleSection"
import TodayAnswerSlider from "@/components/root/TodayAnswerSlider"
import TodayAnswerSummary from "@/components/root/TodayAnswerSummary"
import { notFound } from "next/navigation"

type Params = Promise<{ id: string }>

export default async function RootPage({ params }: { params: Params }) {
  const { id } = await params
  // id가 숫자가 아니면 404로 리디렉션
  // Todo 아이디가 존재하는지 확인해야함
  if (isNaN(Number(id))) {
    notFound()
  }

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

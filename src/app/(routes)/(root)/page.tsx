"use client"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CharacterInformation from "@/components/root/CharacterInformation"
import TitleSection from "@/components/root/TitleSection"

export default function Home() {
  return (
    <HeaderFooterWrapper footer>
      <section className="flex h-full flex-col bg-[#292D30]">
        <TitleSection />
        <CharacterInformation />
      </section>
    </HeaderFooterWrapper>
  )
}

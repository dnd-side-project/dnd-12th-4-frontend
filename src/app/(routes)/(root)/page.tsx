"use client"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import TitleSection from "@/components/root/TitleSection"

export default function Home() {
  return (
    <HeaderFooterWrapper footer>
      <section className="flex h-full flex-col bg-[#292D30]">
        <TitleSection />
      </section>
    </HeaderFooterWrapper>
  )
}

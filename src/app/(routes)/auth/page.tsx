import AuthButton from "@/components/auth/auth-button"
import CarouselItems from "@/components/auth/carousel-items"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

export default function Auth() {
  return (
    <HeaderFooterWrapper header footer>
      <div className="mb-6 mt-[58px] flex justify-center">
        <section className="flex w-full flex-col items-center gap-[57px] px-4">
          <CarouselItems />
          <AuthButton />
        </section>
      </div>
    </HeaderFooterWrapper>
  )
}

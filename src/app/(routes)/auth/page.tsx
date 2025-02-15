import LoginButton from "@/components/auth/LoginButton"
import CarouselItems from "@/components/auth/CarouselItems"

export default async function Auth() {
  return (
    <div className="flex h-full justify-center pb-[12px] pt-[56px]">
      <section className="flex w-full flex-col items-center justify-between gap-[57px] px-[16px]">
        <CarouselItems />
        <LoginButton />
      </section>
    </div>
  )
}

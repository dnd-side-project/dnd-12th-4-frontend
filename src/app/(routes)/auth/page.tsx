"use client"
import Button from "@/components/auth/button"
import CarouselItems from "@/components/auth/carousel-items"
import { KakaoSymbol } from "@/icons/KakaoSymbol"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Auth() {
  const session = useSession()
  if (session.data) {
    redirect("/auth/initial/")
  }

  return (
    <div className="flex h-full justify-center pb-[12px] pt-[56px]">
      <section className="flex w-full flex-col items-center justify-between gap-[57px] px-4">
        <CarouselItems />
        <Button variant="kakao" size="kakao" onClick={() => signIn("kakao")}>
          <div className="absolute left-[24px]">
            <KakaoSymbol />
          </div>
          <span className="font-medium">카카오 로그인</span>
        </Button>
      </section>
    </div>
  )
}

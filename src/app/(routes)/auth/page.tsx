"use client"

import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { GoogleSymbol } from "@/icons/GoogleSymbol"
import { KakaoSymbol } from "@/icons/KakaoSymbol"
import { signIn } from "next-auth/react"

import Image from "next/image"

export default function Auth() {
  return (
    <HeaderFooterWrapper header footer>
      <div className="mb-6 mt-[58px] flex justify-center">
        <section className="flex w-full flex-col gap-[57px] px-4">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center text-2xl font-semibold">
              친구와 무전을 주고 받으며
              <br />더 알아갈 수 있어요.
            </div>
            <Image src="https://placehold.co/229x229.png" width={229} height={229} alt="일러스트 이미지" />
          </div>
          <div className="flex w-full flex-col gap-3">
            <button className="flex items-center justify-center gap-3 rounded-xl border border-[#9CAAB9] py-4 hover:opacity-70 active:opacity-80">
              <GoogleSymbol />
              Google로 시작하기
            </button>
            <button
              className="flex items-center justify-center gap-3 rounded-xl bg-[#FEE500] py-4 hover:opacity-70 active:opacity-80"
              onClick={() => signIn("kakao")}
            >
              <KakaoSymbol />
              <span>카카오로 시작하기</span>
            </button>
          </div>
        </section>
      </div>
    </HeaderFooterWrapper>
  )
}

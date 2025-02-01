"use client"
import { GoogleSymbol } from "@/icons/GoogleSymbol"
import { KakaoSymbol } from "@/icons/KakaoSymbol"
import { signIn } from "next-auth/react"
import React from "react"

export default function AuthButton() {
  return (
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
  )
}

"use client"
import Button from "@/components/auth/Button"
import { KakaoSymbol } from "@/icons/KakaoSymbol"
import { signIn } from "next-auth/react"

export default function LoginButton() {
  return (
    <Button variant="kakao" size="kakao" onNext={() => signIn("kakao")}>
      <div className="absolute left-[24px]">
        <KakaoSymbol />
      </div>
      <span className="font-medium">카카오 로그인</span>
    </Button>
  )
}

"use client"

import { useEffect } from "react"
import Button from "../Button"
import TitleAndDescriptionBox from "../TitleAndDescriptionBox"
import Image from "next/image"
import { useFormContext } from "react-hook-form"

interface CommonNicknameSectionProps {
  onNext: () => void
}
export default function CommonNicknameSection({ onNext }: CommonNicknameSectionProps) {
  const { register, watch, setFocus } = useFormContext()
  const nickname = watch("nickname")

  useEffect(() => {
    setFocus("nickname")
  }, [setFocus])

  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={"https://placehold.co/229x229.png"} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox
            title={`그럼..친구들과 소통할\n코드명을 알려주세요`}
            description={`코드명은 앞으로 사용할 닉네임이에요.\n회원 가입 후에도 수정이 가능해요.`}
          />
        </div>
        <input
          {...register("nickname", { required: "닉네임을 입력해주세요." })}
          className="h-[54px] rounded-[12px] border border-[#637180] px-[20px] py-[16px] focus:outline-none"
          placeholder="코드명을 작성해주세요."
        />
      </div>
      <Button variant="default" size="default" onNext={onNext} disabled={!nickname?.trim().length} isSubmit>
        다음
      </Button>
    </>
  )
}

"use client"

import TitleAndDescriptionBox from "@/components/auth/TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"
import { useFormContext } from "react-hook-form"

interface InviteCodeInputSectionProps {
  onNext: () => void
}

export default function InviteCodeInputSection({ onNext }: InviteCodeInputSectionProps) {
  const { register, watch } = useFormContext()
  const inviteCode = watch("inviteCode")

  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={"https://placehold.co/229x229.png"} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox title={`친구에게 받은 코드를\n저에게 알려주세요`} />
        </div>
        <input
          {...register("inviteCode", { required: "초대 코드를 입력해주세요." })}
          className="h-[54px] rounded-[12px] border border-[#637180] px-[20px] py-[16px] focus:outline-none"
          placeholder="초대 코드를 작성해주세요."
        />
      </div>
      <Button variant="default" size="default" onNext={onNext} disabled={!inviteCode.trim().length}>
        다음
      </Button>
    </>
  )
}

"use client"

import TitleAndDescriptionBox from "@/components/auth/TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import Character from "../../../../public/character-front.svg"

interface InviteCodeInputSectionProps {
  onNext: () => void
}

export default function InviteCodeInputSection({ onNext }: InviteCodeInputSectionProps) {
  const { register, watch } = useFormContext()
  const inviteCode = watch("inviteCode")

  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <div className="size-[60px]">
            <Image src={Character} width={60} height={60} alt="캐릭터 이미지" />
          </div>
          <TitleAndDescriptionBox title={`친구에게 받은 코드를\n저에게 알려주세요`} />
        </div>
        <input
          {...register("inviteCode")}
          className="placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none"
          placeholder="초대 코드를 작성해주세요."
        />
      </div>
      <Button variant="default" size="default" onNext={onNext} disabled={!inviteCode.trim().length}>
        다음
      </Button>
    </>
  )
}

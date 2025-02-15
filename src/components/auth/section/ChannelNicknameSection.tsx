"use client"

import TitleAndDescriptionBox from "../TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import Character from "../../../../public/character-front.svg"

interface ChannelNicknameSectionProps {
  onNext: () => void
  type: "create" | "invite"
}
export default function ChannelNicknameSection({ onNext, type }: ChannelNicknameSectionProps) {
  const { register, watch } = useFormContext()
  const channelNickname = watch("channelNickname")

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          <Image src={Character} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox
            title={
              type === "invite"
                ? `초대 받은 채널에서\n채널 코드명으로 활동해 보세요`
                : `채널에서 채널 코드명으로\n활동해 보세요`
            }
            description={`채널 코드명은 한 채널에서 사용할 닉네임이에요.\n회원 가입 후에도 수정이 가능해요.`}
          />
        </div>
        <input
          {...register("channelNickname")}
          className="placeholder-opacity-38 relative h-[56px] w-full rounded-sm border-[1.5px] border-gray-04 px-[20px] py-[16px] text-body-02 text-black/[0.87] focus:border-gray-08 focus:outline-none"
          placeholder="채널 닉네임을 입력해 주세요"
          autoFocus
        />
      </div>
      <Button variant="default" size="default" onNext={onNext} disabled={!channelNickname?.trim().length} isSubmit>
        다음
      </Button>
    </div>
  )
}

"use client"

import TitleAndDescriptionBox from "../TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"
import { useFormContext } from "react-hook-form"

interface CreateChannelNameSectionProps {
  onNext: () => void
}
export default function CreateChannelNameSection({ onNext }: CreateChannelNameSectionProps) {
  const { register, watch } = useFormContext()
  const channelName = watch("channelName")

  return (
    <>
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={"https://placehold.co/229x229.png"} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox
            title={`친구들과 소통할\n채널명을 만들어보세요`}
            description="채널명은 언제든지 수정이 가능해요."
          />
        </div>
        <input
          {...register("channelName", { required: "채널명을 입력해주세요." })}
          className="h-[54px] rounded-[12px] border border-[#637180] px-[20px] py-[16px] focus:outline-none"
          placeholder="채널명을 작성해 주세요"
          autoFocus
        />
      </div>
      <Button variant="default" size="default" onNext={onNext} disabled={!channelName?.trim().length}>
        다음
      </Button>
    </>
  )
}

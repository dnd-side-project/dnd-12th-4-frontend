import TitleAndDescriptionBox from "@/components/auth/TitleAndDescriptionBox"
import Button from "@/components/auth/Button"
import Image from "next/image"

interface CreatedCodeSectionProps {
  onNext: () => void
}

export default function CreatedCodeSection({ onNext }: CreatedCodeSectionProps) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={"https://placehold.co/229x229.png"} width={80} height={80} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox title={`채널을 만들었어요!\n이제 친구를 초대할 수 있어요`} />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex h-[108px] w-full flex-col items-center justify-center gap-[4px] rounded-[16px] border-2 border-[#9CAAB9] font-semibold">
            <div className="opacity-60">초대코드</div>
            <div className="text-[24px]">2414214124</div>
          </div>
          <div className="flex gap-[12px]">
            <Button variant="default" size="default" className="bg-[#ECF0F3]" onNext={onNext}>
              나중에
            </Button>
            <Button variant="default" size="default">
              지금 공유할래
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

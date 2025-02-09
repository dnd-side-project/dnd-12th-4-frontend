import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function QuestionDetailPage() {
  return (
    <HeaderFooterWrapper header headerTitle="시그널">
      <div className="flex flex-col gap-[40px] px-[16px] py-[12px]">
        <div>
          <span className="text-[20px] font-semibold">{1}번째 </span>
          <span className="text-[20px] font-semibold text-[#9cAAb9]">시그널</span>
        </div>
        <div className="flex flex-col gap-[12px]">
          <section className="flex cursor-pointer flex-col gap-[12px] rounded-[24px] bg-[#F5F8FA] px-[20px] py-[24px]">
            <div className="flex items-center gap-[6px]">
              <Image
                src={"https://placehold.co/230x230.png"}
                className="rounded-full object-cover"
                width={32}
                height={32}
                alt="프로필 이미지"
              />
              <div className="flex flex-col">
                <div className="text-[14px] font-semibold text-black/60">닉네임</div>
                <div className="text-[12px] text-black/60">1시간 전</div>
              </div>
            </div>
            <div className="font-medium text-black/[0.87]">
              가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드
              텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가
            </div>
          </section>
          <section className="flex items-center justify-between rounded-[12px] bg-[#F5F8FA] px-[20px] py-[12px]">
            <div className="flex flex-1 items-center gap-[12px]">
              <Image src={"https://placehold.co/230x230.png"} width={24} height={24} alt="아이콘" />
              <p className="text-[14px] font-medium">누군가가 응답을 기다리고 있어요!</p>
            </div>
            <ChevronRight className="size-[24px]" />
          </section>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">
              <span>응답 </span>
              <span className="text-[#9CAAB9]">{5}</span>
            </p>
            <div className="text-[14px]">최신순</div>
          </div>
        </div>
      </div>
    </HeaderFooterWrapper>
  )
}

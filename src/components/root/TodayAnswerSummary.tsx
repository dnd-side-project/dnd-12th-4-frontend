import Image from "next/image"
import Tag from "@/components/common/Tag"

export default function TodayAnswerSummary() {
  return (
    <article className="rounded-[16px] bg-primary-100 p-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[12px]">
          <Tag text="0번째 시그널" className="bg-gray-01 text-emphasis-high" />
          <div className="flex flex-col gap-[4px]">
            <p className="text-subtitle-01 font-semibold text-emphasis-high">시그널이 도착했어요!</p>
            <p className="text-body-03 text-emphasis-medium">지금까지 2명이 응답했어요.</p>
          </div>
        </div>
        <Image src={"/favicon.ico"} alt="unknown" width={80} height={80} />
      </div>
    </article>
  )
}

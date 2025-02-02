import Image from "next/image"

export default function TodayAnswerSummary() {
  return (
    <article className="rounded-[16px] bg-[#D7DFE7] p-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[12px]">
          <p className="flex w-fit items-center justify-center rounded-[40px] bg-[#ECF0F3] px-[12px] py-[4px] text-[12px] text-black/60">
            000번째 시그널
          </p>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[20px] font-semibold">시그널이 도착했어요!</p>
            <p className="text-[14px] text-black/70">지금까지 2명이 응답했어요.</p>
          </div>
        </div>
        <Image src={"/favicon.ico"} alt="unknown" width={80} height={80} />
      </div>
    </article>
  )
}

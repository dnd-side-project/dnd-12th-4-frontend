import Image from "next/image"

interface QuestionOrAnswerDetailBoxProps {
  imageSrc: string
  content: string
  nickname: string
  time: number
  isMyAnswer?: boolean
}
export default function QuestionOrAnswerDetailBox({
  imageSrc,
  content,
  nickname,
  time,
  isMyAnswer
}: QuestionOrAnswerDetailBoxProps) {
  return (
    <div className="flex flex-col gap-[12px] rounded-[24px] bg-[#F5F8FA] px-[20px] py-[24px]">
      <div className="flex items-center gap-[6px]">
        <Image src={imageSrc} className="rounded-full object-cover" width={32} height={32} alt="프로필 이미지" />
        <div className="flex flex-col">
          <div className="text-[14px] font-semibold text-black/60">{nickname}</div>
          <div className="text-[12px] text-black/60">{time}시간 전</div>
        </div>
      </div>
      <div className="font-medium text-black/[0.87]">{content}</div>
      {isMyAnswer && (
        <div className="flex justify-end gap-[10px] text-[12px] text-black/60">
          <button className="">수정</button>
          <button>삭제</button>
        </div>
      )}
    </div>
  )
}

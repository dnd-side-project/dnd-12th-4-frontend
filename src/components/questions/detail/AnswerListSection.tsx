import Image from "next/image"
import QuestionOrAnswerDetailBox from "./QuestionOrAnswerDetailBox"
import { cn } from "@/utils/cn"
import { ChevronDown } from "lucide-react"

export default function AnswerListSection() {
  const answerCount = 3
  return (
    <section className={cn("flex flex-col", answerCount < 1 ? "gap-[60px]" : "gap-[12px]")}>
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-semibold">
          <span>응답 </span>
          <span className="text-[#9CAAB9]">{answerCount}</span>
        </p>
        <div className="flex items-center gap-[6px] text-[14px]">
          <div>최신순</div> {answerCount >= 1 && <ChevronDown className="size-[8px]" />}
        </div>
      </div>
      {answerCount < 1 && (
        <div className="flex flex-col items-center justify-center gap-[12px]">
          <Image src={"https://placehold.co/230x230.png"} width={60} height={60} alt="아이콘" />
          <p className="text-black/60">아직 아무도 응답하지 않았어요</p>
        </div>
      )}
      {answerCount >= 1 && (
        <>
          <QuestionOrAnswerDetailBox
            imageSrc="https://placehold.co/230x230.png"
            content="답장입니다"
            nickname="닉네임2"
            time={5}
            isMyAnswer
          />
          <QuestionOrAnswerDetailBox
            imageSrc="https://placehold.co/230x230.png"
            content="답장입니다"
            nickname="닉네임2"
            time={5}
            isMyAnswer
          />
        </>
      )}
    </section>
  )
}

"use client"

import QuestionOrAnswerDetailBox from "@/components/questions/detail/QuestionOrAnswerDetailBox"
import MyAnswerStatusBox from "@/components/questions/detail/MyAnswerStatusBox"
import { useFindQuestionsByQuestionId } from "@/api/question-controller/question-controller"
import { useParams } from "next/navigation"

export default function QuestionDetailSection() {
  const params = useParams()
  const channelId = String(params.id)
  const questionId = Number(params.questionId)
  //api 수정 후 isMyAnswer 받을 예정
  const isMyAnswer = false
  const { data } = useFindQuestionsByQuestionId(channelId, questionId)
  return (
    <section className="flex flex-col gap-[12px]">
      <header>
        <h2 className="text-subtitle-01">
          <span className="text-secondary-300">{data?.signalNumber}번째 </span>
          <span className="text-emphasis-high">시그널</span>
        </h2>
      </header>
      <article className="flex flex-col gap-[12px]">
        <QuestionOrAnswerDetailBox
          type="question"
          channelId={channelId}
          questionId={questionId}
          imageSrc="https://placehold.co/230x230.png"
          content={data?.content || ""}
          nickname={data?.writerName || ""}
          time={data?.createdAt || ""}
        />
        <MyAnswerStatusBox
          title={isMyAnswer ? "응답을 보내셨네요. 정말 멋져요!" : "질문자가 응답을 기다리고 있어요!"}
        />
      </article>
    </section>
  )
}

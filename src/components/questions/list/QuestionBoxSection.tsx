"use client"

import { useFindQuestionsByMember } from "@/api/question-controller/question-controller"
import QuestionBox from "./QuestionBox"
import { useSearchParams } from "next/navigation"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"

export default function QuestionBoxSection() {
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort") || "latest"
  const tab = searchParams.get("tab") || "all"
  const { data } = useFindQuestionsByMember({ sort, tab })
  return (
    <section>
      {/* 채널 질문 API 요청 예정 (count값 추가) */}
      <CountAndSortBox type="시그널" count={333} />
      <ul>
        {data?.questionResponse?.map((questionData) => (
          <QuestionBox
            key={questionData.questionId}
            id={questionData.questionId || 1}
            signalNumber={questionData.signalNumber || 1}
            nickname={questionData.writerName || ""}
            time={questionData.createdAt || ""}
            content={questionData.content || ""}
            replyCount={questionData.replyCount || 0}
          />
        ))}
      </ul>
    </section>
  )
}

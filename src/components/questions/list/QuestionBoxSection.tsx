"use client"

import { useFindQuestionsByMember } from "@/api/question-controller/question-controller"
import QuestionBox from "./QuestionBox"
import { useSearchParams } from "next/navigation"

export default function QuestionBoxSection() {
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort") || "latest"
  const tab = searchParams.get("tab") || "all"
  const { data } = useFindQuestionsByMember({ sort, tab })
  return (
    <section>
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
    </section>
  )
}

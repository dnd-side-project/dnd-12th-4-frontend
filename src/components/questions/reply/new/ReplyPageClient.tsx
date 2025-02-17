"use client"
import { useFindQuestionsByQuestionId } from "@/api/question-controller/question-controller"
import QuestionBox from "@/components/common/QuestionBox"
import FormSection from "@/components/questions/reply/new/FormSection"
import { useParams } from "next/navigation"

export default function ReplyPageClient() {
  const { id, questionId } = useParams()

  const { data } = useFindQuestionsByQuestionId(id as string, Number(questionId))

  return (
    <section className="flex h-full flex-col items-center px-[16px] pb-[12px]">
      <QuestionBox
        count={data?.signalNumber}
        // replyCount={data?.replyCount}
        replyCount={1}
        date={new Date()}
        nickname="닉네임"
        text={data?.content ?? ""}
      />
      <FormSection />
    </section>
  )
}

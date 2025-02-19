import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import QuestionDetailSection from "@/components/questions/detail/QuestionDetailSection"
import AnswerListSection from "@/components/questions/detail/AnswerListSection"

export default function QuestionDetailPage() {
  return (
    <HeaderFooterWrapper header headerTitle="시그널">
      <div className="flex flex-col gap-[24px] px-[16px] py-[12px]">
        <div className="flex flex-col gap-[12px]">
          <QuestionDetailSection />
        </div>
        <AnswerListSection />
      </div>
    </HeaderFooterWrapper>
  )
}

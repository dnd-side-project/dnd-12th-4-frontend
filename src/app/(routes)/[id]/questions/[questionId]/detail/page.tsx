import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import QuestionDetailSection from "@/components/questions/detail/QuestionDetailSection"
import AnswerListSection from "@/components/questions/list/AnswerListSection"

export default function QuestionDetailPage() {
  return (
    <HeaderFooterWrapper header headerTitle="시그널">
      <div className="flex flex-col gap-[44px] px-[16px] py-[12px]">
        <div className="flex flex-col gap-[12px]">
          <div>
            <span className="text-[20px] font-semibold">{1}번째 </span>
            <span className="text-[20px] font-semibold text-[#9cAAb9]">시그널</span>
          </div>
          <QuestionDetailSection />
        </div>
        <AnswerListSection />
      </div>
    </HeaderFooterWrapper>
  )
}

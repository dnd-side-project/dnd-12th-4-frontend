import QuestionBox from "@/components/common/QuestionBox"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import FormSection from "@/components/questions/reply/new/FormSection"

export default function ReplyPage() {
  return (
    <HeaderFooterWrapper header headerTitle="응답 작성">
      <section className="flex h-full flex-col items-center px-[16px] pb-[12px]">
        <QuestionBox
          count={1}
          replyCount={1}
          date={new Date()}
          nickname="닉네임"
          text="이번 주에 가장 기뻤던 일이 뭐야? 가장 기뻤던 일이 뭐야? 일이 이번 주에 가장 기뻤던 일이"
        />
        <FormSection />
      </section>
    </HeaderFooterWrapper>
  )
}

import QuestionOrAnswerDetailBox from "@/components/questions/list/QuestionOrAnswerDetailBox"
import MyAnswerStatusBox from "@/components/questions/detail/MyAnswerStatusBox"

export default function QuestionDetailSection() {
  return (
    <section className="flex flex-col gap-[12px]">
      <QuestionOrAnswerDetailBox
        imageSrc="https://placehold.co/230x230.png"
        content="가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드
              텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가이드 텍스트입니다.가"
        nickname="닉네임"
        time={3}
      />
      <MyAnswerStatusBox />
    </section>
  )
}

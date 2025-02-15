import Button from "@/components/common/Button"
import QuestionBox from "@/components/common/QuestionBox"

export default function QuestionDetail() {
  return (
    <section className="flex h-full flex-col items-center gap-[24px] px-[16px] pb-[12px] pt-[80px]">
      <div className="flex flex-col items-center gap-[24px]">
        <p className="text-center text-headline-01 font-semibold text-gray-09">
          치직...치치직...
          <br />
          시그널이 도착했어요!
        </p>
        <QuestionBox
          count={1}
          replyCount={1}
          date={new Date()}
          nickname="닉네임"
          text="이번 주에 가장 기뻤던 일이 뭐야? 가장 기뻤던 일이 뭐야? 일이 이번 주에 가장 기뻤던 일이"
        />
      </div>
      <div className="flex h-full w-full items-end justify-center gap-[12px]">
        <Button className="w-full bg-gray-03">홈으로 돌아가기</Button>
        <Button className="w-full bg-primary-200">응답하기</Button>
      </div>
    </section>
  )
}

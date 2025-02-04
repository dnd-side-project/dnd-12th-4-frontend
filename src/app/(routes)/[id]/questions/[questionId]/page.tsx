import Button from "@/components/common/Button"
import QuestionBox from "@/components/questions/detail/QuestionBox"

export default function QuestionDetail() {
  return (
    <section className="flex h-full flex-col items-center justify-between gap-[24px] px-[16px] pb-[12px] pt-[80px]">
      <div className="flex flex-col items-center gap-[24px]">
        <p className="text-[24px] font-semibold">
          치직...치치직...
          <br />
          CODE000!
        </p>
        <QuestionBox
          count={1}
          replyCount={1}
          date={new Date()}
          nickname="닉네임"
          text="이번 주에 가장 기뻤던 일이 뭐야? 가장 기뻤던 일이 뭐야? 일이 이번 주에 가장 기뻤던 일이"
        />
      </div>
      <div className="flex w-full gap-[12px]">
        <Button className="w-full bg-white">홈으로 돌아가기</Button>
        <Button className="w-full bg-[#D7DFE7]">응답하기</Button>
      </div>
    </section>
  )
}

import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CountAndSortBox from "@/components/my-page/CountAndSortBox"
import QuestionListTabBox from "@/components/questions/list/QuestionListTabBox"
import QuestionBox from "@/components/questions/list/QuestionBox"

export default function QuestionsPage() {
  return (
    <HeaderFooterWrapper footer>
      <MenuHeader title="리스트" />
      <div className="px-[16px]">
        <QuestionListTabBox />
        <CountAndSortBox type="시그널" count={333} />
        <div className="flex flex-col gap-[12px]">
          <QuestionBox
            count={12}
            nickname={"무전기"}
            time={3}
            text="이번 주 7시에 다 같이 모여서 저녁 먹자 이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁
        먹자이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁 먹자"
          />
        </div>
      </div>
    </HeaderFooterWrapper>
  )
}

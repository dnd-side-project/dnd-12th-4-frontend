import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ChannelSection from "@/components/my-page/my-info/ChannelSection"
import FeedbackBox from "@/components/my-page/my-info/FeedbackBox"
import ProfileCard from "@/components/my-page/profile/ProfileCard"

function MyPage() {
  return (
    <HeaderFooterWrapper footer>
      <div className="px-[16px]">
        <MenuHeader title="내 정보" />
        <div className="flex flex-col gap-[20px]">
          <ProfileCard />
          <FeedbackBox />
          <div>
            <MenuHeader
              title="현재 속한 채널"
              buttonTitle="추가"
              button
              buttonClassName="bg-gray-08 text-caption-01 text-white"
              titleClassName="text-subtitle-01 font-semibold"
            />
            <ChannelSection />
          </div>
        </div>
      </div>
    </HeaderFooterWrapper>
  )
}

export default MyPage

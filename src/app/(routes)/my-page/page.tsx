import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import MyInfoMenuCard from "@/components/my-page/MyInfoMenuCard"
import ProfileCard from "@/components/my-page/ProfileCard"
import { MY_INFO_MENUS } from "@/constants/myPage"

function MyPage() {
  return (
    <HeaderFooterWrapper footer>
      <div className="px-[16px]">
        <div className="py-[13px] text-[20px] font-bold">내 정보</div>
        <div className="flex flex-col gap-[20px]">
          <ProfileCard />
          <div className="flex flex-col gap-[12px]">
            {MY_INFO_MENUS.map((menu) => (
              <MyInfoMenuCard key={menu.href} {...menu} />
            ))}
          </div>
        </div>
      </div>
    </HeaderFooterWrapper>
  )
}

export default MyPage

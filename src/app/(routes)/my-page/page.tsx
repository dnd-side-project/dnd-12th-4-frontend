import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import MyInfoMenuCard from "@/components/my-page/my-info/MyInfoMenuCard"
import ProfileCard from "@/components/my-page/profile/ProfileCard"
import { MY_INFO_MENUS } from "@/constants/myPage"

function MyPage() {
  return (
    <HeaderFooterWrapper footer>
      <MenuHeader title="내정보" button />
      <div className="px-[16px]">
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

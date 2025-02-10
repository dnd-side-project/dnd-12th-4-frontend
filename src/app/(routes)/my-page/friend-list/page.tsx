import FriendInformation from "@/components/common/FriendInformation"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

export default async function FriendListPage() {
  return (
    <HeaderFooterWrapper header footer headerTitle="내친구">
      <div className="flex flex-col gap-[12px]">
        <FriendInformation />
        <FriendInformation />
      </div>
    </HeaderFooterWrapper>
  )
}

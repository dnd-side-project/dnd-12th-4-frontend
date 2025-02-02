import FriendInformation from "@/components/friends/FriendInformation"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

export default function Page() {
  return (
    <HeaderFooterWrapper header headerTitle="참여 중인 친구">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
        <FriendInformation key={data} />
      ))}
    </HeaderFooterWrapper>
  )
}

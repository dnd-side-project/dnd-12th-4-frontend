import { ApiChannelMemberResponse } from "@/api/model/apiChannelMemberResponse"
import { serverInstance } from "@/api/serverInstance"
import FriendInformation from "@/components/common/FriendInformation"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

type Params = Promise<{ id: string }>

export default async function FriendsPage({ params }: { params: Params }) {
  const { id } = await params

  const { data } = await serverInstance.get<ApiChannelMemberResponse>(`/api/channels/${id}/members`)

  return (
    <HeaderFooterWrapper header headerTitle="내친구">
      <section className="flex flex-col gap-[12px] px-[16px]">
        {data.body?.channelMembers?.map((member) => (
          <FriendInformation key={member.channelMemberId} nickname={member.codeName} url={member.profileImageUrl} />
        ))}
      </section>
    </HeaderFooterWrapper>
  )
}

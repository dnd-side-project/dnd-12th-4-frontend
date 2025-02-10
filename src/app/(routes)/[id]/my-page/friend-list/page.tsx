import { ApiChannelMemberResponse } from "@/api/model/apiChannelMemberResponse"
import { serverInstance } from "@/api/serverInstance"
import FriendInformation from "@/components/common/FriendInformation"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

type Params = Promise<{ id: string }>

export default async function FriendListPage({ params }: { params: Params }) {
  const { id } = await params

  const { data } = await serverInstance.get<ApiChannelMemberResponse>(`/api/channels/${id}/members`)
  return (
    <HeaderFooterWrapper header footer headerTitle="내친구">
      <div className="flex flex-col gap-[12px]">
        {data.body?.channelMembers?.map((member) => (
          <FriendInformation key={member.channelMemberId} nickname={member.nickName} url={member.profileImageUrl} />
        ))}
      </div>
    </HeaderFooterWrapper>
  )
}

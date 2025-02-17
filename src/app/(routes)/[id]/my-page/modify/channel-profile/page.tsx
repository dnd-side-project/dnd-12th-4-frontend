import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ModifyProfileForm from "@/components/my-page/profile/ModifyProfileForm"

export default async function ChannelProfileModifyPage({
  searchParams
}: {
  searchParams: Promise<{ channelName: string }>
}) {
  const { channelName } = await searchParams
  return (
    <HeaderFooterWrapper header footer headerTitle={channelName}>
      <ModifyProfileForm profileType="channel" />
    </HeaderFooterWrapper>
  )
}

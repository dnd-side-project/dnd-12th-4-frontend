import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ModifyChannelNameForm from "@/components/my-page/channel/ModifyChannelNameForm"

export default function ModifyChannelNamePage() {
  return (
    <HeaderFooterWrapper header headerTitle="채널명">
      <ModifyChannelNameForm />
    </HeaderFooterWrapper>
  )
}

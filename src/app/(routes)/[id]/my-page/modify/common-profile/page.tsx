import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ModifyProfileForm from "@/components/my-page/profile/ModifyProfileForm"

export default function CommonProfileModifyPage() {
  return (
    <HeaderFooterWrapper header footer headerTitle="공용 프로필">
      <ModifyProfileForm profileType="common" />
    </HeaderFooterWrapper>
  )
}

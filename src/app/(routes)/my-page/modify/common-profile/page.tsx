import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import ModifyProfileForm from "@/components/my-page/ModifyProfileForm"

export default function CommonProfileModifyPage() {
  return (
    <HeaderFooterWrapper header footer headerTitle="공용 프로필">
      <ModifyProfileForm />
    </HeaderFooterWrapper>
  )
}

import InitialSetupForm from "@/components/auth/InitialSetupForm"
import { INITIAL_SETUP_INFO } from "@/constants/auth"
import CardButton from "@/components/auth/CardButton"
function Page() {
  return (
    <div>
      <InitialSetupForm initialSetupInfo={INITIAL_SETUP_INFO.INVITE_OR_JOIN} showInput={false} showButton={false}>
        <div className="mt-[8px] flex flex-col gap-[8px]">
          <CardButton
            title="채널 만들기"
            description="친구들과 소통할 채널을 만들어 보세요"
            nextUrl="create-or-notify/create-channel"
          />
          <CardButton
            title="초대 코드 알려주기"
            description="전달받은 초대 코드로 채널에 참여해 보세요"
            nextUrl="create-or-notify/notify-code"
          />
        </div>
      </InitialSetupForm>
    </div>
  )
}

export default Page

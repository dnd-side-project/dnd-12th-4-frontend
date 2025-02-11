import CardButton from "@/components/auth/CardButton"
import TitleAndDescriptionBox from "@/components/auth/TitleAndDescriptionBox"
import Image from "next/image"
function Page() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={"https://placehold.co/229x229.png"} width={60} height={60} alt="캐릭터 이미지" />
          <TitleAndDescriptionBox title={`이제 채널을 만들거나\n초대 코드를 저에게 알려주세요!`} />
        </div>
        <div className="mt-[8px] flex flex-col gap-[8px]">
          <CardButton
            title="채널 만들기"
            description="친구들과 소통할 채널을 만들어 보세요"
            nextUrl="/channels/create"
          />
          <CardButton
            title="초대 코드 알려주기"
            description="전달받은 초대 코드로 채널에 참여해 보세요"
            nextUrl="/channels/join"
          />
        </div>
      </div>
    </div>
  )
}

export default Page

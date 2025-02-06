import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "@/components/auth/Button"

interface GuideProps {
  guideInfo: { messages: string[]; buttonValue?: string; nextPageUrl?: string }
  onNext?: () => void
  nickname?: string
  isButton: boolean
  // nextPage: number
}

function Guide({ guideInfo, onNext, nickname, isButton = true }: GuideProps) {
  const router = useRouter()
  const { messages, buttonValue, nextPageUrl } = guideInfo
  const handleButtonClick = () => {
    if (!nextPageUrl && onNext) {
      onNext()
    }
    if (nextPageUrl) {
      router.push(`/auth/initial/${nextPageUrl}`)
    }
  }

  return (
    <div>
      <div className="pt-[64px]">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <Image src={"https://placehold.co/229x229.png"} width={230} height={230} alt="일러스트 이미지" />
          <div className="text-center text-[24px] font-semibold leading-[1.6]">
            {nickname ? nickname + "!" : messages[0]}
            <br />
            {messages[1]}
          </div>
          {isButton && (
            <Button
              variant="default"
              size="default"
              onClick={handleButtonClick}
              className="h-[54px] w-full cursor-pointer rounded-xl bg-[#D7DFE7] font-medium"
            >
              {buttonValue}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Guide

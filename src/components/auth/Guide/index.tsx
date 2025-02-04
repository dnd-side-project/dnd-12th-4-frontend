import Image from "next/image"
import React from "react"

interface GuideProps {
  guideInfo: { messages: string[]; buttonValue?: string; nextPageUrl?: string }
  onNext?: () => void
  isButton: boolean
  // nextPage: number
}

function Guide({ guideInfo, onNext, isButton }: GuideProps) {
  const { messages, buttonValue, nextPageUrl } = guideInfo
  const handleButtonClick = () => {
    if (!nextPageUrl && onNext) {
      onNext()
    }
  }

  return (
    <div>
      <div className="pt-[64px]">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <Image src={"https://placehold.co/229x229.png"} width={230} height={230} alt="일러스트 이미지" />
          <div className="text-center text-[24px] font-semibold leading-[1.6]">
            {messages[0]}
            <br />
            {messages[1]}
          </div>
          {isButton && (
            <button
              onClick={handleButtonClick}
              className="h-[54px] w-full cursor-pointer rounded-xl bg-[#D7DFE7] font-medium"
            >
              {buttonValue}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Guide

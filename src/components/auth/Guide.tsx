"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "@/components/auth/Button"

interface GuideProps {
  title: string
  buttonValue?: string
  nextPageUrl?: string
  onNext?: () => void
}

function Guide({ title, onNext, nextPageUrl, buttonValue }: GuideProps) {
  const router = useRouter()
  const handleButtonClick = () => {
    if (!nextPageUrl && onNext) {
      onNext()
    }
    if (nextPageUrl) {
      router.push(`/auth/initial/${nextPageUrl}`)
    }
  }

  return (
    <div className="flex size-full flex-col items-center justify-between pt-[64px]">
      <div className="flex flex-col items-center gap-[24px]">
        <Image src={"https://placehold.co/229x229.png"} width={230} height={230} alt="일러스트 이미지" />
        <div className="whitespace-pre-line text-center text-[24px] font-semibold leading-[1.6]">
          {title}
          <br />
        </div>
      </div>
      {buttonValue && (
        <Button variant="default" size="default" onClick={handleButtonClick}>
          {buttonValue}
        </Button>
      )}
    </div>
  )
}

export default Guide

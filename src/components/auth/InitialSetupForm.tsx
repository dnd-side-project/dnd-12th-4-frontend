"use client"
import Image from "next/image"
import Button from "./Button"
import { useEffect, useState } from "react"

interface InitialSetupInfo {
  imageUrl: string
  title: string
  description?: string
  isLastPage?: boolean
}

interface InitialSetupFormProps {
  initialSetupInfo: InitialSetupInfo
  onNext?: () => void
  setInput?: (value: string) => void
  showInput?: boolean
  inputValue?: string
  showButton: boolean
  children?: React.ReactNode
}

function InitialSetupForm({
  initialSetupInfo,
  onNext,
  setInput,
  showInput = true,
  inputValue,
  showButton = true,
  children
}: InitialSetupFormProps) {
  const { imageUrl, title, description } = initialSetupInfo
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    setButtonDisable(inputValue?.trim().length === 0)
  }, [inputValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setInput) {
      setInput(e.target.value)
    }
  }

  return (
    <form className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={imageUrl} width={60} height={60} alt="캐릭터 이미지" />
          <div className="flex flex-col gap-[8px]">
            <div className="whitespace-pre-line text-[24px] font-semibold leading-[1.5]">{title}</div>
            {description && <div className="whitespace-pre-line leading-[1.5]">{description}</div>}
          </div>
        </div>
        {!showInput && children}
        {showInput && (
          <input
            onChange={handleInputChange}
            className="h-[54px] rounded-[12px] border border-[#637180] px-[20px] py-[16px] focus:outline-none"
            placeholder="코드명을 작성해주세요."
          />
        )}
      </div>
      {showButton && (
        <Button variant="default" size="default" onNext={onNext} disabled={buttonDisable}>
          다음
        </Button>
      )}
    </form>
  )
}

export default InitialSetupForm

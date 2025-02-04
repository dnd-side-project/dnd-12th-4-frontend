"use client"
import Image from "next/image"
import React from "react"

interface InitialSetupInfo {
  imageUrl: string
  title: string
  description: string
  isLastPage?: boolean
}

interface InitialSetupFormProps {
  initialSetupInfo: InitialSetupInfo
  onNext: () => void
  setInput: (value: string) => void
}

function InitialSetupForm({ initialSetupInfo, onNext, setInput }: InitialSetupFormProps) {
  const { imageUrl, title, description } = initialSetupInfo

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onNext()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <form className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        <Image src={imageUrl} width={60} height={60} alt="캐릭터 이미지" />
        <div className="whitespace-pre-line text-[24px] font-semibold leading-[1.6]">{title}</div>
        <div className="whitespace-pre-line leading-[1.6]">{description}</div>
      </div>
      <input
        onChange={handleInputChange}
        className="h-[54px] rounded-[12px] border border-[#637180] px-[20px] py-[16px] focus:outline-none"
        placeholder="코드명을 작성해주세요."
      />
      <button
        onClick={handleButtonClick}
        className="h-[54px] w-full cursor-pointer rounded-xl bg-[#D7DFE7] font-medium"
      >
        다음
      </button>
    </form>
  )
}

export default InitialSetupForm

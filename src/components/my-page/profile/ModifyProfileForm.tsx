"use client"
import { handleDeleteButton, handleImageChange } from "@/utils/changeImage"
import { useState } from "react"
import { ImageInput } from "@/components/my-page/profile/ImageInput"
import Button from "@/components/auth/Button"

export default function ModifyProfileForm() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  console.log(file)
  return (
    <div className="flex size-full flex-col justify-between px-[16px] pb-[12px] pt-[20px]">
      <div className="flex flex-col items-center gap-[28px]">
        <div className="flex flex-col gap-[12px]">
          <ImageInput
            previewImage={preview}
            handleDeleteButton={() => handleDeleteButton({ setPreview })}
            handleImageChange={(event) => handleImageChange({ event, setFile, setPreview, setErrorMessage })}
          />
          {errorMessage && <div>이미지를 다시 선택해주세요.</div>}
        </div>
        <div className="flex w-full flex-col gap-[2px]">
          <div className="text-[12px] font-medium opacity-60">코드명</div>
          <input className="h-[54px] rounded-[12px] border border-[#637180] px-[20px] py-[16px] focus:outline-none" />
        </div>
      </div>
      <Button variant="default" size="default">
        완료
      </Button>
    </div>
  )
}

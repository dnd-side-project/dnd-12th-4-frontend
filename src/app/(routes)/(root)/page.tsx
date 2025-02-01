"use client"

import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { setCookie } from "@/utils/cookie"
import { setDocumentColor } from "@/utils/setDocumentColor"
import { useState } from "react"
import { HexColorPicker } from "react-colorful"

export default function Home() {
  const [color, setColor] = useState("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChangeColor = (e: string) => {
    setDocumentColor(e, "primary")
    setColor(e)
    setCookie("primary", e, 30)
  }

  return (
    <HeaderFooterWrapper header footer>
      <button onClick={() => setIsOpen(true)}>primary Color palette</button>
      {isOpen && <HexColorPicker color={color} onChange={handleChangeColor} />}
      <p>{color}</p>
      <div className="h-fit w-fit rounded-md bg-primary p-4">컬러팔레트</div>
      <div className="h-fit w-fit rounded-md bg-primary-10 p-4">컬러팔레트10</div>
      <div className="h-fit w-fit rounded-md bg-primary-20 p-4">컬러팔레트20</div>
      <div className="h-fit w-fit rounded-md bg-primary-30 p-4">컬러팔레트30</div>
      <div className="h-fit w-fit rounded-md bg-primary-40 p-4">컬러팔레트40</div>
      <div className="h-fit w-fit rounded-md bg-primary-50 p-4">컬러팔레트50</div>
      <div className="h-fit w-fit rounded-md bg-primary-60 p-4">컬러팔레트60</div>
      <div className="h-fit w-fit rounded-md bg-primary-70 p-4">컬러팔레트70</div>
      <div className="h-fit w-fit rounded-md bg-primary-80 p-4">컬러팔레트80</div>
      <div className="h-fit w-fit rounded-md bg-primary-90 p-4">컬러팔레트90</div>
    </HeaderFooterWrapper>
  )
}

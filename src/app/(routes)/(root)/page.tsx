"use client"

import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { setCookie } from "@/utils/cookie"
import { ColorKeyType, setDocumentColor } from "@/utils/setDocumentColor"
import { useState } from "react"
import { HexColorPicker } from "react-colorful"

export default function Home() {
  const [colorKey, setColorKey] = useState<ColorKeyType>("primary")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChangeColor = (e: string) => {
    setDocumentColor(e, colorKey)
    setCookie(colorKey, e, 30)
  }
  const handleCustomizing = (key: ColorKeyType) => {
    setIsOpen((prev) => !prev)
    setColorKey(key)
  }

  return (
    <HeaderFooterWrapper header footer>
      <button className="flex items-center justify-center" onClick={() => handleCustomizing("primary")}>
        Primary 커스터마이징
      </button>
      <button className="flex items-center justify-center" onClick={() => handleCustomizing("secondary")}>
        Secondary 커스터마이징
      </button>
      {isOpen && <HexColorPicker onChange={handleChangeColor} />}
      <section className="flex justify-around">
        <article className="flex flex-col gap-[4px]">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary p-4">primary</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-10 p-4">10</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-20 p-4">20</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-30 p-4">30</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-40 p-4">40</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-50 p-4">50</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-60 p-4">60</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-70 p-4">70</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-80 p-4">80</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary-90 p-4">90</div>
        </article>
        <article className="flex flex-col gap-[4px]">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary p-4">
            secondary
          </div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-10 p-4">10</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-20 p-4">20</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-30 p-4">30</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-40 p-4">40</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-50 p-4">50</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-60 p-4">60</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-70 p-4">70</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-80 p-4">80</div>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-secondary-90 p-4">90</div>
        </article>
      </section>
    </HeaderFooterWrapper>
  )
}

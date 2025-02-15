"use client"
import { useEffect, useState } from "react"
import { AUTH_CAROUSEL_ITEMS } from "@/constants/auth"
import Image from "next/image"

export default function CarouselItems() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % AUTH_CAROUSEL_ITEMS.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex w-full flex-col items-center gap-[80px]">
      <div className="relative flex h-[382px] w-full justify-center overflow-hidden">
        {AUTH_CAROUSEL_ITEMS.map((carouselItem, index) => (
          <div
            key={carouselItem.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"} flex flex-col items-center gap-[80px]`}
          >
            <div className="w-[300px] whitespace-pre-line text-center text-headline-01 text-[#191919]">
              {carouselItem.title}
            </div>
            <Image src={carouselItem.image} width={230} height={230} alt="일러스트 이미지" />
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        {AUTH_CAROUSEL_ITEMS.map((carouselItem, index) => (
          <div
            key={carouselItem.id}
            className={`h-[6px] w-[6px] rounded-full duration-1000 ${
              index === currentIndex ? "h-[6px] w-[18px] scale-125 bg-[#292D30]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

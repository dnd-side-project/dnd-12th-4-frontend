"use client"
import TitleWithMoreView from "@/components/root/TitleWithMoreView"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

export default function FriendsSlider() {
  const { id } = useParams()
  const router = useRouter()

  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView title={"참여 중인 친구 14명"} onClick={() => router.push(`/${id}/friends`)} />
      <div className="mx-[-16px]">
        <Swiper slidesPerView="auto" spaceBetween={8} className="w-full" slidesOffsetAfter={16} slidesOffsetBefore={16}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <SwiperSlide key={data} className="!w-fit rounded-[12px] bg-white">
              <div className="flex w-[106px] max-w-[50vw] flex-col items-center gap-[8px] p-[20px]">
                <Image src={"/favicon.ico"} width={48} height={48} alt="profile-image" />
                <p className="text-[14px] font-semibold text-black/60">CODE000</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}

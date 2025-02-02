import TitleWithMoreView from "@/components/root/TitleWithMoreView"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function FriendsSlider() {
  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView title={"참여 중인 친구 14명"} onClick={() => {}} />
      <Swiper slidesPerView={3} spaceBetween={8} className="w-full">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
          <SwiperSlide key={data} className="w-fit rounded-[12px] bg-white p-[20px]">
            <div className="flex flex-col items-center gap-[8px]">
              <Image src={"/favicon.ico"} width={48} height={48} alt="profile-image" />
              <p className="text-[14px] font-semibold text-black/60">CODE000</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}

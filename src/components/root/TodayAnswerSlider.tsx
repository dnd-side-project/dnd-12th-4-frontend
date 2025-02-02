import "@/styles/todayAnswerSlider.css"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TitleWithMoreView from "@/components/root/TitleWithMoreView"

export default function TodayAnswerSlider() {
  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView title={"오늘 응답 5개"} onClick={() => {}} />
      <Swiper
        className="relative h-fit w-full"
        modules={[Pagination]}
        pagination={{
          el: `#today-answer-slider`,
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !bg-black !w-[4px] !h-[4px]"> </span>`
          }
        }}
      >
        {[0, 1, 2].map((data) => (
          <SwiperSlide key={data}>
            <article className="flex flex-col gap-[12px] rounded-[20px] bg-white p-[20px]">
              <div className="flex items-center gap-[8px]">
                <Image src={"/favicon.ico"} width={32} height={32} alt="profile-image" />
                <div className="flex flex-col text-black/60">
                  <p className="text-[14px]">CODE000</p>
                  <p className="text-[12px]">1시간전</p>
                </div>
              </div>
              <p className="line-clamp-2 text-[14px]">
                이번 주 7시에 다 같이 모여서 저녁 먹자 이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이
                모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁 먹자
              </p>
              <div className="flex items-center gap-[4px]">
                <MessageCircle size={16} color="#00000099" />
                <p className="text-black/60">000</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <section id="today-answer-slider" className="flex w-full justify-center gap-[4px]" />
    </article>
  )
}

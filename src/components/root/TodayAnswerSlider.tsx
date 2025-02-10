"use client"
import TitleWithMoreView from "@/components/root/TitleWithMoreView"
import "@/styles/todayAnswerSlider.css"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function TodayAnswerSlider() {
  const { id } = useParams()
  const router = useRouter()
  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView
        title={"오늘 응답 5개"}
        onClick={() => {
          router.push(`/${id}/questions`)
        }}
      />
      <div className="mx-[-16px]">
        <Swiper
          className="relative h-fit w-full"
          slidesPerView="auto"
          modules={[Pagination]}
          // spaceBetween={8}
          // slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          pagination={{
            el: `#today-answer-slider`,
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} !bg-black !w-[4px] !h-[4px]"> </span>`
            }
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <SwiperSlide key={data} className="ms-[8px] !w-fit first:ms-[16px]">
              <article className="flex w-[360px] max-w-[90vw] flex-col gap-[12px] rounded-[20px] bg-white p-[20px]">
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
      </div>
      <section id="today-answer-slider" className="flex h-[12px] w-full justify-center gap-[4px]" />
    </article>
  )
}

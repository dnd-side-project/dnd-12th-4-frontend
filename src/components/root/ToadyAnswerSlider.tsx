"use client"

import { useShowAnswers } from "@/api/answer-controller/answer-controller"
import { useFindTodayQuestionByChannel } from "@/api/question-controller/question-controller"
import "@/styles/todayAnswerSlider.css"
import Image from "next/image"
import { useParams } from "next/navigation"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ToadyAnswerSlider() {
  const { id } = useParams()

  const { data: questionData } = useFindTodayQuestionByChannel(id as string)

  const { data } = useShowAnswers(questionData?.questionId as number)

  return (
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
        {data?.body?.answerList?.map((data) => (
          <SwiperSlide key={data.id} className="ms-[8px] !w-fit first:ms-[16px]">
            <article className="flex w-[360px] max-w-[90vw] flex-col gap-[12px] rounded-[20px] bg-gray-01 p-[20px]">
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
              {/* <div className="flex items-center gap-[4px]">
                  <MessageCircle size={16} color="#00000099" />
                  <p className="text-black/60">000</p>
                </div> */}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

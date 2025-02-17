"use client"
import { useFindChannelMembers } from "@/api/channel-member-controller/channel-member-controller"
import TitleWithMoreView from "@/components/root/TitleWithMoreView"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

export default function FriendsSlider() {
  const { id } = useParams()
  const router = useRouter()
  const { data } = useFindChannelMembers(id as string)

  return (
    <article className="flex flex-col gap-[12px]">
      <TitleWithMoreView
        title="참여 중인 친구"
        countTitle={` ${data?.body?.memberCount ?? "0"}명`}
        onClick={() => router.push(`/${id}/friends`)}
      />
      <div className="mx-[-16px]">
        <Swiper
          slidesPerView="auto"
          className="w-full"
          //  spaceBetween={8}
          // slidesOffsetBefore={16}
          slidesOffsetAfter={16}
        >
          {data?.body?.channelMembers?.map((member) => (
            <SwiperSlide
              key={member.channelMemberId}
              className="ms-[8px] !w-fit rounded-[12px] bg-gray-01 first:ms-[16px]"
            >
              <div className="flex w-[104px] max-w-[50vw] flex-col items-center justify-center gap-[8px] p-[20px] text-center">
                <div className="relative h-[48px] w-[48px]">
                  <Image src={member.profileImageUrl ?? "/"} fill alt="profile-image" className="rounded-full" />
                </div>
                <p className="w-full overflow-hidden text-ellipsis text-nowrap text-caption-01 text-black/60">
                  {member.codeName}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}

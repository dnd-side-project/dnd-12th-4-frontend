import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import LoginButton from "@/components/auth/LoginButton"
import CarouselItems from "@/components/auth/CarouselItems"
import { redirect } from "next/navigation"

export default async function Auth() {
  const session = await getServerSession(authOptions)
  // const { data: channelData } = await serverInstance.get(`/api/channels/channel-profile?tab=all`)
  // console.log(channelData)
  console.log(session)

  if (session && !session.user.userName) {
    redirect("/auth/initial")
  }

  if (session && session.user.userName) {
    redirect("/channels")
  }

  return (
    <div className="flex h-full justify-center pb-[12px] pt-[56px]">
      <section className="flex w-full flex-col items-center justify-between gap-[57px] px-[16px]">
        <CarouselItems />
        <LoginButton />
      </section>
    </div>
  )
}

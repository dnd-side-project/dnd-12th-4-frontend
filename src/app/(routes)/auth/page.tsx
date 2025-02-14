import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import LoginButton from "@/components/auth/LoginButton"
import CarouselItems from "@/components/auth/CarouselItems"
import { redirect } from "next/navigation"

export default async function Auth() {
  const session = await getServerSession(authOptions)
  console.log("session", session)
  const { channelId, channelCount, userName } = session?.user || { channelId: "", channelCount: 0, userName: null }
  console.log(channelId, channelCount, userName)

  if (session) {
    if (!userName) {
      redirect("/auth/initial")
    }
    if (channelCount > 1) {
      redirect("/channels")
    }
    if (channelCount === 1) {
      redirect(`/${channelId}`)
    }
    if (channelCount === 0) {
      redirect("/create-or-join")
    }
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

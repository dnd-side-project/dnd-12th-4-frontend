import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LoginButton from "@/components/auth/LoginButton"
import CarouselItems from "@/components/auth/CarouselItems"

export default async function Auth() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/auth/initial/")
  }

  return (
    <div className="flex h-full justify-center pb-[12px] pt-[56px]">
      <section className="flex w-full flex-col items-center justify-between gap-[57px] px-4">
        <CarouselItems />
        <LoginButton />
      </section>
    </div>
  )
}

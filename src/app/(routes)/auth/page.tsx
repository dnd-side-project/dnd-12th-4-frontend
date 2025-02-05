import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import AuthButton from "@/components/auth/auth-button"
import CarouselItems from "@/components/auth/carousel-items"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Auth() {
  const session = await getServerSession(authOptions)

  if (session && session.user.isNewMember) {
    redirect("/auth/initial/")
  }
  return (
    <div className="mb-6 mt-[58px] flex justify-center">
      <section className="flex w-full flex-col items-center gap-[57px] px-4">
        <CarouselItems />
        <AuthButton />
      </section>
    </div>
  )
}

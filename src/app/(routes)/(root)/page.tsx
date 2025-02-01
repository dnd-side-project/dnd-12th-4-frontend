import Auth from "../auth/page"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import LogoutTestButton from "@/components/TestButton"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return <Auth />
  }
  return <LogoutTestButton />
}

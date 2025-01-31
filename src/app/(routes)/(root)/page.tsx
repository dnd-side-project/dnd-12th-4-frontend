import { getServerSession } from "next-auth"
import Auth from "../auth/page"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import TestButton from "@/components/TestButton"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return <Auth />
  }
  return <TestButton />
}

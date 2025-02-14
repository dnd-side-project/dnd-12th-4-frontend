export const dynamic = "force-dynamic"

import { getFindAllChannelsQueryKey } from "@/api/channel-controller/channel-controller"
import { serverInstance } from "@/api/serverInstance"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import ChannelsPageClient from "@/components/channels/ChannelsPageClient"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { getServerSession } from "next-auth"
import { notFound, redirect } from "next/navigation"

export default async function ChannelsPage() {
  const queryClient = new QueryClient()
  const session = await getServerSession(authOptions)
  const { data: channelData } = await serverInstance.get(`/api/channels/channel-profile?tab=all`)

  if (session?.user.userName && channelData.body.length === 1) {
    redirect(`/${channelData.body[0].channelId}`)
  }
  if (session?.user.userName && channelData.body.length === 0) {
    redirect("/create-or-join")
  }

  try {
    queryClient.fetchQuery({
      queryKey: getFindAllChannelsQueryKey(),
      queryFn: async () => {
        const { data } = await serverInstance.get(`/api/channels/all`)
        return data
      }
    })
  } catch {
    notFound()
  }

  return (
    <HeaderFooterWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ChannelsPageClient />
      </HydrationBoundary>
    </HeaderFooterWrapper>
  )
}

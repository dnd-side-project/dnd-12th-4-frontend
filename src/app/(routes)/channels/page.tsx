import { getFindAllChannelsQueryKey } from "@/api/channel-controller/channel-controller"
import { serverInstance } from "@/api/serverInstance"
import ChannelsPageClient from "@/components/channels/ChannelsPageClient"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"

export default async function ChannelsPage() {
  const queryClient = new QueryClient()

  try {
    await Promise.all([
      queryClient.fetchQuery({
        queryKey: getFindAllChannelsQueryKey(),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/all`)
          return data
        }
      })
    ])
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

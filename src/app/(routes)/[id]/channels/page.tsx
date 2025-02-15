import { getFindChannelsByRoleQueryKey } from "@/api/channel-controller/channel-controller"
import { serverInstance } from "@/api/serverInstance"
import ChannelsPageClient from "@/components/channels/ChannelsPageClient"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"

interface Params {
  searchParams: Promise<{
    tab?: string
  }>
}

export default async function ChannelsPage({ searchParams }: Params) {
  const queryClient = new QueryClient()
  const { tab } = await searchParams

  try {
    // * prefetch 는 오류를 발생시키지 않으므로 유효한 id값인지 확인하기 위해 fetchQuery 사용
    await queryClient.fetchQuery({
      queryKey: getFindChannelsByRoleQueryKey({ tab: tab || "all" }),
      queryFn: async () => {
        const { data } = await serverInstance.get(`/api/channels/channel-profile?tab=${tab ?? "all"}`)
        return data
      }
    })
  } catch {
    notFound()
  }

  return (
    <HeaderFooterWrapper footer>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ChannelsPageClient isFooter />
      </HydrationBoundary>
    </HeaderFooterWrapper>
  )
}

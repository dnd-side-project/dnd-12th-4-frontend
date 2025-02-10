import { getFindChannelByIdQueryKey, getFindChannelMembersQueryKey } from "@/api/channel-controller/channel-controller"
import { serverInstance } from "@/api/serverInstance"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import CharacterInformation from "@/components/root/CharacterInformation"
import FriendsSlider from "@/components/root/FriendsSlider"
import InviteButton from "@/components/root/InviteButton"
import TitleSection from "@/components/root/TitleSection"
import TodayAnswerSlider from "@/components/root/TodayAnswerSlider"
import TodayAnswerSummary from "@/components/root/TodayAnswerSummary"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"

type Params = Promise<{ id: string }>

export default async function RootPage({ params }: { params: Params }) {
  // channelId: b6ccac10-cdbc-428f-a619-820428ad5a11
  // questionId: 1

  // channelId: 15c6650b-6b9c-473f-bdf5-3739cb991660
  // questionId: 2

  const { id } = await params

  const queryClient = new QueryClient()

  try {
    // * prefetch 는 오류를 발생시키지 않으므로 유효한 id값인지 확인하기 위해 fetchQuery 사용
    await Promise.all([
      queryClient.fetchQuery({
        queryKey: getFindChannelByIdQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}`)
          return data
        }
      }),
      queryClient.fetchQuery({
        queryKey: getFindChannelMembersQueryKey(id),
        queryFn: async () => {
          const { data } = await serverInstance.get(`/api/channels/${id}/members`)
          return data
        }
      })
    ])
  } catch {
    notFound()
  }

  return (
    <HeaderFooterWrapper footer>
      <section className="flex h-full flex-col bg-[#292D30]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TitleSection />
          <CharacterInformation />
          <section className="flex h-full flex-col gap-[40px] rounded-t-[20px] bg-[#EFF3F7] p-[16px]">
            <TodayAnswerSummary />
            <TodayAnswerSlider />
            <InviteButton />
            <FriendsSlider />
          </section>
        </HydrationBoundary>
      </section>
    </HeaderFooterWrapper>
  )
}

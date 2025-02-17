"use client"
import { useFindTodayQuestionerProfile } from "@/api/channel-member-controller/channel-member-controller"
import { useFindTodayQuestionByChannel } from "@/api/question-controller/question-controller"
import SignalMission from "@/components/root/SignalMission"
import TodayAnswerSummary from "@/components/root/TodayAnswerSummary"
import { useParams } from "next/navigation"

export default function MissionBox() {
  const { id } = useParams()
  const { data } = useFindTodayQuestionerProfile(id as string)

  const { data: questionData } = useFindTodayQuestionByChannel(id as string)

  if (data?.body?.isTodayQuestioner) {
    if (questionData?.isExist) return null
    else return <SignalMission />
  } else {
    if (!questionData?.isExist) return null
    return <TodayAnswerSummary />
  }
}

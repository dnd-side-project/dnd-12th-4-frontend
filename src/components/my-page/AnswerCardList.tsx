import AnswerCardItem from "./AnswerCardItem"

export const ANSWER_INFO = [
  {
    message: "이번 주 7시에 다 같이 모여서 저녁 먹자!",
    channelName: "채널명000009"
  },
  {
    message: "주말에 영화 보러 갈 사람?",
    channelName: "채널명123456"
  },
  {
    message: "팀 프로젝트 미팅 일정 조율 필요합니다.",
    channelName: "채널명ABCDEF"
  }
]

export default async function AnswerCardList() {
  return (
    <ul className="flex flex-col gap-[12px] py-[8px]">
      {ANSWER_INFO.map((answer, index) => (
        <AnswerCardItem key={index} {...answer} />
      ))}
    </ul>
  )
}

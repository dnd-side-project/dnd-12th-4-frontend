interface AnswerCardItemProps {
  message: string
  channelName: string
}

export default function AnswerCardItem({ message, channelName }: AnswerCardItemProps) {
  return (
    <li className="flex flex-col gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px]">
      <div className="text-[14px] font-medium">{message}</div>
      <div className="flex items-center justify-between text-black text-opacity-60">
        <div className="text-[14px]">{channelName}</div>
        <div className="flex items-center gap-[4px]">
          <div className="text-[12px]">수정</div>
          <div className="">&middot;</div>
          <div className="text-[12px]">삭제</div>
        </div>
      </div>
    </li>
  )
}

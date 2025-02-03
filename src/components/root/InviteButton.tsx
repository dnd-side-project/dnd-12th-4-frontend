import "@/styles/inviteButton.css"
import { share, ShareAPIRequest } from "@/utils/share"
import { ChevronRight, Share2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Sheet } from "react-modal-sheet"

export default function InviteButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleShare = async () => {
    const shareData: ShareAPIRequest = {
      // Todo 데이터 알맞게 수정
      title: "DND",
      text: "DND-12-4팀",
      url: "https://dnd.ac"
    }
    share(shareData)
  }

  return (
    <>
      <button
        className="flex w-full flex-col gap-[12px] rounded-[20px] bg-white p-[20px]"
        onClick={() => setIsOpen(true)}
      >
        <article className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <Image src={"/favicon.ico"} alt="logo" width={45} height={45} />
            <div className="flex flex-col gap-[4px]">
              <p className="font-semibold">새로운 친구와 소통해 보세요.</p>
              <p className="text-[14px]">코드를 보내 채널에 초대해보세요.</p>
            </div>
          </div>
          <ChevronRight size={24} />
        </article>
      </button>
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} snapPoints={[400]} className="">
        <Sheet.Container>
          <Sheet.Content>
            <section className="flex flex-col gap-[12px] px-[16px] py-[24px] pt-[32px] text-black">
              <Image src={"/favicon.ico"} width={60} height={60} alt="logo" />
              <p className="text-[20px] font-semibold">
                초대 코드를 전송하고
                <br />
                친구와 소통을 시작해보세요
              </p>
              <p>초대 코드는 언제든지 보낼 수 있어요.</p>
              <button
                className="mt-[12px] flex items-center justify-between rounded-[12px] border-2 border-[#637180] px-[20px] py-[16px]"
                onClick={handleShare}
              >
                <p>12345678</p>
                <Share2 size={24} />
              </button>
            </section>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setIsOpen(false)} />
      </Sheet>
    </>
  )
}

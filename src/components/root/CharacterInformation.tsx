import Image from "next/image"
import { Tooltip } from "react-tooltip"
// import "react-tooltip/dist/react-tooltip.css"

export default function CharacterInformation() {
  return (
    <>
      <section className="mb-[60px] flex justify-between px-[16px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-white">
            토키 <span className="text-[12px] text-white/70">Lv. 4</span>
          </p>
          <p className="text-[12px] text-white/70">오늘 응답 1/14</p>
        </div>
        <div className="flex items-start gap-[4px] text-white/70">
          <Image src={"/favicon.ico"} alt="타이틀" width={24} height={24} />
          <p data-tooltip-id="tooltip-message" data-tooltip-place="bottom-end">
            10/100
          </p>
          <Tooltip id="tooltip-message" style={{ backgroundColor: "white", borderRadius: 8 }}>
            <div className="flex flex-col items-end text-[12px]">
              <p className="text-black">번개 포인트로 토키를 성장시켜보세요!</p>
              <p className="text-black/70">시그널을 보내면 10P를 얻어요</p>
            </div>
          </Tooltip>
        </div>
      </section>
      <article className="mb-[80px] flex justify-center">
        <Image src={"/favicon.ico"} alt="tokki" width={120} height={120} />
      </article>
    </>
  )
}

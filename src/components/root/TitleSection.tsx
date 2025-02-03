import Image from "next/image"

export default function TitleSection() {
  return (
    <section className="flex items-center justify-between p-[16px]">
      <Image src={"/favicon.ico"} alt="타이틀" width={40} height={40} />
      <div className="flex flex-col items-end text-white">
        <p>채너얼명열자리입니다에</p>
        <p>14명이 참여 중</p>
      </div>
    </section>
  )
}

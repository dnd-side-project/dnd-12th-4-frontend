import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"

import Image from "next/image"

export default function Home() {
  return (
    <HeaderFooterWrapper header footer>
      <div className="mb-6 mt-[58px] flex justify-center">
        <section className="flex w-full flex-col gap-[57px] px-4">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center text-2xl font-semibold">
              친구와 무전을 주고 받으며
              <br />더 알아갈 수 있어요.
            </div>
            <Image src="https://placehold.co/229x229.png" width={229} height={229} alt="일러스트 이미지" />
          </div>
        </section>
      </div>
    </HeaderFooterWrapper>
  )
}

"use client"

interface Params {
  count: number
}
export default function ListEditHeader({ count }: Params) {
  return (
    <section className="flex justify-between py-[12px]">
      <article className="flex items-center gap-[4px] text-[14px]">
        <p>선택</p>
        <p className="text-[#9CAAB9]">{count}</p>
      </article>
      <article className="flex items-center gap-[12px]">
        <button className="flex items-center gap-[4px]" onClick={() => {}}>
          <p className="text-[14px] font-medium">전체 선택</p>
        </button>
      </article>
    </section>
  )
}

"use client"

import { useFindChannelsByRole } from "@/api/channel-controller/channel-controller"
import { DeleteChannelType } from "@/validations/channelSchema"
import { useFormContext } from "react-hook-form"

interface Params {
  count: number
}
export default function ListEditHeader({ count }: Params) {
  const { data } = useFindChannelsByRole({ tab: "all" })

  const { setValue } = useFormContext<DeleteChannelType>()

  const selectAll = () => {
    const allIds = data?.body?.channelShowResponse
      ?.map((data) => data.channelId)
      .filter((id): id is string => id !== undefined)
    if (allIds?.length === count) {
      console.log("1")
      setValue("channelIds", [], { shouldValidate: true })
    } else {
      console.log("2")
      setValue("channelIds", allIds ?? [], { shouldValidate: true })
    }
  }

  return (
    <section className="flex justify-between py-[12px]">
      <article className="flex items-center gap-[4px] text-[14px]">
        <p>선택</p>
        <p className="text-[#9CAAB9]">{count}</p>
      </article>
      <article className="flex items-center gap-[12px]">
        <button className="flex items-center gap-[4px]" onClick={selectAll} type="button">
          <p className="text-[14px] font-medium">전체 선택</p>
        </button>
      </article>
    </section>
  )
}

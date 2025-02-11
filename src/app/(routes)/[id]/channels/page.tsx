"use client"
import ChannelBottomSheet from "@/components/channels/ChannelBottomSheet"
import ChannelBox from "@/components/channels/ChannelBox"
import ListHeader from "@/components/channels/ListHeader"
import MenuHeader from "@/components/common/MenuHeader"
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper"
import { cn } from "@/utils/cn"
import dynamic from "next/dynamic"
import { useState } from "react"

const ListEditHeader = dynamic(() => import("@/components/channels/ListEditHeader"))
const ChannelEditHeader = dynamic(() => import("@/components/channels/ChannelEditHeader"))

export default function ChannelsPage() {
  const [isOpenChannelSheet, setIsOpenChannelSheet] = useState(false)
  const [editMode, setEditMode] = useState(false)
  return (
    <HeaderFooterWrapper footer>
      {editMode && <ChannelEditHeader onBackClick={() => setEditMode(false)} />}
      <section className={cn("flex flex-col px-[16px]", editMode && "pt-[40px]")}>
        {!editMode && <MenuHeader button title="채널" buttonTitle="추가" onClick={() => setIsOpenChannelSheet(true)} />}
        {editMode && <ListEditHeader count={33} />}
        {!editMode && <ListHeader count={1} setEditMode={setEditMode} />}
        <section className="flex flex-col gap-[20px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <ChannelBox key={data} count={1} name="0000999" memberCount={5} owner="CODECODE" />
          ))}
        </section>
      </section>
      <ChannelBottomSheet isOpen={isOpenChannelSheet} setIsOpen={setIsOpenChannelSheet} />
    </HeaderFooterWrapper>
  )
}

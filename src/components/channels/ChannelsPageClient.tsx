"use client"
import { useFindChannelsByRole } from "@/api/channel-controller/channel-controller"
import ChannelBottomSheet from "@/components/channels/ChannelBottomSheet"
import ChannelBox from "@/components/channels/ChannelBox"
import ListHeader from "@/components/channels/ListHeader"
import Button from "@/components/common/Button"
import MenuHeader from "@/components/common/MenuHeader"
import Tab from "@/components/common/Tab"
import { TAB_MENUS } from "@/constants/tab"
import { cn } from "@/utils/cn"
import { deleteChannelSchema, DeleteChannelType } from "@/validations/channelSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { FieldValues, FormProvider, useForm } from "react-hook-form"

const ListEditHeader = dynamic(() => import("@/components/channels/ListEditHeader"))
const ChannelEditHeader = dynamic(() => import("@/components/channels/ChannelEditHeader"))

interface Params {
  isFooter?: boolean
}
export default function ChannelsPageClient({ isFooter = false }: Params) {
  const [isOpenChannelSheet, setIsOpenChannelSheet] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "all"

  const { data } = useFindChannelsByRole({ tab })

  const formMethods = useForm<DeleteChannelType>({
    defaultValues: {
      channelIds: []
    },
    resolver: zodResolver(deleteChannelSchema)
  })

  const { watch, handleSubmit } = formMethods

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <FormProvider {...formMethods}>
      <form className={cn("relative", editMode && "pb-[96px]")} onSubmit={handleSubmit(onSubmit)}>
        {editMode && <ChannelEditHeader onBackClick={() => setEditMode(false)} />}
        <section className={cn("flex flex-col px-[16px]", editMode && "pt-[56px]")}>
          {!editMode && (
            <MenuHeader button title="채널" buttonTitle="추가" onClick={() => setIsOpenChannelSheet(true)} />
          )}
          <ul className="flex gap-[8px]">
            {TAB_MENUS.CHANNEL.map((TAB_MENU) => (
              <Tab
                key={TAB_MENU.value}
                label={TAB_MENU.label}
                isActive={tab === TAB_MENU.value}
                onClick={() => router.push(`?tab=${TAB_MENU.value}`)}
              />
            ))}
          </ul>
          {editMode && <ListEditHeader count={watch("channelIds").length} />}
          {!editMode && <ListHeader count={data?.body?.channelShowResponse?.length ?? 0} setEditMode={setEditMode} />}

          <section className="flex flex-col gap-[20px]">
            {data?.body?.channelShowResponse?.map((data) => (
              <ChannelBox
                key={data.channelId}
                channelId={data.channelId as string}
                count={data.signalCount || 0}
                name={data.channelRoomName ?? "-"}
                memberCount={data?.countPerson || 1}
                owner={data.channelOwnerName ?? "-"}
                selected={watch("channelIds").includes(data.channelId as string)}
                editMode={editMode}
              />
            ))}
          </section>
        </section>
        <ChannelBottomSheet isOpen={isOpenChannelSheet} setIsOpen={setIsOpenChannelSheet} />
        {editMode && (
          <section
            className={cn(
              "fixed flex h-[96px] w-full max-w-screen-lg items-center justify-center bg-white p-[20px]",
              isFooter ? "bottom-[80px]" : "bottom-0"
            )}
          >
            <Button type="submit" className="w-full">
              삭제하기
            </Button>
          </section>
        )}
      </form>
    </FormProvider>
  )
}

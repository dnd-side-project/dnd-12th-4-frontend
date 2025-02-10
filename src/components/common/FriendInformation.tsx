import Image from "next/image"
interface Params {
  nickname?: string
  url?: string
}
export default function FriendInformation({ nickname, url }: Params) {
  return (
    <section className="flex items-center gap-[12px] p-[20px]">
      <div className="relative h-[44px] w-[44px]">
        <Image src={url ?? "/"} alt="profile-image" fill className="rounded-full" />
      </div>
      <div>
        <p>{nickname}</p>
        {/* Todo 채널명 api 에 추가되면 작업 */}
        <p className="text-[14px] text-black/60">채널명 : 채널명0000999</p>
      </div>
    </section>
  )
}

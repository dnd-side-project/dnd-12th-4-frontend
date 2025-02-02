import Image from "next/image"

export default function FriendInformation() {
  return (
    <section className="flex items-center gap-[12px] p-[20px]">
      <Image src={"/favicon.ico"} width={44} height={44} alt="profile-image" />
      <div>
        <p>CODE00000</p>
        <p className="text-[14px] text-black/60">채널명 : 채널명0000999</p>
      </div>
    </section>
  )
}

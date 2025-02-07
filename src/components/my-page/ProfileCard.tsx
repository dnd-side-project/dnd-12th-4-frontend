import Image from "next/image"
import Link from "next/link"

export default function ProfileCard() {
  return (
    <Link
      href="/my-page/modify/common-profile"
      className="flex h-[113px] items-center gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px]"
    >
      <Image
        src="https://placehold.co/229x229.png"
        className="rounded-full object-cover"
        width={60}
        height={60}
        alt="프로필 이미지"
      />
      <div className="flex flex-col gap-[4px]">
        <div className="text-[14px] opacity-60">공용 프로필</div>
        <div className="text-[18px] font-semibold">닉네임이에요</div>
        <div className="text-[14px] opacity-60">email@google.com</div>
      </div>
    </Link>
  )
}

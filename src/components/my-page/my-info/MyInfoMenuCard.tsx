import Image from "next/image"
import Link from "next/link"

interface MyInfoMenuCardProps {
  href: string
  imageSrc: string
  title: string
  subTitle?: string
}
export default function MyInfoMenuCard({ href, imageSrc, title, subTitle }: MyInfoMenuCardProps) {
  return (
    <Link href={href} className="flex h-[84px] items-center gap-[12px] rounded-[20px] bg-[#F5F8FA] p-[20px]">
      <Image src={imageSrc} width={44} height={44} alt="프로필 이미지" />
      <div className="flex flex-col gap-[4px]">
        <div className="font-semibold">{title}</div>
        {subTitle && <div className="text-[14px] text-black text-opacity-70">{subTitle}</div>}
      </div>
    </Link>
  )
}

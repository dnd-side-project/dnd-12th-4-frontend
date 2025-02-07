"use client"

interface MenuHeader {
  title: string
  button?: boolean
  onClick?: () => void
}

export default function MenuHeader({ title, button, onClick }: MenuHeader) {
  return (
    <div className="flex justify-between px-[16px] py-[13px]">
      <div className="text-[20px] font-bold">{title}</div>
      {button && (
        <button
          className="h-[25px] w-[45px] rounded-[4px] bg-[#ECF0F3] px-[12px] py-[4px] text-[12px]"
          onClick={onClick}
        >
          추가
        </button>
      )}
    </div>
  )
}

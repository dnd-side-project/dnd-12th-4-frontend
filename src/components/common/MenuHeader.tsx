"use client"

interface MenuHeaderProps {
  title: string
  button?: boolean
  onClick?: () => void
  buttonTitle?: string
}

export default function MenuHeader({ title, button, onClick, buttonTitle }: MenuHeaderProps) {
  return (
    <div className="flex justify-between px-[16px] py-[13px]">
      <div className="text-[20px] font-bold">{title}</div>
      {button && (
        <button
          className="h-[25px] w-[45px] rounded-[4px] bg-[#ECF0F3] px-[12px] py-[4px] text-[12px]"
          onClick={onClick}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  )
}

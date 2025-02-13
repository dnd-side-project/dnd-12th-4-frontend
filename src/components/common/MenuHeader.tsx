"use client"

interface MenuHeaderProps {
  title: string
  button?: boolean
  onClick?: () => void
  buttonTitle?: string
}

export default function MenuHeader({ title, button, onClick, buttonTitle }: MenuHeaderProps) {
  return (
    <div className="flex justify-between py-[12px]">
      <div className="text-[20px] font-bold">{title}</div>
      {button && (
        <button className="rounded-[4px] bg-[#ECF0F3] px-[12px] py-[4px] text-[12px]" type="button" onClick={onClick}>
          {buttonTitle}
        </button>
      )}
    </div>
  )
}

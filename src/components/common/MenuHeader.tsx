"use client"

interface MenuHeaderProps {
  title: string
  button?: boolean
  onClick?: () => void
  buttonTitle?: string
}

export default function MenuHeader({ title, button, onClick, buttonTitle }: MenuHeaderProps) {
  return (
    <div className="flex h-[56px] items-center justify-between py-[12px]">
      <div className="text-headline-02 font-bold">{title}</div>
      {button && (
        <button className="rounded-[8px] bg-gray-03 px-[12px] py-[4px] text-caption-01" type="button" onClick={onClick}>
          {buttonTitle}
        </button>
      )}
    </div>
  )
}

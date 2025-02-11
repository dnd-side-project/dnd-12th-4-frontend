interface TitleAndDescriptionBoxProps {
  title: string
  description?: string
}
export default function TitleAndDescriptionBox({ title, description }: TitleAndDescriptionBoxProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="whitespace-pre-line text-[24px] font-semibold leading-[1.5]">{title}</div>
      {description && <div className="whitespace-pre-line leading-[1.5]">{description}</div>}
    </div>
  )
}

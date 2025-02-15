import ModalWrapper from "@/components/common/ModalWrapper"
import Button from "@/components/common/Button"

interface Params {
  title: string
  description?: string
  onCancel: () => void
  onClick: () => void
}
export default function ConfirmModal({ title, description, onCancel, onClick }: Params) {
  return (
    <ModalWrapper overlayClose onClose={onCancel}>
      <section className="z-[100] flex w-[340px] flex-col items-center gap-[20px] rounded-[24px] bg-white px-[20px] pb-[20px] pt-[40px]">
        <article className="flex flex-col gap-[8px]">
          <p className="text-[20px] font-semibold">{title}</p>
          {description && <p>{description}</p>}
        </article>
        <article className="flex gap-[12px]">
          <Button className="h-[52px] bg-gray-300" onClick={onCancel}>
            취소하기
          </Button>
          <Button className="h-[52px] bg-primary-200" onClick={onClick}>
            삭제하기
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}

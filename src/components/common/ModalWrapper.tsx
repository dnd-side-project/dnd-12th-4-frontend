"use client"
import { ModalPortal } from "@/utils/modalPortal"

interface Params {
  onClose?: () => void
  overlayClose?: boolean
  children: React.ReactNode
}

export default function ModalWrapper({ onClose, overlayClose, children }: Params) {
  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[50] flex items-center justify-center">
        {children}
        <div
          className="fixed z-[-1] h-full w-full bg-black/40"
          onClick={() => {
            if (overlayClose && !!onClose) onClose()
          }}
        />
      </div>
    </ModalPortal>
  )
}

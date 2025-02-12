"use client"
import Button from "@/components/common/Button"
import { AnimatePresence, motion } from "motion/react"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Sheet } from "react-modal-sheet"

interface Params {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const categoryData = ["친구 카테고리 내용", "연인 카테고리 내용", "연인2 카테고리 내용", "가족 카테고리 내용"]

export default function RecommendQuestionBottomSheet({ isOpen, setIsOpen }: Params) {
  const [selected, setSelected] = useState<number>(0)
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const [indicatorWidth, setIndicatorWidth] = useState(76)
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (buttonsRef.current[selected]) {
      const button = buttonsRef.current[selected]
      const container = button?.parentElement

      if (button && container) {
        const buttonRect = button.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        setIndicatorLeft(buttonRect.left - containerRect.left)
        setIndicatorWidth(buttonRect.width)
      }
    }
  }, [selected])

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content-height" className="">
      <Sheet.Container>
        <Sheet.Content>
          <section className="flex h-full flex-col justify-between p-[16px] text-black">
            <article className="flex flex-col items-center">
              <p className="text-[20px] font-semibold">추천 시그널</p>
              <article className="mt-[8px] flex flex-col">
                <div className="relative flex whitespace-nowrap">
                  {["친구", "연인", "연인2", "가족"].map((label, index) => (
                    <Button
                      key={index}
                      ref={(el) => {
                        buttonsRef.current[index] = el
                      }}
                      className="flex-1 bg-white"
                      onClick={() => setSelected(index)}
                    >
                      {label}
                    </Button>
                  ))}
                  <div className="rounded-full absolute bottom-0 left-0 right-0 h-[3px] bg-black/20">
                    <AnimatePresence>
                      <motion.span
                        className="rounded-full absolute bottom-0 h-[3px] bg-black"
                        initial={{ left: indicatorLeft, width: indicatorWidth }}
                        animate={{ left: indicatorLeft, width: indicatorWidth }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
                <article className="w-full py-[20px]">
                  <p>{categoryData[selected]}</p>
                </article>
              </article>
            </article>
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              확인
            </Button>
          </section>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setIsOpen(false)} />
    </Sheet>
  )
}

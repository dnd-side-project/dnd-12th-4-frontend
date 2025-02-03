"use client"
import { motion } from "motion/react"
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react"

const RecommendQuestionCategory = () => {
  const [selected, setSelected] = useState(0)
  const navRefs = useRef<(HTMLButtonElement | null)[]>([])

  const updatePosition = () => {
    if (navRefs.current[selected]) {
      return navRefs.current[selected]?.offsetLeft
    }
    return 0
  }

  return (
    <div className="relative flex">
      {["친구", "연인", "연인2", "가족"].map((label, index) => (
        <NavItem
          key={index}
          id={index}
          selected={selected === index}
          setSelected={setSelected}
          index={index}
          navRefs={navRefs}
        >
          <p>{label}</p>
        </NavItem>
      ))}

      <motion.span
        className="absolute bottom-0 h-[3px] rounded-full bg-black"
        layoutId="underline"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          left: updatePosition(),
          width: navRefs.current[selected]?.offsetWidth ?? "60px"
        }}
      />
    </div>
  )
}

interface ItemProps {
  children: ReactNode
  selected: boolean
  id: number
  setSelected: Dispatch<SetStateAction<number>>
  index: number
  navRefs: React.RefObject<(HTMLButtonElement | null)[]>
}

const NavItem = ({ children, id, setSelected, index, navRefs }: ItemProps) => {
  return (
    <button
      ref={(el) => {
        navRefs.current[index] = el
      }}
      className="relative w-[60px] py-[12px] text-black transition-colors hover:text-black/60"
      onClick={() => setSelected(id)}
    >
      {children}
    </button>
  )
}

export default RecommendQuestionCategory

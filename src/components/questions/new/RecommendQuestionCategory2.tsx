import { AnimatePresence, motion } from "motion/react"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"

const RecommendQuestionCategory = () => {
  const [selected, setSelected] = useState(0)

  return (
    <section className="flex space-x-4">
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        <p>친구</p>
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <p>연인</p>
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <p>연인2</p>
      </NavItem>
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <p>가족</p>
      </NavItem>
    </section>
  )
}

interface ItemProps {
  children: ReactNode
  selected: boolean
  id: number
  setSelected: Dispatch<SetStateAction<number>>
}

const NavItem = ({ children, selected, id, setSelected }: ItemProps) => {
  return (
    <motion.button
      className="relative px-4 py-2 text-gray-700 transition-colors hover:text-black/60"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default RecommendQuestionCategory

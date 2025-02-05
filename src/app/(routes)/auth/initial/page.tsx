"use client"

import Guide from "@/components/auth/guide"
import { FIRST_PAGE, GUIDE_INFO } from "@/constants/auth"
import { useState } from "react"

function Page() {
  const [page, setPage] = useState(FIRST_PAGE)
  const onNext = () => {
    setPage((prev) => prev + 1)
  }
  return <Guide guideInfo={GUIDE_INFO.CHARACTER_INTRODUCE[page]} onNext={onNext} isButton />
}

export default Page

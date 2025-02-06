"use client"
import Guide from "@/components/auth/Guide"
import InitialSetupForm from "@/components/auth/InitialSetupForm"
import { FIRST_PAGE, GUIDE_INFO, INITIAL_SETUP_INFO, SECOND_PAGE } from "@/constants/auth"
import { useState } from "react"

function Page() {
  const [page, setPage] = useState(FIRST_PAGE)
  const [nickname, setNickname] = useState("")
  // const { url, title, description, isLastPage } = INITIAL_SETUP_INFO.COMMON_NICKNAME
  const onNext = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
      {page === FIRST_PAGE && (
        <InitialSetupForm
          initialSetupInfo={INITIAL_SETUP_INFO.COMMON_NICKNAME}
          onNext={onNext}
          setInput={setNickname}
          inputValue={nickname}
          showButton
        />
      )}
      {page === SECOND_PAGE && <Guide guideInfo={GUIDE_INFO.COMMON_NICKNAME} nickname={nickname} isButton />}
    </>
  )
}

export default Page

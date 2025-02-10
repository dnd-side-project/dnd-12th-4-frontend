"use client"
import Guide from "@/components/auth/Guide"
import InitialSetupForm from "@/components/auth/InitialSetupForm"
import { FIRST_PAGE, INITIAL_SETUP_INFO } from "@/constants/auth"
import { useState } from "react"

function Page() {
  const steps = ["CommonNickname", "GoodNickname"]

  const [page, setPage] = useState(FIRST_PAGE)
  const [nickname, setNickname] = useState("")
  // const { url, title, description, isLastPage } = INITIAL_SETUP_INFO.COMMON_NICKNAME
  const onNext = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
      {steps[page] === "CommonNickname" && (
        <InitialSetupForm
          initialSetupInfo={INITIAL_SETUP_INFO.COMMON_NICKNAME}
          onNext={onNext}
          setInput={setNickname}
          inputValue={nickname}
          showButton
        />
      )}
      {steps[page] === "GoodNickname" && (
        <Guide title={`${nickname}!\n멋진 이름이네요.`} buttonValue="고마워" nextPageUrl="create-or-notify" />
      )}
    </>
  )
}

export default Page

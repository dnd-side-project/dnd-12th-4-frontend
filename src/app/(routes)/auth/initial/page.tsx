"use client"

import Guide from "@/components/auth/Guide"
import { FIRST_PAGE } from "@/constants/auth"
import { useState } from "react"

function Page() {
  const steps = ["Introduction", "PreGuide"]
  const [stepLevel, setStepLevel] = useState(FIRST_PAGE)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  return (
    <>
      {steps[stepLevel] === "Introduction" && (
        <Guide
          title={`안녕하세요.\n저는 토키에요.`}
          buttonValue="안녕!"
          onNext={onNext}
          imageUrl={"/talki/gif/talki_front.gif"}
        />
      )}
      {steps[stepLevel] === "PreGuide" && (
        <Guide
          title={`친구들과의 소통을 위해\n간단한 정보가 필요해요`}
          buttonValue="알겠어!"
          nextPageUrl="common-nickname"
          imageUrl={"/talki/gif/talki_front.gif"}
        />
      )}
    </>
  )
}

export default Page

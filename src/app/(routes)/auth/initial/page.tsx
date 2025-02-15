"use client"

import Guide from "@/components/auth/Guide"
import { FIRST_PAGE } from "@/constants/auth"
import { useState } from "react"
import Character from "../../../../../public/character-front.svg"

function Page() {
  const steps = ["Introduction", "PreGuide"]
  const [stepLevel, setStepLevel] = useState(FIRST_PAGE)
  const onNext = () => {
    setStepLevel((prev) => prev + 1)
  }
  return (
    <>
      {steps[stepLevel] === "Introduction" && (
        <Guide title={`안녕하세요.\n저는 토키에요.`} buttonValue="안녕!" onNext={onNext} imageUrl={Character} />
      )}
      {steps[stepLevel] === "PreGuide" && (
        <Guide
          title={`저에게 간단한 정보를 주시면\n친구와의 소통을 도와드릴게요!`}
          buttonValue="알겠어!"
          nextPageUrl="common-nickname"
          imageUrl="https://placehold.co/229x229.png"
        />
      )}
    </>
  )
}

export default Page

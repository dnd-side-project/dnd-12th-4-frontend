"use client"

import { useFindQuestionsByMember } from "@/api/question-controller/question-controller"
import QuestionBox from "./QuestionBox"

export default function QuestionBoxSection() {
  const { data } = useFindQuestionsByMember({ sort: "all" })
  console.log(data)
  return (
    <section>
      <QuestionBox
        count={12}
        nickname={"무전기"}
        time={3}
        text="이번 주 7시에 다 같이 모여서 저녁 먹자 이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁
        먹자이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁 먹자"
      />
      <QuestionBox
        count={12}
        nickname={"무전기"}
        time={3}
        text="이번 주 7시에 다 같이 모여서 저녁 먹자 이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁
        먹자이번 주 7시에 다 같이 모여서 저녁 먹자이번 주 7시에 다 같이 모여서 저녁 먹자"
      />
    </section>
  )
}

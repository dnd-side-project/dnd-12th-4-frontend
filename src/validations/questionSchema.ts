import { z } from "zod"

export const questionSchema = z.object({
  question: z.string().max(100, "질문은 100자 이내로 작성해주세요.").nonempty("질문은 필수입니다."),
  isAnonymous: z.boolean()
})

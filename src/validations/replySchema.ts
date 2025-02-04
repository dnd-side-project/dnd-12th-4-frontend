import { z } from "zod"

export const replySchema = z.object({
  question: z.string().max(500, "응답은 500자 이내로 작성해주세요.").nonempty("응답은 필수입니다."),
  isAnonymous: z.boolean()
})

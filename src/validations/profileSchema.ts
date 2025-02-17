import { z } from "zod"

export const modifyProfileSchema = z.object({
  nickname: z.string().max(10, "최대 10자까지 입력 가능해요."),
  profileImage: z.string()
})

export type ModifyProfileType = z.infer<typeof modifyProfileSchema>

import { z } from "zod"

export const deleteChannelSchema = z.object({
  channelIds: z.array(z.string()).min(1, { message: "At least one questionId is required" })
})

export const createChannelNameSchema = z.object({
  channelName: z.string().max(10, "최대 10자까지 입력 가능해요.")
})
export type DeleteChannelType = z.output<typeof deleteChannelSchema>
export type CreateChannelNameType = z.infer<typeof createChannelNameSchema>

import { z } from "zod"

export const deleteChannelSchema = z.object({
  channelIds: z.array(z.string()).min(1, { message: "At least one questionId is required" })
})

export type DeleteChannelType = z.output<typeof deleteChannelSchema>

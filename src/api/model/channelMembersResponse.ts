/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * PickiTalki API
 * OpenAPI spec version: 1.0
 */
import type { ChannelMemberDto } from "./channelMemberDto"
import type { PageParamResponse } from "./pageParamResponse"

export interface ChannelMembersResponse {
  channelName?: string
  memberCount?: number
  channelMembers?: ChannelMemberDto[]
  pageParamResponse?: PageParamResponse
}

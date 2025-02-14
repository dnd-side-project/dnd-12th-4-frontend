/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * PickiTalki API
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query"
import type {
  ApiChannelJoinResponse,
  ApiChannelMemberResponse,
  ApiMemberCodeNameResponse,
  ApiMyChannelMemberResponse,
  ChannelMemberDeleteRequest,
  ChannelMemberUpdateRequest,
  InviteRequest,
  UpdateMemberCodeNameParams
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

export const joinMemberToChannel = (inviteRequest: BodyType<InviteRequest>, signal?: AbortSignal) => {
  return customInstance<ApiChannelJoinResponse>({
    url: `/api/channels/join`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: inviteRequest,
    signal
  })
}

export const getJoinMemberToChannelMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof joinMemberToChannel>>,
    TError,
    { data: BodyType<InviteRequest> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof joinMemberToChannel>>,
  TError,
  { data: BodyType<InviteRequest> },
  TContext
> => {
  const mutationKey = ["joinMemberToChannel"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof joinMemberToChannel>>,
    { data: BodyType<InviteRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return joinMemberToChannel(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type JoinMemberToChannelMutationResult = NonNullable<Awaited<ReturnType<typeof joinMemberToChannel>>>
export type JoinMemberToChannelMutationBody = BodyType<InviteRequest>
export type JoinMemberToChannelMutationError = ErrorType<unknown>

export const useJoinMemberToChannel = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof joinMemberToChannel>>,
    TError,
    { data: BodyType<InviteRequest> },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof joinMemberToChannel>>,
  TError,
  { data: BodyType<InviteRequest> },
  TContext
> => {
  const mutationOptions = getJoinMemberToChannelMutationOptions(options)

  return useMutation(mutationOptions)
}
export const updateChannelMemberProfile = (
  channelId: string,
  channelMemberUpdateRequest: BodyType<ChannelMemberUpdateRequest>
) => {
  return customInstance<ApiMyChannelMemberResponse>({
    url: `/api/channels/${channelId}/members/profile`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: channelMemberUpdateRequest
  })
}

export const getUpdateChannelMemberProfileMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateChannelMemberProfile>>,
    TError,
    { channelId: string; data: BodyType<ChannelMemberUpdateRequest> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateChannelMemberProfile>>,
  TError,
  { channelId: string; data: BodyType<ChannelMemberUpdateRequest> },
  TContext
> => {
  const mutationKey = ["updateChannelMemberProfile"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateChannelMemberProfile>>,
    { channelId: string; data: BodyType<ChannelMemberUpdateRequest> }
  > = (props) => {
    const { channelId, data } = props ?? {}

    return updateChannelMemberProfile(channelId, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateChannelMemberProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateChannelMemberProfile>>
>
export type UpdateChannelMemberProfileMutationBody = BodyType<ChannelMemberUpdateRequest>
export type UpdateChannelMemberProfileMutationError = ErrorType<unknown>

export const useUpdateChannelMemberProfile = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateChannelMemberProfile>>,
    TError,
    { channelId: string; data: BodyType<ChannelMemberUpdateRequest> },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof updateChannelMemberProfile>>,
  TError,
  { channelId: string; data: BodyType<ChannelMemberUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateChannelMemberProfileMutationOptions(options)

  return useMutation(mutationOptions)
}
export const updateMemberCodeName = (channelId: string, params: UpdateMemberCodeNameParams) => {
  return customInstance<ApiMemberCodeNameResponse>({
    url: `/api/channels/${channelId}/codeName`,
    method: "PATCH",
    params
  })
}

export const getUpdateMemberCodeNameMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateMemberCodeName>>,
    TError,
    { channelId: string; params: UpdateMemberCodeNameParams },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateMemberCodeName>>,
  TError,
  { channelId: string; params: UpdateMemberCodeNameParams },
  TContext
> => {
  const mutationKey = ["updateMemberCodeName"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateMemberCodeName>>,
    { channelId: string; params: UpdateMemberCodeNameParams }
  > = (props) => {
    const { channelId, params } = props ?? {}

    return updateMemberCodeName(channelId, params)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateMemberCodeNameMutationResult = NonNullable<Awaited<ReturnType<typeof updateMemberCodeName>>>

export type UpdateMemberCodeNameMutationError = ErrorType<unknown>

export const useUpdateMemberCodeName = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateMemberCodeName>>,
    TError,
    { channelId: string; params: UpdateMemberCodeNameParams },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof updateMemberCodeName>>,
  TError,
  { channelId: string; params: UpdateMemberCodeNameParams },
  TContext
> => {
  const mutationOptions = getUpdateMemberCodeNameMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findChannelMembers = (channelId: string, signal?: AbortSignal) => {
  return customInstance<ApiChannelMemberResponse>({ url: `/api/channels/${channelId}/members`, method: "GET", signal })
}

export const getFindChannelMembersQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}/members`] as const
}

export const getFindChannelMembersQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelMembersQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelMembers>>> = ({ signal }) =>
    findChannelMembers(channelId, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelMembers>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelMembersQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelMembers>>>
export type FindChannelMembersQueryError = ErrorType<unknown>

export function useFindChannelMembers<
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelMembers>>,
          TError,
          Awaited<ReturnType<typeof findChannelMembers>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelMembers<
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelMembers>>,
          TError,
          Awaited<ReturnType<typeof findChannelMembers>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelMembers<
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelMembers<
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelMembersQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const leaveOneChannel = (channelId: string) => {
  return customInstance<string>({ url: `/api/channels/${channelId}/members`, method: "DELETE" })
}

export const getLeaveOneChannelMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof leaveOneChannel>>, TError, { channelId: string }, TContext>
}): UseMutationOptions<Awaited<ReturnType<typeof leaveOneChannel>>, TError, { channelId: string }, TContext> => {
  const mutationKey = ["leaveOneChannel"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof leaveOneChannel>>, { channelId: string }> = (props) => {
    const { channelId } = props ?? {}

    return leaveOneChannel(channelId)
  }

  return { mutationFn, ...mutationOptions }
}

export type LeaveOneChannelMutationResult = NonNullable<Awaited<ReturnType<typeof leaveOneChannel>>>

export type LeaveOneChannelMutationError = ErrorType<unknown>

export const useLeaveOneChannel = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof leaveOneChannel>>, TError, { channelId: string }, TContext>
}): UseMutationResult<Awaited<ReturnType<typeof leaveOneChannel>>, TError, { channelId: string }, TContext> => {
  const mutationOptions = getLeaveOneChannelMutationOptions(options)

  return useMutation(mutationOptions)
}
export const leaveChannels = (channelMemberDeleteRequest: BodyType<ChannelMemberDeleteRequest>) => {
  return customInstance<string>({
    url: `/api/channels/members`,
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    data: channelMemberDeleteRequest
  })
}

export const getLeaveChannelsMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof leaveChannels>>,
    TError,
    { data: BodyType<ChannelMemberDeleteRequest> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof leaveChannels>>,
  TError,
  { data: BodyType<ChannelMemberDeleteRequest> },
  TContext
> => {
  const mutationKey = ["leaveChannels"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof leaveChannels>>,
    { data: BodyType<ChannelMemberDeleteRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return leaveChannels(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type LeaveChannelsMutationResult = NonNullable<Awaited<ReturnType<typeof leaveChannels>>>
export type LeaveChannelsMutationBody = BodyType<ChannelMemberDeleteRequest>
export type LeaveChannelsMutationError = ErrorType<unknown>

export const useLeaveChannels = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof leaveChannels>>,
    TError,
    { data: BodyType<ChannelMemberDeleteRequest> },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof leaveChannels>>,
  TError,
  { data: BodyType<ChannelMemberDeleteRequest> },
  TContext
> => {
  const mutationOptions = getLeaveChannelsMutationOptions(options)

  return useMutation(mutationOptions)
}

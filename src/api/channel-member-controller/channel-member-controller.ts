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
  ApiChannelMemberProfileResponse,
  ApiChannelMembersResponse,
  ApiMemberCodeNameResponse,
  ApiMyChannelMemberResponse,
  ChannelMemberDeleteRequest,
  ChannelMemberUpdateRequest,
  FindChannelMembersParams,
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
export const findChannelMembers = (channelId: string, params?: FindChannelMembersParams, signal?: AbortSignal) => {
  return customInstance<ApiChannelMembersResponse>({
    url: `/api/channels/${channelId}/members`,
    method: "GET",
    params,
    signal
  })
}

export const getFindChannelMembersQueryKey = (channelId: string, params?: FindChannelMembersParams) => {
  return [`/api/channels/${channelId}/members`, ...(params ? [params] : [])] as const
}

export const getFindChannelMembersQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params?: FindChannelMembersParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelMembersQueryKey(channelId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelMembers>>> = ({ signal }) =>
    findChannelMembers(channelId, params, signal)

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
  params: undefined | FindChannelMembersParams,
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
  params?: FindChannelMembersParams,
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
  params?: FindChannelMembersParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelMembers<
  TData = Awaited<ReturnType<typeof findChannelMembers>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params?: FindChannelMembersParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelMembers>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelMembersQueryOptions(channelId, params, options)

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
export const findTodayQuestionerProfile = (channelId: string, signal?: AbortSignal) => {
  return customInstance<ApiChannelMemberProfileResponse>({
    url: `/api/channels/${channelId}/members/today-questioner`,
    method: "GET",
    signal
  })
}

export const getFindTodayQuestionerProfileQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}/members/today-questioner`] as const
}

export const getFindTodayQuestionerProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionerProfile>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindTodayQuestionerProfileQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findTodayQuestionerProfile>>> = ({ signal }) =>
    findTodayQuestionerProfile(channelId, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindTodayQuestionerProfileQueryResult = NonNullable<Awaited<ReturnType<typeof findTodayQuestionerProfile>>>
export type FindTodayQuestionerProfileQueryError = ErrorType<unknown>

export function useFindTodayQuestionerProfile<
  TData = Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionerProfile>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
          TError,
          Awaited<ReturnType<typeof findTodayQuestionerProfile>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindTodayQuestionerProfile<
  TData = Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionerProfile>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
          TError,
          Awaited<ReturnType<typeof findTodayQuestionerProfile>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindTodayQuestionerProfile<
  TData = Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionerProfile>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindTodayQuestionerProfile<
  TData = Awaited<ReturnType<typeof findTodayQuestionerProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionerProfile>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindTodayQuestionerProfileQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findMyChannelMemberProfile = (channelId: string, signal?: AbortSignal) => {
  return customInstance<ApiChannelMemberProfileResponse>({
    url: `/api/channels/${channelId}/members/me`,
    method: "GET",
    signal
  })
}

export const getFindMyChannelMemberProfileQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}/members/me`] as const
}

export const getFindMyChannelMemberProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberProfile>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMyChannelMemberProfileQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMyChannelMemberProfile>>> = ({ signal }) =>
    findMyChannelMemberProfile(channelId, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMyChannelMemberProfileQueryResult = NonNullable<Awaited<ReturnType<typeof findMyChannelMemberProfile>>>
export type FindMyChannelMemberProfileQueryError = ErrorType<unknown>

export function useFindMyChannelMemberProfile<
  TData = Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberProfile>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
          TError,
          Awaited<ReturnType<typeof findMyChannelMemberProfile>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyChannelMemberProfile<
  TData = Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberProfile>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
          TError,
          Awaited<ReturnType<typeof findMyChannelMemberProfile>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyChannelMemberProfile<
  TData = Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberProfile>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMyChannelMemberProfile<
  TData = Awaited<ReturnType<typeof findMyChannelMemberProfile>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberProfile>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMyChannelMemberProfileQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
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

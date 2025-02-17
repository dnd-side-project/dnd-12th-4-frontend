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
  ApiChannelShowAllResponse,
  ApiChannelSpecificResponse,
  ApiChannelStatusResponse,
  ChannelCreateRequest,
  ChannelResponse,
  FindChannelByNameParams,
  FindChannelInviteCodeParams,
  FindChannelsByRoleParams,
  InviteCodeDto
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

export const findChannelByName = (params: FindChannelByNameParams, signal?: AbortSignal) => {
  return customInstance<ApiChannelSpecificResponse>({ url: `/api/channels`, method: "GET", params, signal })
}

export const getFindChannelByNameQueryKey = (params: FindChannelByNameParams) => {
  return [`/api/channels`, ...(params ? [params] : [])] as const
}

export const getFindChannelByNameQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelByNameQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelByName>>> = ({ signal }) =>
    findChannelByName(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelByName>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelByNameQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelByName>>>
export type FindChannelByNameQueryError = ErrorType<unknown>

export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelByName>>,
          TError,
          Awaited<ReturnType<typeof findChannelByName>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelByName>>,
          TError,
          Awaited<ReturnType<typeof findChannelByName>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelByName<
  TData = Awaited<ReturnType<typeof findChannelByName>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelByNameParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelByName>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelByNameQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const makeChannel = (channelCreateRequest: BodyType<ChannelCreateRequest>, signal?: AbortSignal) => {
  return customInstance<ChannelResponse>({
    url: `/api/channels`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: channelCreateRequest,
    signal
  })
}

export const getMakeChannelMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof makeChannel>>,
    TError,
    { data: BodyType<ChannelCreateRequest> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof makeChannel>>,
  TError,
  { data: BodyType<ChannelCreateRequest> },
  TContext
> => {
  const mutationKey = ["makeChannel"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof makeChannel>>,
    { data: BodyType<ChannelCreateRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return makeChannel(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type MakeChannelMutationResult = NonNullable<Awaited<ReturnType<typeof makeChannel>>>
export type MakeChannelMutationBody = BodyType<ChannelCreateRequest>
export type MakeChannelMutationError = ErrorType<unknown>

export const useMakeChannel = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof makeChannel>>,
    TError,
    { data: BodyType<ChannelCreateRequest> },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof makeChannel>>,
  TError,
  { data: BodyType<ChannelCreateRequest> },
  TContext
> => {
  const mutationOptions = getMakeChannelMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findChannelById = (channelId: string, signal?: AbortSignal) => {
  return customInstance<ApiChannelSpecificResponse>({ url: `/api/channels/${channelId}`, method: "GET", signal })
}

export const getFindChannelByIdQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}`] as const
}

export const getFindChannelByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelById>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelByIdQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelById>>> = ({ signal }) =>
    findChannelById(channelId, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelByIdQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelById>>>
export type FindChannelByIdQueryError = ErrorType<unknown>

export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelById>>,
          TError,
          Awaited<ReturnType<typeof findChannelById>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelById>>,
          TError,
          Awaited<ReturnType<typeof findChannelById>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelById<TData = Awaited<ReturnType<typeof findChannelById>>, TError = ErrorType<unknown>>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelById>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelByIdQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const deleteChannel = (channelId: string) => {
  return customInstance<string>({ url: `/api/channels/${channelId}`, method: "DELETE" })
}

export const getDeleteChannelMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext>
}): UseMutationOptions<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext> => {
  const mutationKey = ["deleteChannel"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteChannel>>, { channelId: string }> = (props) => {
    const { channelId } = props ?? {}

    return deleteChannel(channelId)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteChannelMutationResult = NonNullable<Awaited<ReturnType<typeof deleteChannel>>>

export type DeleteChannelMutationError = ErrorType<unknown>

export const useDeleteChannel = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext>
}): UseMutationResult<Awaited<ReturnType<typeof deleteChannel>>, TError, { channelId: string }, TContext> => {
  const mutationOptions = getDeleteChannelMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findChannelStatus = (channelId: string, signal?: AbortSignal) => {
  return customInstance<ApiChannelStatusResponse>({ url: `/api/channels/${channelId}/status`, method: "GET", signal })
}

export const getFindChannelStatusQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}/status`] as const
}

export const getFindChannelStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelStatusQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelStatus>>> = ({ signal }) =>
    findChannelStatus(channelId, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelStatus>>>
export type FindChannelStatusQueryError = ErrorType<unknown>

export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelStatus>>,
          TError,
          Awaited<ReturnType<typeof findChannelStatus>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelStatus>>,
          TError,
          Awaited<ReturnType<typeof findChannelStatus>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelStatus<
  TData = Awaited<ReturnType<typeof findChannelStatus>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelStatus>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelStatusQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findChannelInviteCode = (params: FindChannelInviteCodeParams, signal?: AbortSignal) => {
  return customInstance<InviteCodeDto>({ url: `/api/channels/inviteCode`, method: "GET", params, signal })
}

export const getFindChannelInviteCodeQueryKey = (params: FindChannelInviteCodeParams) => {
  return [`/api/channels/inviteCode`, ...(params ? [params] : [])] as const
}

export const getFindChannelInviteCodeQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelInviteCodeQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelInviteCode>>> = ({ signal }) =>
    findChannelInviteCode(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelInviteCode>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelInviteCodeQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelInviteCode>>>
export type FindChannelInviteCodeQueryError = ErrorType<unknown>

export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelInviteCode>>,
          TError,
          Awaited<ReturnType<typeof findChannelInviteCode>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelInviteCode>>,
          TError,
          Awaited<ReturnType<typeof findChannelInviteCode>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelInviteCode<
  TData = Awaited<ReturnType<typeof findChannelInviteCode>>,
  TError = ErrorType<unknown>
>(
  params: FindChannelInviteCodeParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelInviteCode>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelInviteCodeQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findChannelsByRole = (params?: FindChannelsByRoleParams, signal?: AbortSignal) => {
  return customInstance<ApiChannelShowAllResponse>({
    url: `/api/channels/channel-profile`,
    method: "GET",
    params,
    signal
  })
}

export const getFindChannelsByRoleQueryKey = (params?: FindChannelsByRoleParams) => {
  return [`/api/channels/channel-profile`, ...(params ? [params] : [])] as const
}

export const getFindChannelsByRoleQueryOptions = <
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindChannelsByRoleQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findChannelsByRole>>> = ({ signal }) =>
    findChannelsByRole(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findChannelsByRole>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindChannelsByRoleQueryResult = NonNullable<Awaited<ReturnType<typeof findChannelsByRole>>>
export type FindChannelsByRoleQueryError = ErrorType<unknown>

export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params: undefined | FindChannelsByRoleParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelsByRole>>,
          TError,
          Awaited<ReturnType<typeof findChannelsByRole>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findChannelsByRole>>,
          TError,
          Awaited<ReturnType<typeof findChannelsByRole>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindChannelsByRole<
  TData = Awaited<ReturnType<typeof findChannelsByRole>>,
  TError = ErrorType<unknown>
>(
  params?: FindChannelsByRoleParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findChannelsByRole>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindChannelsByRoleQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

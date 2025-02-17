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
  ApiChannelFriendShowAllResponse,
  ApiMemberResponse,
  ApiMyChannelMemberShowAllResponse,
  ApiString,
  FindMyChannelMemberInfoParams,
  FindMyFriendsParams,
  RegisterNameParams
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType } from ".././clientInstance"

export const registerName = (params: RegisterNameParams, signal?: AbortSignal) => {
  return customInstance<ApiString>({ url: `/api/members/name`, method: "POST", params, signal })
}

export const getRegisterNameMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerName>>,
    TError,
    { params: RegisterNameParams },
    TContext
  >
}): UseMutationOptions<Awaited<ReturnType<typeof registerName>>, TError, { params: RegisterNameParams }, TContext> => {
  const mutationKey = ["registerName"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof registerName>>, { params: RegisterNameParams }> = (
    props
  ) => {
    const { params } = props ?? {}

    return registerName(params)
  }

  return { mutationFn, ...mutationOptions }
}

export type RegisterNameMutationResult = NonNullable<Awaited<ReturnType<typeof registerName>>>

export type RegisterNameMutationError = ErrorType<unknown>

export const useRegisterName = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerName>>,
    TError,
    { params: RegisterNameParams },
    TContext
  >
}): UseMutationResult<Awaited<ReturnType<typeof registerName>>, TError, { params: RegisterNameParams }, TContext> => {
  const mutationOptions = getRegisterNameMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findMemberInfo = (signal?: AbortSignal) => {
  return customInstance<ApiMemberResponse>({ url: `/api/members`, method: "GET", signal })
}

export const getFindMemberInfoQueryKey = () => {
  return [`/api/members`] as const
}

export const getFindMemberInfoQueryOptions = <
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>>
}) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMemberInfoQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMemberInfo>>> = ({ signal }) => findMemberInfo(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMemberInfo>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMemberInfoQueryResult = NonNullable<Awaited<ReturnType<typeof findMemberInfo>>>
export type FindMemberInfoQueryError = ErrorType<unknown>

export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof findMemberInfo>>,
        TError,
        Awaited<ReturnType<typeof findMemberInfo>>
      >,
      "initialData"
    >
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof findMemberInfo>>,
        TError,
        Awaited<ReturnType<typeof findMemberInfo>>
      >,
      "initialData"
    >
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMemberInfo<
  TData = Awaited<ReturnType<typeof findMemberInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMemberInfo>>, TError, TData>>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMemberInfoQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findMyFriends = (params?: FindMyFriendsParams, signal?: AbortSignal) => {
  return customInstance<ApiChannelFriendShowAllResponse>({ url: `/api/members/friends`, method: "GET", params, signal })
}

export const getFindMyFriendsQueryKey = (params?: FindMyFriendsParams) => {
  return [`/api/members/friends`, ...(params ? [params] : [])] as const
}

export const getFindMyFriendsQueryOptions = <
  TData = Awaited<ReturnType<typeof findMyFriends>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyFriendsParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMyFriendsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMyFriends>>> = ({ signal }) =>
    findMyFriends(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMyFriends>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMyFriendsQueryResult = NonNullable<Awaited<ReturnType<typeof findMyFriends>>>
export type FindMyFriendsQueryError = ErrorType<unknown>

export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params: undefined | FindMyFriendsParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyFriends>>,
          TError,
          Awaited<ReturnType<typeof findMyFriends>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params?: FindMyFriendsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyFriends>>,
          TError,
          Awaited<ReturnType<typeof findMyFriends>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params?: FindMyFriendsParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMyFriends<TData = Awaited<ReturnType<typeof findMyFriends>>, TError = ErrorType<unknown>>(
  params?: FindMyFriendsParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyFriends>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMyFriendsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findMyChannelMemberInfo = (params?: FindMyChannelMemberInfoParams, signal?: AbortSignal) => {
  return customInstance<ApiMyChannelMemberShowAllResponse>({
    url: `/api/members/channel-members`,
    method: "GET",
    params,
    signal
  })
}

export const getFindMyChannelMemberInfoQueryKey = (params?: FindMyChannelMemberInfoParams) => {
  return [`/api/members/channel-members`, ...(params ? [params] : [])] as const
}

export const getFindMyChannelMemberInfoQueryOptions = <
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindMyChannelMemberInfoQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findMyChannelMemberInfo>>> = ({ signal }) =>
    findMyChannelMemberInfo(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindMyChannelMemberInfoQueryResult = NonNullable<Awaited<ReturnType<typeof findMyChannelMemberInfo>>>
export type FindMyChannelMemberInfoQueryError = ErrorType<unknown>

export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params: undefined | FindMyChannelMemberInfoParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
          TError,
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
          TError,
          Awaited<ReturnType<typeof findMyChannelMemberInfo>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindMyChannelMemberInfo<
  TData = Awaited<ReturnType<typeof findMyChannelMemberInfo>>,
  TError = ErrorType<unknown>
>(
  params?: FindMyChannelMemberInfoParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findMyChannelMemberInfo>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindMyChannelMemberInfoQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

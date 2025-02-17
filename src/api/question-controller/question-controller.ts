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
  FindQuestionsByChannel200,
  FindQuestionsByChannelParams,
  FindQuestionsByMemberParams,
  QuestionCreateRequest,
  QuestionCreateResponse,
  QuestionResponse,
  QuestionShowAllResponse,
  QuestionUpdateRequest,
  QuestionUpdateResponse,
  TodayQuestionResponse
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

export const findQuestionsByQuestionId = (channelId: string, questionId: number, signal?: AbortSignal) => {
  return customInstance<QuestionResponse>({
    url: `/api/channels/${channelId}/questions/${questionId}`,
    method: "GET",
    signal
  })
}

export const getFindQuestionsByQuestionIdQueryKey = (channelId: string, questionId: number) => {
  return [`/api/channels/${channelId}/questions/${questionId}`] as const
}

export const getFindQuestionsByQuestionIdQueryOptions = <
  TData = Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  questionId: number,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByQuestionId>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindQuestionsByQuestionIdQueryKey(channelId, questionId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findQuestionsByQuestionId>>> = ({ signal }) =>
    findQuestionsByQuestionId(channelId, questionId, signal)

  return { queryKey, queryFn, enabled: !!(channelId && questionId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindQuestionsByQuestionIdQueryResult = NonNullable<Awaited<ReturnType<typeof findQuestionsByQuestionId>>>
export type FindQuestionsByQuestionIdQueryError = ErrorType<unknown>

export function useFindQuestionsByQuestionId<
  TData = Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  questionId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByQuestionId>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
          TError,
          Awaited<ReturnType<typeof findQuestionsByQuestionId>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindQuestionsByQuestionId<
  TData = Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  questionId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByQuestionId>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
          TError,
          Awaited<ReturnType<typeof findQuestionsByQuestionId>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindQuestionsByQuestionId<
  TData = Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  questionId: number,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByQuestionId>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindQuestionsByQuestionId<
  TData = Awaited<ReturnType<typeof findQuestionsByQuestionId>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  questionId: number,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByQuestionId>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindQuestionsByQuestionIdQueryOptions(channelId, questionId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const updateQuestion = (
  channelId: string,
  questionId: number,
  questionUpdateRequest: BodyType<QuestionUpdateRequest>
) => {
  return customInstance<QuestionUpdateResponse>({
    url: `/api/channels/${channelId}/questions/${questionId}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: questionUpdateRequest
  })
}

export const getUpdateQuestionMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateQuestion>>,
    TError,
    { channelId: string; questionId: number; data: BodyType<QuestionUpdateRequest> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateQuestion>>,
  TError,
  { channelId: string; questionId: number; data: BodyType<QuestionUpdateRequest> },
  TContext
> => {
  const mutationKey = ["updateQuestion"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateQuestion>>,
    { channelId: string; questionId: number; data: BodyType<QuestionUpdateRequest> }
  > = (props) => {
    const { channelId, questionId, data } = props ?? {}

    return updateQuestion(channelId, questionId, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof updateQuestion>>>
export type UpdateQuestionMutationBody = BodyType<QuestionUpdateRequest>
export type UpdateQuestionMutationError = ErrorType<unknown>

export const useUpdateQuestion = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateQuestion>>,
    TError,
    { channelId: string; questionId: number; data: BodyType<QuestionUpdateRequest> },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof updateQuestion>>,
  TError,
  { channelId: string; questionId: number; data: BodyType<QuestionUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateQuestionMutationOptions(options)

  return useMutation(mutationOptions)
}
export const deleteQuestion = (channelId: string, questionId: number) => {
  return customInstance<void>({ url: `/api/channels/${channelId}/questions/${questionId}`, method: "DELETE" })
}

export const getDeleteQuestionMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteQuestion>>,
    TError,
    { channelId: string; questionId: number },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteQuestion>>,
  TError,
  { channelId: string; questionId: number },
  TContext
> => {
  const mutationKey = ["deleteQuestion"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteQuestion>>,
    { channelId: string; questionId: number }
  > = (props) => {
    const { channelId, questionId } = props ?? {}

    return deleteQuestion(channelId, questionId)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof deleteQuestion>>>

export type DeleteQuestionMutationError = ErrorType<unknown>

export const useDeleteQuestion = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteQuestion>>,
    TError,
    { channelId: string; questionId: number },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteQuestion>>,
  TError,
  { channelId: string; questionId: number },
  TContext
> => {
  const mutationOptions = getDeleteQuestionMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findQuestionsByChannel = (
  channelId: string,
  params?: FindQuestionsByChannelParams,
  signal?: AbortSignal
) => {
  return customInstance<FindQuestionsByChannel200>({
    url: `/api/channels/${channelId}/questions`,
    method: "GET",
    params,
    signal
  })
}

export const getFindQuestionsByChannelQueryKey = (channelId: string, params?: FindQuestionsByChannelParams) => {
  return [`/api/channels/${channelId}/questions`, ...(params ? [params] : [])] as const
}

export const getFindQuestionsByChannelQueryOptions = <
  TData = Awaited<ReturnType<typeof findQuestionsByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params?: FindQuestionsByChannelParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByChannel>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindQuestionsByChannelQueryKey(channelId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findQuestionsByChannel>>> = ({ signal }) =>
    findQuestionsByChannel(channelId, params, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findQuestionsByChannel>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindQuestionsByChannelQueryResult = NonNullable<Awaited<ReturnType<typeof findQuestionsByChannel>>>
export type FindQuestionsByChannelQueryError = ErrorType<unknown>

export function useFindQuestionsByChannel<
  TData = Awaited<ReturnType<typeof findQuestionsByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params: undefined | FindQuestionsByChannelParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByChannel>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findQuestionsByChannel>>,
          TError,
          Awaited<ReturnType<typeof findQuestionsByChannel>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindQuestionsByChannel<
  TData = Awaited<ReturnType<typeof findQuestionsByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params?: FindQuestionsByChannelParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByChannel>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findQuestionsByChannel>>,
          TError,
          Awaited<ReturnType<typeof findQuestionsByChannel>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindQuestionsByChannel<
  TData = Awaited<ReturnType<typeof findQuestionsByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params?: FindQuestionsByChannelParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByChannel>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindQuestionsByChannel<
  TData = Awaited<ReturnType<typeof findQuestionsByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  params?: FindQuestionsByChannelParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByChannel>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindQuestionsByChannelQueryOptions(channelId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const createQuestion = (
  channelId: string,
  questionCreateRequest: BodyType<QuestionCreateRequest>,
  signal?: AbortSignal
) => {
  return customInstance<QuestionCreateResponse>({
    url: `/api/channels/${channelId}/questions`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: questionCreateRequest,
    signal
  })
}

export const getCreateQuestionMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createQuestion>>,
    TError,
    { channelId: string; data: BodyType<QuestionCreateRequest> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof createQuestion>>,
  TError,
  { channelId: string; data: BodyType<QuestionCreateRequest> },
  TContext
> => {
  const mutationKey = ["createQuestion"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createQuestion>>,
    { channelId: string; data: BodyType<QuestionCreateRequest> }
  > = (props) => {
    const { channelId, data } = props ?? {}

    return createQuestion(channelId, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateQuestionMutationResult = NonNullable<Awaited<ReturnType<typeof createQuestion>>>
export type CreateQuestionMutationBody = BodyType<QuestionCreateRequest>
export type CreateQuestionMutationError = ErrorType<unknown>

export const useCreateQuestion = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createQuestion>>,
    TError,
    { channelId: string; data: BodyType<QuestionCreateRequest> },
    TContext
  >
}): UseMutationResult<
  Awaited<ReturnType<typeof createQuestion>>,
  TError,
  { channelId: string; data: BodyType<QuestionCreateRequest> },
  TContext
> => {
  const mutationOptions = getCreateQuestionMutationOptions(options)

  return useMutation(mutationOptions)
}
export const findTodayQuestionByChannel = (channelId: string, signal?: AbortSignal) => {
  return customInstance<TodayQuestionResponse>({
    url: `/api/channels/${channelId}/questions/today`,
    method: "GET",
    signal
  })
}

export const getFindTodayQuestionByChannelQueryKey = (channelId: string) => {
  return [`/api/channels/${channelId}/questions/today`] as const
}

export const getFindTodayQuestionByChannelQueryOptions = <
  TData = Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionByChannel>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindTodayQuestionByChannelQueryKey(channelId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findTodayQuestionByChannel>>> = ({ signal }) =>
    findTodayQuestionByChannel(channelId, signal)

  return { queryKey, queryFn, enabled: !!channelId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindTodayQuestionByChannelQueryResult = NonNullable<Awaited<ReturnType<typeof findTodayQuestionByChannel>>>
export type FindTodayQuestionByChannelQueryError = ErrorType<unknown>

export function useFindTodayQuestionByChannel<
  TData = Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionByChannel>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
          TError,
          Awaited<ReturnType<typeof findTodayQuestionByChannel>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindTodayQuestionByChannel<
  TData = Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionByChannel>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
          TError,
          Awaited<ReturnType<typeof findTodayQuestionByChannel>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindTodayQuestionByChannel<
  TData = Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionByChannel>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindTodayQuestionByChannel<
  TData = Awaited<ReturnType<typeof findTodayQuestionByChannel>>,
  TError = ErrorType<unknown>
>(
  channelId: string,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTodayQuestionByChannel>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindTodayQuestionByChannelQueryOptions(channelId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const findQuestionsByMember = (params?: FindQuestionsByMemberParams, signal?: AbortSignal) => {
  return customInstance<QuestionShowAllResponse>({ url: `/api/channels/questions`, method: "GET", params, signal })
}

export const getFindQuestionsByMemberQueryKey = (params?: FindQuestionsByMemberParams) => {
  return [`/api/channels/questions`, ...(params ? [params] : [])] as const
}

export const getFindQuestionsByMemberQueryOptions = <
  TData = Awaited<ReturnType<typeof findQuestionsByMember>>,
  TError = ErrorType<unknown>
>(
  params?: FindQuestionsByMemberParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByMember>>, TError, TData>> }
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getFindQuestionsByMemberQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findQuestionsByMember>>> = ({ signal }) =>
    findQuestionsByMember(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findQuestionsByMember>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type FindQuestionsByMemberQueryResult = NonNullable<Awaited<ReturnType<typeof findQuestionsByMember>>>
export type FindQuestionsByMemberQueryError = ErrorType<unknown>

export function useFindQuestionsByMember<
  TData = Awaited<ReturnType<typeof findQuestionsByMember>>,
  TError = ErrorType<unknown>
>(
  params: undefined | FindQuestionsByMemberParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByMember>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof findQuestionsByMember>>,
          TError,
          Awaited<ReturnType<typeof findQuestionsByMember>>
        >,
        "initialData"
      >
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindQuestionsByMember<
  TData = Awaited<ReturnType<typeof findQuestionsByMember>>,
  TError = ErrorType<unknown>
>(
  params?: FindQuestionsByMemberParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByMember>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof findQuestionsByMember>>,
          TError,
          Awaited<ReturnType<typeof findQuestionsByMember>>
        >,
        "initialData"
      >
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useFindQuestionsByMember<
  TData = Awaited<ReturnType<typeof findQuestionsByMember>>,
  TError = ErrorType<unknown>
>(
  params?: FindQuestionsByMemberParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByMember>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useFindQuestionsByMember<
  TData = Awaited<ReturnType<typeof findQuestionsByMember>>,
  TError = ErrorType<unknown>
>(
  params?: FindQuestionsByMemberParams,
  options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findQuestionsByMember>>, TError, TData>> }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getFindQuestionsByMemberQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

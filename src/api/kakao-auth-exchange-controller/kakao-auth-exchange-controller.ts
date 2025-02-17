import { useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query"
import type { ApiUserResponse } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType } from ".././clientInstance"

export const kakaoCallback = (signal?: AbortSignal) => {
  return customInstance<ApiUserResponse>({ url: `/auth/kakao/exchange`, method: "GET", signal })
}

export const getKakaoCallbackQueryKey = () => {
  return [`/auth/kakao/exchange`] as const
}

export const getKakaoCallbackQueryOptions = <
  TData = Awaited<ReturnType<typeof kakaoCallback>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof kakaoCallback>>, TError, TData>>
}) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getKakaoCallbackQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof kakaoCallback>>> = ({ signal }) => kakaoCallback(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof kakaoCallback>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type KakaoCallbackQueryResult = NonNullable<Awaited<ReturnType<typeof kakaoCallback>>>
export type KakaoCallbackQueryError = ErrorType<unknown>

export function useKakaoCallback<
  TData = Awaited<ReturnType<typeof kakaoCallback>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<typeof kakaoCallback>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof kakaoCallback>>,
        TError,
        Awaited<ReturnType<typeof kakaoCallback>>
      >,
      "initialData"
    >
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useKakaoCallback<
  TData = Awaited<ReturnType<typeof kakaoCallback>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof kakaoCallback>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof kakaoCallback>>,
        TError,
        Awaited<ReturnType<typeof kakaoCallback>>
      >,
      "initialData"
    >
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useKakaoCallback<
  TData = Awaited<ReturnType<typeof kakaoCallback>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof kakaoCallback>>, TError, TData>>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useKakaoCallback<
  TData = Awaited<ReturnType<typeof kakaoCallback>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof kakaoCallback>>, TError, TData>>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getKakaoCallbackQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

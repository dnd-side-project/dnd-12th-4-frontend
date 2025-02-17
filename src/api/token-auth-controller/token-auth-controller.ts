import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { ApiRefreshTokenResponse } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType } from ".././clientInstance"

export const refreshAccessToken = (signal?: AbortSignal) => {
  return customInstance<ApiRefreshTokenResponse>({ url: `/auth/refresh`, method: "POST", signal })
}

export const getRefreshAccessTokenMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext>
}): UseMutationOptions<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext> => {
  const mutationKey = ["refreshAccessToken"]
  const { mutation: mutationOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof refreshAccessToken>>, void> = () => {
    return refreshAccessToken()
  }

  return { mutationFn, ...mutationOptions }
}

export type RefreshAccessTokenMutationResult = NonNullable<Awaited<ReturnType<typeof refreshAccessToken>>>

export type RefreshAccessTokenMutationError = ErrorType<unknown>

export const useRefreshAccessToken = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext>
}): UseMutationResult<Awaited<ReturnType<typeof refreshAccessToken>>, TError, void, TContext> => {
  const mutationOptions = getRefreshAccessTokenMutationOptions(options)

  return useMutation(mutationOptions)
}

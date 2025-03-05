"use client"

import RefreshTokenHandler from "@/components/refresh/RefreshTokenHandler"
import { QueryClient } from "@tanstack/react-query"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren, useState } from "react"

interface ProvidersProps extends PropsWithChildren {
  session?: Session | null
  queryClient?: QueryClient
}

export const AuthProvider = ({ session, children }: ProvidersProps) => {
  const [sessionRefetchInterval, setSessionRefetchInterval] = useState(10000)
  return (
    <SessionProvider session={session} refetchInterval={sessionRefetchInterval}>
      <RefreshTokenHandler setSessionRefetchInterval={setSessionRefetchInterval} />
      {children}
    </SessionProvider>
  )
}

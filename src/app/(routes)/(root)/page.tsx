"use client"

import { signOut } from "next-auth/react"

export default function Home() {
  return <p onClick={() => signOut()}>홈화면</p>
}

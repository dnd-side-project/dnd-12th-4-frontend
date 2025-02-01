"use client"

import { signOut } from "next-auth/react"
import React from "react"

function LogoutTestButton() {
  return <button onClick={() => signOut()}>홈화면</button>
}

export default LogoutTestButton

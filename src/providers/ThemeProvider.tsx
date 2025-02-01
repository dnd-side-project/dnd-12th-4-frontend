"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { setDocumentColor } from "@/utils/setDocumentColor"
import React, { useEffect } from "react"

interface Params {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: Params) {
  const { getLocalStorage } = useLocalStorage()
  const primaryColor = getLocalStorage("primary")
  const secondaryColor = getLocalStorage("secondary")

  useEffect(() => {
    if (primaryColor) setDocumentColor(primaryColor, "primary")
    if (secondaryColor) setDocumentColor(secondaryColor, "primary")
  }, [primaryColor, secondaryColor])
  return <>{children}</>
}

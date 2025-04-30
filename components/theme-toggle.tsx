"use client"
import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // Establecer el tema del sistema por defecto
    setTheme("system")
  }, [setTheme])

  // Este componente no renderiza nada visible
  return null
}

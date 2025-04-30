"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const closeBanner = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0 pr-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">Utilizamos cookies</h3>
              <p className="text-sm text-gray-600">
                Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política
                de cookies.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={acceptCookies} className="bg-blue-800 hover:bg-blue-700 text-white">
                Aceptar
              </Button>
              <button onClick={closeBanner} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

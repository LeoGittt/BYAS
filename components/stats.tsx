"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, MapPin, Clock } from "lucide-react"
import { useTheme } from "next-themes"

const stats = [
  {
    icon: <Award className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
    value: 50,
    label: "Años de experiencia",
    suffix: "+",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
    value: 500,
    label: "Clientes satisfechos",
    suffix: "+",
  },
  {
    icon: <MapPin className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
    value: 1000,
    label: "Proyectos completados",
    suffix: "+",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-800 dark:text-blue-400" />,
    value: 100,
    label: "Profesionales",
    suffix: "%",
  },
]

export default function Stats() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section id="stats" className="py-16 bg-white dark:bg-gray-950 relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white dark:from-gray-950 to-transparent z-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({ stat, index, isDark }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
    >
      <div className={`bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full mb-4`}>{stat.icon}</div>
      <div className="flex items-baseline">
        <span className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-400">{count}</span>
        <span className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-400">{stat.suffix}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
    </motion.div>
  )
}

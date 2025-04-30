// "use client"

// import { useState, useRef, useEffect } from "react"
// import { motion, useInView } from "framer-motion"
// import { Quote } from "lucide-react"

// const testimonials = [
//   {
//     quote:
//       "BYAS ha sido un socio clave en nuestros proyectos de infraestructura. Su precisión y profesionalismo son incomparables.",
//     author: "Carlos Rodríguez",
//     position: "Director de Proyectos",
//     company: "Constructora del Sur",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     quote:
//       "Trabajar con BYAS nos ha permitido optimizar tiempos y recursos en nuestros desarrollos urbanísticos. Su experiencia es invaluable.",
//     author: "María González",
//     position: "Gerente de Operaciones",
//     company: "Desarrollos Urbanos S.A.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     quote:
//       "La precisión en los relevamientos topográficos de BYAS ha sido fundamental para el éxito de nuestros proyectos viales.",
//     author: "Juan Pérez",
//     position: "Ingeniero Jefe",
//     company: "Vialidad Nacional",
//     image: "/placeholder.svg?height=100&width=100",
//   },
// ]

// export default function TestimonialSlider() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [autoplay, setAutoplay] = useState(true)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const autoplayRef = useRef(null)

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
//   }

//   useEffect(() => {
//     if (autoplay) {
//       autoplayRef.current = setInterval(() => {
//         nextSlide()
//       }, 5000)
//     }

//     return () => {
//       if (autoplayRef.current) {
//         clearInterval(autoplayRef.current)
//       }
//     }
//   }, [autoplay, activeIndex])

//   return (
//     <section id="testimonios" className="py-24 bg-white dark:bg-vercel-950">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl mx-auto text-center mb-16"
//         >
//           <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300 text-sm font-medium">
//             Testimonios
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Lo que dicen <span className="text-gradient">nuestros clientes</span>
//           </h2>
//           <p className="text-vercel-600 dark:text-vercel-300 text-lg">
//             La satisfacción de nuestros clientes es nuestro mayor logro.
//           </p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             <div className="absolute -top-10 -left-10 text-vercel-200 dark:text-vercel-800 opacity-50">
//               <Quote size={80} />
//             </div>

//             <div className="glass-card rounded-xl shadow-xl p-8 md:p-12 relative">
//               <div className="flex flex-col md:flex-row items-center gap-8">
//                 <div className="md:w-1/3 flex-shrink-0">
//                   <div className="relative w-28 h-28 mx-auto">
//                     <div className="absolute inset-0 rounded-full bg-brand-100 dark:bg-brand-900/30"></div>
//                     <img
//                       src={testimonials[activeIndex].image || "/placeholder.svg"}
//                       alt={testimonials[activeIndex].author}
//                       className="relative z-10 w-24 h-24 object-cover rounded-full border-4 border-white dark:border-vercel-900 shadow-lg mx-auto"
//                     />
//                   </div>
//                 </div>
//                 <div className="md:w-2/3 text-center md:text-left">
//                   <p className="text-xl md:text-2xl text-vercel-700 dark:text-vercel-200 italic mb-6">
//                     "{testimonials[activeIndex].quote}"
//                   </p>
//                   <div>
//                     <h4 className="text-lg font-semibold text-vercel-900 dark:text-white">
//                       {testimonials[activeIndex].author}
//                     </h4>
//                     <p className="text-vercel-600 dark:text-vercel-400">
//                       {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center mt-8 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setActiveIndex(index)
//                     setAutoplay(false)
//                   }}
//                   className={`w-8 h-1 rounded-full transition-colors ${
//                     index === activeIndex ? "bg-brand-600 dark:bg-brand-500" : "bg-vercel-200 dark:bg-vercel-800"
//                   }`}
//                   aria-label={`Ir al testimonio ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

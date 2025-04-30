"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"
import { Calculator, Check, Clock } from "lucide-react"

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    serviceType: "",
    projectSize: 50,
    urgency: "normal",
    additionalServices: {
      digitalModeling: false,
      environmentalStudy: false,
      ongoingSupport: false,
    },
  })

  const [quote, setQuote] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleServiceChange = (value) => {
    setFormData({ ...formData, serviceType: value })
    setQuote(null)
  }

  const handleSizeChange = (value) => {
    setFormData({ ...formData, projectSize: value[0] })
    setQuote(null)
  }

  const handleUrgencyChange = (value) => {
    setFormData({ ...formData, urgency: value })
    setQuote(null)
  }

  const handleAdditionalServiceChange = (service, checked) => {
    setFormData({
      ...formData,
      additionalServices: {
        ...formData.additionalServices,
        [service]: checked,
      },
    })
    setQuote(null)
  }

  const calculateQuote = () => {
    // Base prices for different services
    const basePrices = {
      topography: 1000,
      urbanDevelopment: 5000,
      surveying: 800,
      structuralCalculations: 1500,
      soilMovement: 3000,
    }

    // Size multipliers
    const sizeMultiplier = formData.projectSize / 50

    // Urgency multipliers
    const urgencyMultipliers = {
      low: 0.8,
      normal: 1,
      high: 1.5,
      urgent: 2,
    }

    // Additional services costs
    const additionalServicesCosts = {
      digitalModeling: 800,
      environmentalStudy: 1200,
      ongoingSupport: 1500,
    }

    // Calculate base cost
    const basePrice = basePrices[formData.serviceType] || 0
    let totalCost = basePrice * sizeMultiplier * urgencyMultipliers[formData.urgency]

    // Add additional services
    Object.entries(formData.additionalServices).forEach(([service, isSelected]) => {
      if (isSelected) {
        totalCost += additionalServicesCosts[service]
      }
    })

    // Calculate estimated time (in days)
    let estimatedTime = 0
    if (formData.serviceType) {
      estimatedTime = Math.round(
        (basePrice / 100) *
          sizeMultiplier *
          (urgencyMultipliers[formData.urgency] > 1 ? 1 / urgencyMultipliers[formData.urgency] : 1),
      )
    }

    setQuote({
      cost: Math.round(totalCost),
      time: estimatedTime,
    })
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Calculadora de Presupuestos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Obtén un presupuesto estimado para tu proyecto en segundos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Detalles del Proyecto</h3>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="service-type" className="text-gray-700 dark:text-gray-300">
                      Tipo de Servicio
                    </Label>
                    <Select onValueChange={handleServiceChange} value={formData.serviceType}>
                      <SelectTrigger id="service-type" className="w-full">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="topography">Relevamiento Planialtimétrico</SelectItem>
                        <SelectItem value="urbanDevelopment">Desarrollo Urbanístico</SelectItem>
                        <SelectItem value="surveying">Agrimensura General</SelectItem>
                        <SelectItem value="structuralCalculations">Cálculos Estructurales</SelectItem>
                        <SelectItem value="soilMovement">Movimiento de Suelos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="project-size" className="text-gray-700 dark:text-gray-300">
                        Tamaño del Proyecto (hectáreas)
                      </Label>
                      <span className="text-blue-800 dark:text-blue-400 font-medium">{formData.projectSize} ha</span>
                    </div>
                    <Slider
                      id="project-size"
                      min={1}
                      max={100}
                      step={1}
                      value={[formData.projectSize]}
                      onValueChange={handleSizeChange}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Pequeño</span>
                      <span>Mediano</span>
                      <span>Grande</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-gray-700 dark:text-gray-300">
                      Urgencia
                    </Label>
                    <Select onValueChange={handleUrgencyChange} value={formData.urgency}>
                      <SelectTrigger id="urgency" className="w-full">
                        <SelectValue placeholder="Selecciona la urgencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baja (Ahorra 20%)</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">Alta (+50%)</SelectItem>
                        <SelectItem value="urgent">Urgente (+100%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-gray-700 dark:text-gray-300">Servicios Adicionales</Label>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="digital-modeling" className="text-gray-600 dark:text-gray-400">
                            Modelado Digital 3D
                          </Label>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            Visualización avanzada del proyecto
                          </p>
                        </div>
                        <Switch
                          id="digital-modeling"
                          checked={formData.additionalServices.digitalModeling}
                          onCheckedChange={(checked) => handleAdditionalServiceChange("digitalModeling", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="environmental-study" className="text-gray-600 dark:text-gray-400">
                            Estudio Ambiental
                          </Label>
                          <p className="text-xs text-gray-500 dark:text-gray-500">Evaluación de impacto ambiental</p>
                        </div>
                        <Switch
                          id="environmental-study"
                          checked={formData.additionalServices.environmentalStudy}
                          onCheckedChange={(checked) => handleAdditionalServiceChange("environmentalStudy", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="ongoing-support" className="text-gray-600 dark:text-gray-400">
                            Soporte Continuo
                          </Label>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            Asesoramiento durante todo el proyecto
                          </p>
                        </div>
                        <Switch
                          id="ongoing-support"
                          checked={formData.additionalServices.ongoingSupport}
                          onCheckedChange={(checked) => handleAdditionalServiceChange("ongoingSupport", checked)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Presupuesto Estimado</h3>

                {quote ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-8 text-center"
                  >
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-400">
                        ${quote.cost.toLocaleString()}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">USD</span>
                    </div>

                    <div className="flex items-center justify-center mb-8 text-gray-700 dark:text-gray-300">
                      <Clock className="h-5 w-5 mr-2 text-blue-800 dark:text-blue-400" />
                      <span>Tiempo estimado: {quote.time} días</span>
                    </div>

                    <div className="space-y-3 text-left mb-8">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 dark:text-green-500 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Presupuesto detallado</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 dark:text-green-500 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Asesoramiento personalizado</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 dark:text-green-500 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Garantía de satisfacción</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">
                      Solicitar presupuesto formal
                    </Button>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                    <Calculator className="h-16 w-16 text-blue-300 dark:text-blue-700 mb-4" />
                    <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Completa los detalles
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      Ingresa la información de tu proyecto para obtener un presupuesto estimado.
                    </p>
                    <Button
                      onClick={calculateQuote}
                      disabled={!formData.serviceType}
                      className="bg-blue-800 hover:bg-blue-700 text-white disabled:opacity-50"
                    >
                      Calcular Presupuesto
                    </Button>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Este es un presupuesto estimado. Para un presupuesto detallado y personalizado, por favor
                    contáctanos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

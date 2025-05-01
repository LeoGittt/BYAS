"use client";

import { useState, useRef, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, JSX, SetStateAction } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  Ruler,
  Zap,
  Calculator,
  Mountain,
  Shovel,
  Waves,
  X,
  ArrowRight,
  Check,
  Droplets,
  Gauge,
  Layers,
  LandPlot,
  Route,
  Star,
  ChevronRight,
  Users,
  Clock,
  Award,
  FileCheck,
  Phone,
  Calendar,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // Ensure this path is correct
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select"; // Ensure this path is correct
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

// Service data structure
const serviceCategories = [
  {
    id: "topografia",
    name: "Topografía y Agrimensura",
    icon: <MapPin className="h-6 w-6" />,
    description:
      "Mediciones precisas y delimitación de terrenos con tecnología avanzada",
    services: [
      {
        id: "relevamiento",
        icon: <MapPin className="h-6 w-6" />,
        title: "Relevamiento Planialtimétrico",
        shortDescription:
          "Mediciones precisas de terreno con tecnología de punta",
        description:
          "Levantamientos topográficos detallados para determinar coordenadas y alturas con precisión milimétrica.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.9,
        completedProjects: 120,
        details: {
          features: [
            "Equipos Leica TS16 y GPS RTK GS18T",
            "Precisión de ±1cm en levantamientos",
            "Modelos Digitales de Terreno (MDT)",
            "Cartografía digital y sistemas GIS",
            "Nube de puntos con escáner láser",
          ],
          applications: [
            "Loteos urbanos y rurales",
            "Regularización de dominios",
            "Catastro municipal",
            "Relevamientos para obras civiles",
            "Mediciones judiciales",
          ],
          methodology:
            "Trabajamos con estaciones totales robóticas y GPS de doble frecuencia para garantizar máxima precisión en cualquier terreno.",
          testimonial: {
            quote:
              "El relevamiento planialtimétrico que realizaron fue fundamental para nuestro proyecto de urbanización. La precisión y el detalle del trabajo superaron nuestras expectativas.",
            author: "Ing. Carlos Méndez",
            company: "Desarrollos Urbanos S.A.",
          },
        },
      },
      {
        id: "agrimensura",
        icon: <Ruler className="h-6 w-6" />,
        title: "Agrimensura General",
        shortDescription:
          "Delimitación y división de propiedades con exactitud",
        description:
          "Servicios completos de medición, subdivisión y amojonamiento de terrenos.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.8,
        completedProjects: 85,
        details: {
          features: [
            "Deslinde y amojonamiento",
            "Subdivisión de parcelas",
            "Unificación de dominios",
            "Mediciones judiciales",
            "Relevamientos catastrales",
          ],
          applications: [
            "Divisiones sucesorias",
            "Regularización dominial",
            "Expensas de mensura",
            "Aprobación municipal de parcelas",
            "Informes periciales",
          ],
          methodology:
            "Combinamos tecnología GNSS con metodología tradicional para resultados legalmente válidos y técnicamente precisos.",
          testimonial: {
            quote:
              "Su trabajo de agrimensura fue impecable. Resolvieron un conflicto de límites que llevaba años sin solución.",
            author: "Dra. Laura Sánchez",
            company: "Estudio Jurídico Sánchez & Asociados",
          },
        },
      },
      {
        id: "nivelacion",
        icon: <Gauge className="h-6 w-6" />,
        title: "Nivelación Geométrica",
        shortDescription: "Precisión en medición de desniveles",
        description:
          "Determinación exacta de cotas y alturas para proyectos de ingeniería.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.7,
        completedProjects: 64,
        details: {
          features: [
            "Nivelación de alta precisión",
            "Control de asentamientos",
            "Monitoreo de deformaciones",
            "Nivelación para obras lineales",
            "Certificación de cotas",
          ],
          applications: [
            "Cimentaciones de edificios",
            "Obras viales y ferroviarias",
            "Puentes y estructuras",
            "Sistemas de drenaje",
            "Control de movimientos de tierra",
          ],
          methodology:
            "Utilizamos niveles digitales Leica DNA con compensadores automáticos para garantizar precisión de ±0.3mm/km.",
          testimonial: {
            quote:
              "La nivelación geométrica que realizaron fue crucial para detectar problemas estructurales que no habíamos identificado previamente.",
            author: "Ing. Martín Rodríguez",
            company: "Constructora del Sur",
          },
        },
      },
    ],
  },
  {
    id: "ingenieria",
    name: "Ingeniería Civil",
    icon: <Building2 className="h-6 w-6" />,
    description:
      "Diseño y ejecución de proyectos de infraestructura y edificación",
    services: [
      {
        id: "urbanizaciones",
        icon: <Building2 className="h-6 w-6" />,
        title: "Desarrollo Integral de Urbanizaciones",
        shortDescription: "Planificación completa de proyectos urbanísticos",
        description:
          "Diseño y ejecución de urbanizaciones desde el concepto inicial hasta la entrega final.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.9,
        completedProjects: 42,
        details: {
          features: [
            "Diseño de parcelas y espacios comunes",
            "Infraestructura vial y de servicios",
            "Estudios de impacto ambiental",
            "Gestión de permisos municipales",
            "Planificación de etapas",
          ],
          applications: [
            "Barrios cerrados y countries",
            "Urbanizaciones sociales",
            "Parques industriales",
            "Conjuntos habitacionales",
            "Desarrollos turísticos",
          ],
          methodology:
            "Empleamos software Civil 3D y Autodesk InfraWorks para modelado BIM integrado con GIS para planificación urbana inteligente.",
          testimonial: {
            quote:
              "Su enfoque integral en el desarrollo de nuestra urbanización nos permitió optimizar recursos y entregar un proyecto de alta calidad en tiempo récord.",
            author: "Arq. Gabriela Torres",
            company: "GT Desarrollos Inmobiliarios",
          },
        },
      },
      {
        id: "replanteo",
        icon: <Zap className="h-6 w-6" />,
        title: "Replanteo de Obras Especiales",
        shortDescription: "Precisión en ubicación de elementos críticos",
        description:
          "Implementación exacta de proyectos en campo para diversos tipos de obras.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.8,
        completedProjects: 78,
        details: {
          features: [
            "Líneas de Alta Tensión",
            "Gasoductos y redes de servicio",
            "Obras viales y autopistas",
            "Estructuras civiles complejas",
            "Control geométrico continuo",
          ],
          applications: [
            "Subestaciones eléctricas",
            "Redes de distribución de gas",
            "Autopistas y rutas nacionales",
            "Puentes y pasos a desnivel",
            "Túneles y obras subterráneas",
          ],
          methodology:
            "Sistema de replanteo con estación total robotizada y verificación con GPS RTK para máxima precisión en obras lineales.",
          testimonial: {
            quote:
              "El replanteo de nuestra línea de alta tensión fue impecable. La precisión lograda nos permitió evitar conflictos y optimizar la instalación.",
            author: "Ing. Fernando Gutiérrez",
            company: "Energía del Norte S.A.",
          },
        },
      },
      {
        id: "estructurales",
        icon: <Calculator className="h-6 w-6" />,
        title: "Cálculos Estructurales",
        shortDescription: "Análisis y diseño de estructuras seguras",
        description:
          "Ingeniería detallada para garantizar estabilidad y durabilidad de construcciones.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.7,
        completedProjects: 56,
        details: {
          features: [
            "Análisis de cargas y esfuerzos",
            "Diseño sismo-resistente",
            "Cálculo de cimentaciones",
            "Optimización de materiales",
            "Certificación de proyectos",
          ],
          applications: [
            "Edificios de altura",
            "Naves industriales",
            "Puentes y pasarelas",
            "Estructuras especiales",
            "Refuerzo estructural",
          ],
          methodology:
            "Utilizamos SAP2000, ETABS y Robot Structural Analysis para modelado y cálculo según normas CIRSOC, ACI y Eurocódigos.",
          testimonial: {
            quote:
              "Los cálculos estructurales realizados por su equipo nos permitieron optimizar materiales sin comprometer la seguridad, generando un ahorro significativo.",
            author: "Ing. Javier Morales",
            company: "Constructora Horizonte",
          },
        },
      },
    ],
  },
  {
    id: "hidrologia",
    name: "Hidrología y Medio Ambiente",
    icon: <Droplets className="h-6 w-6" />,
    description:
      "Estudios y soluciones para gestión del agua y protección ambiental",
    services: [
      {
        id: "batimetricos",
        icon: <Waves className="h-6 w-6" />,
        title: "Relevamientos Batimétricos",
        shortDescription: "Cartografía subacuática precisa",
        description:
          "Medición de cuerpos de agua para proyectos hidráulicos y ambientales.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.8,
        completedProjects: 38,
        details: {
          features: [
            "Perfiles de profundidad",
            "Modelado de cuencas",
            "Volumetría de embalses",
            "Detección de obstáculos",
            "Cartografía náutica",
          ],
          applications: [
            "Diseño de puertos y muelles",
            "Dragado y mantenimiento",
            "Centrales hidroeléctricas",
            "Estudios ambientales",
            "Obras de toma y descarga",
          ],
          methodology:
            "Equipos de sonar multihaz y ecosondas de alta frecuencia combinados con GPS diferencial para precisiones de ±5cm.",
          testimonial: {
            quote:
              "El relevamiento batimétrico que realizaron fue fundamental para nuestro proyecto de puerto. La precisión de los datos nos permitió optimizar el diseño y reducir costos de dragado.",
            author: "Ing. Ricardo Vega",
            company: "Puerto del Este S.A.",
          },
        },
      },
      {
        id: "hidrologicos",
        icon: <Droplets className="h-6 w-6" />,
        title: "Estudios Hidrológicos e Hidráulicos",
        shortDescription: "Análisis de comportamiento del agua",
        description:
          "Modelado de flujos y diseño de sistemas de manejo hídrico.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.7,
        completedProjects: 45,
        details: {
          features: [
            "Modelación de cuencas",
            "Cálculo de crecidas",
            "Diseño de drenajes",
            "Análisis de riesgo",
            "Estudios de inundabilidad",
          ],
          applications: [
            "Puentes y alcantarillas",
            "Sistemas de riego",
            "Control de erosión",
            "Presas y embalses",
            "Urbanizaciones en zonas húmedas",
          ],
          methodology:
            "Software especializado (HEC-RAS, SWMM, Iber) para modelación 1D y 2D con datos LIDAR y fotogrametría.",
          testimonial: {
            quote:
              "Sus estudios hidrológicos nos permitieron identificar y mitigar riesgos de inundación en nuestra urbanización, salvaguardando la inversión y la seguridad de los residentes.",
            author: "Arq. Daniela Pérez",
            company: "Desarrollos Sustentables S.A.",
          },
        },
      },
      {
        id: "riego",
        icon: <Droplets className="h-6 w-6" />,
        title: "Diseño de Sistemas de Riego",
        shortDescription: "Soluciones eficientes para agricultura",
        description:
          "Proyectos de riego tecnificado para optimización hídrica.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.9,
        completedProjects: 52,
        details: {
          features: [
            "Riego por goteo y aspersión",
            "Automatización completa",
            "Diseño hidráulico",
            "Optimización energética",
            "Fertirrigación integrada",
          ],
          applications: [
            "Grandes extensiones agrícolas",
            "Invernaderos tecnificados",
            "Parques y jardines",
            "Campos deportivos",
            "Recuperación de suelos",
          ],
          methodology:
            "Modelado con software especializado (EPANET, IrriPro) y selección de componentes de última generación para máxima eficiencia.",
          testimonial: {
            quote:
              "El sistema de riego diseñado por su equipo nos permitió reducir el consumo de agua en un 40% y aumentar la productividad de nuestros cultivos.",
            author: "Ing. Agr. Miguel Sosa",
            company: "Agrícola del Valle",
          },
        },
      },
    ],
  },
  {
    id: "movimiento",
    name: "Movimiento de Tierras",
    icon: <Mountain className="h-6 w-6" />,
    description:
      "Optimización y ejecución de proyectos de excavación y nivelación",
    services: [
      {
        id: "aterrazamientos",
        icon: <Mountain className="h-6 w-6" />,
        title: "Proyectos de Aterrazamientos",
        shortDescription: "Optimización de terrenos en pendiente",
        description:
          "Diseño y ejecución de terrazas para aprovechamiento de terrenos complejos.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.8,
        completedProjects: 29,
        details: {
          features: [
            "Análisis de pendientes",
            "Diseño de bancales",
            "Cálculo de volúmenes",
            "Control de estabilidad",
            "Sistemas de drenaje",
          ],
          applications: [
            "Viñedos en ladera",
            "Urbanización en terrenos difíciles",
            "Control de erosión",
            "Explotaciones mineras",
            "Proyectos forestales",
          ],
          methodology:
            "Modelado 3D con drones y software de movimiento de tierras para minimizar costos y maximizar aprovechamiento.",
          testimonial: {
            quote:
              "El proyecto de aterrazamiento que diseñaron para nuestro viñedo transformó un terreno difícil en un espacio productivo y estéticamente impresionante.",
            author: "Enólogo Pablo Martínez",
            company: "Viñedos Altos",
          },
        },
      },
      {
        id: "movimiento-suelos",
        icon: <Shovel className="h-6 w-6" />,
        title: "Movimiento de Suelos Integral",
        shortDescription: "Gestión completa de excavaciones y rellenos",
        description:
          "Proyecto y control de obras de movimiento de tierras de cualquier escala.",
        image: "/placeholder.svg?height=400&width=600",
        rating: 4.7,
        completedProjects: 63,
        details: {
          features: [
            "Cubicación precisa",
            "Optimización de movimientos",
            "Control de compactación",
            "Estabilización de suelos",
            "Certificación de volúmenes",
          ],
          applications: [
            "Excavaciones para cimientos",
            "Terraplenes viales",
            "Nivelación de parcelas",
            "Obras hidráulicas",
            "Rellenos controlados",
          ],
          methodology:
            "Topografía de alta frecuencia con control GPS en maquinaria y verificación con drones para exactitud en volúmenes.",
          testimonial: {
            quote:
              "Su gestión del movimiento de suelos en nuestra obra vial fue ejemplar. Lograron optimizar tiempos y costos manteniendo la calidad exigida.",
            author: "Ing. Alberto Gómez",
            company: "Vialidad Provincial",
          },
        },
      },
    ],
  },
];

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Urbanización Altos del Valle",
    category: "Desarrollo Urbano",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Proyecto integral de urbanización con más de 200 lotes y completa infraestructura de servicios.",
    services: [
      "Relevamiento Planialtimétrico",
      "Desarrollo Integral de Urbanizaciones",
      "Estudios Hidrológicos",
    ],
  },
  {
    id: 2,
    title: "Puente sobre Río Grande",
    category: "Infraestructura Vial",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Replanteo y control topográfico para la construcción de un puente de 120 metros de longitud.",
    services: [
      "Nivelación Geométrica",
      "Replanteo de Obras Especiales",
      "Cálculos Estructurales",
    ],
  },
  {
    id: 3,
    title: "Sistema de Riego Viñedos La Cumbre",
    category: "Agricultura",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Diseño e implementación de sistema de riego por goteo para 150 hectáreas de viñedos en terreno montañoso.",
    services: [
      "Proyectos de Aterrazamientos",
      "Diseño de Sistemas de Riego",
      "Relevamiento Planialtimétrico",
    ],
  },
];

// FAQ data
const faqItems = [
  {
    question: "¿Qué tecnología utilizan para los relevamientos topográficos?",
    answer:
      "Utilizamos equipos de última generación como estaciones totales robóticas Leica TS16 y sistemas GPS RTK GS18T que nos permiten obtener precisiones milimétricas. Complementamos estos equipos con drones equipados con cámaras de alta resolución para generar modelos 3D y ortofotografías de gran precisión.",
  },
  {
    question: "¿Cuánto tiempo toma completar un proyecto de desarrollo urbano?",
    answer:
      "El tiempo varía según la complejidad y tamaño del proyecto. Un desarrollo urbano típico puede tomar entre 6 y 18 meses desde la concepción hasta la entrega final. Realizamos una planificación detallada al inicio del proyecto para establecer plazos realistas y cumplibles.",
  },
  {
    question: "¿Trabajan en todo el país o solo en ciertas regiones?",
    answer:
      "Tenemos capacidad para trabajar en todo el territorio nacional. Contamos con equipos móviles que pueden desplazarse a cualquier punto del país. Para proyectos internacionales, evaluamos caso por caso según la envergadura y características específicas.",
  },
  {
    question: "¿Qué garantías ofrecen sobre sus servicios?",
    answer:
      "Todos nuestros trabajos cuentan con garantía técnica y profesional. Estamos respaldados por más de 50 años de experiencia y contamos con seguros de responsabilidad civil profesional. Además, nuestros profesionales están matriculados en los colegios correspondientes y todos nuestros proyectos cumplen con las normativas vigentes.",
  },
  {
    question: "¿Cómo se establece el presupuesto para un proyecto?",
    answer:
      "Realizamos un análisis detallado de los requerimientos específicos de cada proyecto para elaborar un presupuesto personalizado. Consideramos factores como la complejidad técnica, ubicación geográfica, plazos requeridos y recursos necesarios. Ofrecemos presupuestos transparentes con desglose detallado de costos.",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote:
      "La precisión y profesionalismo demostrados en el relevamiento topográfico fueron excepcionales. Definitivamente volveremos a trabajar con ellos.",
    author: "Ing. Roberto Fernández",
    company: "Constructora del Norte",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Su capacidad para resolver problemas complejos en terrenos difíciles marcó la diferencia en nuestro proyecto de urbanización.",
    author: "Arq. María González",
    company: "Desarrollos Urbanos S.A.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "El sistema de riego diseñado superó nuestras expectativas, logrando una eficiencia hídrica que ha mejorado significativamente nuestra producción.",
    author: "Ing. Agr. Carlos Mendoza",
    company: "Finca Los Nogales",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
];

// Service comparison data
const serviceComparison = [
  {
    service: "Relevamiento Planialtimétrico",
    traditional: "Precisión limitada, tiempo prolongado",
    ourApproach: "Precisión milimétrica, tecnología avanzada",
    benefit: "Mayor exactitud, resultados más rápidos",
  },
  {
    service: "Desarrollo de Urbanizaciones",
    traditional: "Enfoque fragmentado, coordinación compleja",
    ourApproach: "Solución integral, gestión unificada",
    benefit: "Optimización de recursos, reducción de plazos",
  },
  {
    service: "Estudios Hidrológicos",
    traditional: "Modelos simplificados, datos limitados",
    ourApproach: "Modelado avanzado, datos de alta resolución",
    benefit: "Mayor precisión en predicciones, diseños optimizados",
  },
  {
    service: "Movimiento de Suelos",
    traditional: "Control manual, mediciones aproximadas",
    ourApproach: "Control GPS, verificación con drones",
    benefit: "Exactitud en volúmenes, optimización de costos",
  },
];

export default function ServicesPage() {
  interface ServiceDetails {
    features: string[];
    applications: string[];
    methodology: string;
    testimonial?: {
      quote: string;
      author: string;
      company: string;
    };
  }

  interface Service {
    id: string;
    icon: JSX.Element;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    rating: number;
    completedProjects: number;
    details: ServiceDetails;
  }

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("servicios");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedAppointmentService, setSelectedAppointmentService] =
      useState<Service | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const allServices = serviceCategories.flatMap(
    (category) => category.services
  );

  const filteredServices =
    activeCategory === "Todos"
      ? allServices
      : serviceCategories.find((cat) => cat.name === activeCategory)
          ?.services || [];

  const searchFilteredServices = searchQuery
    ? filteredServices.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredServices;

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const openAppointmentModal = (service: Service) => {
    setSelectedAppointmentService(service);
    setShowAppointmentModal(true);
  };

  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-vercel-950 to-vercel-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-vercel-950 to-transparent z-10" />
        <div className="absolute inset-0">
          <Image
            src="/agrimensura.jpg?height=800&width=1600"
            alt="Servicios profesionales"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              Servicios Profesionales de Excelencia
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight leading-tight">
              Soluciones Técnicas
              <br />
              Integrales y Precisas
            </h1>

            <p className="text-vercel-300 text-xl md:text-2xl max-w-3xl leading-relaxed mb-8">
              Combinamos tecnología de vanguardia con décadas de experiencia
              para ofrecer resultados precisos y confiables en cada proyecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white"
              >
                Explorar Servicios
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-400 text-brand-300 hover:bg-brand-900/50"
              >
                Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-12">
              
              <div className="text-sm text-vercel-300">
                <span className="font-bold text-white">10</span> proyectos
                completados
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-brand-400 text-brand-400"
                    />
                  ))}
                  <span className="ml-2 text-brand-300">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-vercel-950 to-transparent" />
      </section>

      {/* Main Content */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          {/* Tabs Navigation */}
          <Tabs
            defaultValue="servicios"
            className="mb-12"
            onValueChange={setSelectedTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 p-1 bg-vercel-900 border border-vercel-800 rounded-full">
                <TabsTrigger
                  value="servicios"
                  className="rounded-full data-[state=active]:bg-brand-500 data-[state=active]:text-white"
                >
                  Servicios
                </TabsTrigger>
                <TabsTrigger
                  value="proyectos"
                  className="rounded-full data-[state=active]:bg-brand-500 data-[state=active]:text-white"
                >
                  Proyectos
                </TabsTrigger>
                <TabsTrigger
                  value="testimonios"
                  className="rounded-full data-[state=active]:bg-brand-500 data-[state=active]:text-white"
                >
                  Testimonios
                </TabsTrigger>
                <TabsTrigger
                  value="comparativa"
                  className="rounded-full data-[state=active]:bg-brand-500 data-[state=active]:text-white hidden md:block"
                >
                  Comparativa
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="rounded-full data-[state=active]:bg-brand-500 data-[state=active]:text-white hidden md:block"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Services Tab Content */}
            <TabsContent value="servicios" className="mt-0">
              {/* Encabezado */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Servicios Profesionales
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight">
                  Soluciones Técnicas Integrales
                </h2>
                <p className="text-vercel-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Combinamos tecnología de vanguardia con décadas de experiencia
                  para resultados precisos y confiables
                </p>
              </motion.div>

              {/* Search and Filter */}
              <div className="mb-10 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-vercel-400" />
                    <Input
                      placeholder="Buscar servicios..."
                      className="pl-10 bg-vercel-900 border-vercel-700 focus:border-brand-500"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full md:w-auto flex items-center justify-between gap-2 border-vercel-700"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filtrar</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Category Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-2"
              >
                <Button
                  variant={activeCategory === "Todos" ? "default" : "outline"}
                  onClick={() => setActiveCategory("Todos")}
                  className="rounded-full px-5 border-2"
                >
                  Todos los servicios
                </Button>
                {serviceCategories.map((category) => (
                  <Button
                    key={category.name}
                    variant={
                      activeCategory === category.name ? "default" : "outline"
                    }
                    onClick={() => setActiveCategory(category.name)}
                    className="rounded-full px-5 border-2 whitespace-nowrap"
                  >
                    <>{category.icon}</>
                    {category.name}
                  </Button>
                ))}
              </motion.div>

              {/* Service Categories */}
              {activeCategory === "Todos" && (
                <div className="grid gap-12 mb-16">
                  {serviceCategories.map((category, idx) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-brand-900/50 to-brand-800 text-brand-300">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {category.name}
                          </h3>
                          <p className="text-vercel-400">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.services.map((service, index) => (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative overflow-hidden rounded-2xl border border-vercel-800 bg-vercel-900 hover:border-brand-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer"
                            onClick={() => openModal(service)}
                          >
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-vercel-950 to-transparent opacity-80" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <Badge className="bg-brand-500 hover:bg-brand-600 text-white border-0">
                                  {category.name}
                                </Badge>
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-brand-900/50 to-brand-900 text-brand-300 shadow-inner">
                                  {service.icon}
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 fill-brand-400 text-brand-400" />
                                  <span className="ml-1 text-sm font-medium text-brand-300">
                                    {service.rating}
                                  </span>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-3 text-white">
                                {service.title}
                              </h3>
                              <p className="text-vercel-400 mb-5">
                                {service.shortDescription}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
                                  Explorar detalles
                                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                                <div className="text-xs text-vercel-400">
                                  {service.completedProjects} proyectos
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Service Grid */}
              {activeCategory !== "Todos" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {searchFilteredServices.length > 0 ? (
                    searchFilteredServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative overflow-hidden rounded-2xl border border-vercel-800 bg-vercel-900 hover:border-brand-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer"
                        onClick={() => openModal(service)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-vercel-950 to-transparent opacity-80" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className="bg-brand-500 hover:bg-brand-600 text-white border-0">
                              {activeCategory}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-brand-900/50 to-brand-900 text-brand-300 shadow-inner">
                              {service.icon}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-brand-400 text-brand-400" />
                              <span className="ml-1 text-sm font-medium text-brand-300">
                                {service.rating}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-white">
                            {service.title}
                          </h3>
                          <p className="text-vercel-400 mb-5">
                            {service.shortDescription}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
                              Explorar detalles
                              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                            <div className="text-xs text-vercel-400">
                              {service.completedProjects} proyectos
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center">
                      <div className="mx-auto w-16 h-16 rounded-full bg-vercel-900 flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-vercel-400" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        No se encontraron servicios
                      </h3>
                      <p className="text-vercel-400 mb-6">
                        No hay resultados que coincidan con tu búsqueda.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSearchQuery("")}
                        className="border-brand-500 text-brand-400"
                      >
                        Limpiar búsqueda
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-blue-900/30 to-brand-900/30 p-0.5 rounded-xl inline-block">
                  <Button
                    onClick={() => setShowAppointmentModal(true)}
                    className="relative overflow-hidden group rounded-xl px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl border-0"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Solicitar Análisis Personalizado
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>
                </div>
                <p className="text-sm text-vercel-400 mt-4">
                  Más de 50 proyectos ejecutados con éxito en los últimos 50
                  años
                </p>
              </motion.div>
            </TabsContent>

            {/* Projects Tab Content */}
            <TabsContent value="proyectos" className="mt-0">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm">
                  <FileCheck className="h-4 w-4 mr-2" />
                  Proyectos Destacados
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight">
                  Nuestros Casos de Éxito
                </h2>
                <p className="text-vercel-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  Conoce algunos de nuestros proyectos más destacados y cómo
                  hemos ayudado a nuestros clientes a alcanzar sus objetivos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group overflow-hidden rounded-2xl border border-vercel-800 bg-vercel-900 hover:border-brand-500 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vercel-950 via-vercel-950/70 to-transparent opacity-70" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <Badge className="bg-brand-500 hover:bg-brand-600 text-white border-0">
                          {project.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-vercel-400 text-vercel-300"
                        >
                          {project.services.length} servicios
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-vercel-400 mb-5">
                        {project.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-vercel-300">
                          Servicios aplicados:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-vercel-800 hover:bg-vercel-700 text-vercel-300"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-vercel-800">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-brand-400 hover:text-brand-300"
                        >
                          Ver detalles del proyecto
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-brand-500 text-brand-400"
                >
                  Ver todos los proyectos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Testimonials Tab Content */}
            <TabsContent value="testimonios" className="mt-0">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm">
                  <Users className="h-4 w-4 mr-2" />
                  Testimonios de Clientes
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight">
                  Lo Que Dicen Nuestros Clientes
                </h2>
                <p className="text-vercel-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  Descubre por qué nuestros clientes confían en nosotros para
                  sus proyectos más importantes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl border border-vercel-800 bg-vercel-900 p-6 shadow-md"
                  >
                    <div className="absolute top-6 right-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonial.rating
                                ? "fill-brand-400 text-brand-400"
                                : "fill-vercel-700 text-vercel-700"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mb-6 mt-4">
                      <p className="text-vercel-300 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-vercel-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-vercel-900 border border-vercel-800 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ¿Satisfecho con nuestros servicios?
                    </h3>
                    <p className="text-vercel-300 mb-6">
                      Nos encantaría conocer tu experiencia trabajando con
                      nosotros. Tu opinión nos ayuda a seguir mejorando.
                    </p>
                    <Button className="bg-brand-500 hover:bg-brand-600 text-white">
                      Dejar un testimonio
                    </Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/placeholder.svg?height=200&width=200&text=Reviews"
                        alt="Testimonios"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Comparison Tab Content */}
            <TabsContent value="comparativa" className="mt-0">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm">
                  <Award className="h-4 w-4 mr-2" />
                  Comparativa de Servicios
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight">
                  ¿Por Qué Elegirnos?
                </h2>
                <p className="text-vercel-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  Descubre cómo nuestro enfoque innovador marca la diferencia
                  frente a los métodos tradicionales
                </p>
              </div>

              <div className="overflow-x-auto mb-16">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 bg-vercel-900 text-left text-vercel-300 font-medium border-b border-vercel-800">
                        Servicio
                      </th>
                      <th className="py-4 px-6 bg-vercel-900 text-left text-vercel-300 font-medium border-b border-vercel-800">
                        Enfoque Tradicional
                      </th>
                      <th className="py-4 px-6 bg-vercel-900 text-left text-vercel-300 font-medium border-b border-vercel-800">
                        Nuestro Enfoque
                      </th>
                      <th className="py-4 px-6 bg-vercel-900 text-left text-vercel-300 font-medium border-b border-vercel-800">
                        Beneficio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceComparison.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-vercel-900" : "bg-vercel-900/50"
                        }
                      >
                        <td className="py-4 px-6 border-b border-vercel-800 text-white font-medium">
                          {item.service}
                        </td>
                        <td className="py-4 px-6 border-b border-vercel-800 text-vercel-400">
                          {item.traditional}
                        </td>
                        <td className="py-4 px-6 border-b border-vercel-800 text-brand-300">
                          {item.ourApproach}
                        </td>
                        <td className="py-4 px-6 border-b border-vercel-800 text-green-400">
                          {item.benefit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-brand-900/30 to-vercel-900 border border-vercel-800 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ¿Quieres ver la diferencia?
                    </h3>
                    <p className="text-vercel-300 mb-6">
                      Agenda una demostración personalizada y descubre cómo
                      nuestro enfoque puede optimizar tu próximo proyecto.
                    </p>
                    <Button
                      onClick={() => setShowAppointmentModal(true)}
                      className="bg-brand-500 hover:bg-brand-600 text-white"
                    >
                      Solicitar demostración
                    </Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/placeholder.svg?height=200&width=200&text=Demo"
                        alt="Demostración"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab Content */}
            <TabsContent value="faq" className="mt-0">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Preguntas Frecuentes
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight">
                  Respuestas a Tus Dudas
                </h2>
                <p className="text-vercel-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  Encuentra respuestas a las preguntas más comunes sobre
                  nuestros servicios y metodología de trabajo
                </p>
              </div>

              <div className="max-w-3xl mx-auto mb-16">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-vercel-800 rounded-lg overflow-hidden bg-vercel-900"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-vercel-800/50 text-white font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2 text-vercel-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="bg-vercel-900 border border-vercel-800 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ¿No encontraste tu respuesta?
                    </h3>
                    <p className="text-vercel-300 mb-6">
                      Nuestro equipo está listo para resolver todas tus dudas.
                      Contáctanos directamente y te responderemos a la brevedad.
                    </p>
                    <Button className="bg-brand-500 hover:bg-brand-600 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Contactar ahora
                    </Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/placeholder.svg?height=200&width=200&text=Support"
                        alt="Soporte"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {isOpen && selectedService && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-4xl p-0 bg-vercel-900 border border-vercel-800 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedService.image || "/placeholder.svg"}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vercel-950 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Badge className="mb-4 bg-brand-500 hover:bg-brand-600 text-white border-0">
                    {activeCategory === "Todos"
                      ? serviceCategories.find((cat) =>
                          cat.services.some((s) => s.id === selectedService.id)
                        )?.name
                      : activeCategory}
                  </Badge>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-lg text-vercel-300">
                    {selectedService.description}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-vercel-900/50 hover:bg-vercel-900 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              <ScrollArea className="max-h-[60vh]">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="md:w-1/2">
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-5 w-5 fill-brand-400 text-brand-400" />
                        <span className="text-lg font-medium text-white">
                          {selectedService.rating}/5
                        </span>
                        <span className="text-sm text-vercel-400">
                          ({selectedService.completedProjects} proyectos)
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                            <span>Características Técnicas</span>
                          </h4>
                          <ul className="space-y-3">
                            {selectedService.details.features.map(
                              (feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-vercel-300"
                                >
                                  <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Building2 className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                            <span>Aplicaciones Prácticas</span>
                          </h4>
                          <ul className="space-y-3">
                            {selectedService.details.applications.map(
                              (
                                app:
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactElement<
                                      unknown,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | ReactPortal
                                  | Promise<
                                      | string
                                      | number
                                      | bigint
                                      | boolean
                                      | ReactPortal
                                      | ReactElement<
                                          unknown,
                                          string | JSXElementConstructor<any>
                                        >
                                      | Iterable<ReactNode>
                                      | null
                                      | undefined
                                    >
                                  | null
                                  | undefined,
                                i: Key | null | undefined
                              ) => (
                                <li
                                  key={i}
                                  className="flex items-start text-vercel-300"
                                >
                                  <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0" />
                                  <span>{app}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Zap className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                          <span>Metodología de Trabajo</span>
                        </h4>
                        <p className="text-vercel-300">
                          {selectedService.details.methodology}
                        </p>
                      </div>

                      <div className="bg-vercel-800/50 rounded-xl p-5 border border-vercel-700">
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Beneficios Clave
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start text-vercel-300">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Precisión certificada en todos los trabajos
                            </span>
                          </li>
                          <li className="flex items-start text-vercel-300">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Equipos de última generación</span>
                          </li>
                          <li className="flex items-start text-vercel-300">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Informes detallados y personalizados</span>
                          </li>
                          <li className="flex items-start text-vercel-300">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Cumplimiento de normativas vigentes</span>
                          </li>
                        </ul>
                      </div>

                      {selectedService.details.testimonial && (
                        <div className="bg-brand-900/20 rounded-xl p-5 border border-brand-800/50">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Users className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                            <span>Testimonio de Cliente</span>
                          </h4>
                          <p className="text-vercel-300 italic mb-4">
                            "{selectedService.details.testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <div className="mr-3 h-10 w-10 rounded-full bg-brand-800 flex items-center justify-center text-brand-300 font-bold">
                              {selectedService.details.testimonial.author.charAt(
                                0
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-white">
                                {selectedService.details.testimonial.author}
                              </p>
                              <p className="text-sm text-vercel-400">
                                {selectedService.details.testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-vercel-900 border-vercel-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-brand-900/50 text-brand-300">
                            <Clock className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                              Tiempo de Ejecución
                            </h4>
                            <p className="text-sm text-vercel-400">
                              Varía según complejidad
                            </p>
                          </div>
                        </div>
                        <p className="text-vercel-300 text-sm">
                          Desde 1 semana para proyectos pequeños hasta 3 meses
                          para proyectos complejos.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-vercel-900 border-vercel-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-brand-900/50 text-brand-300">
                            <Award className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Garantía</h4>
                            <p className="text-sm text-vercel-400">
                              Respaldo profesional
                            </p>
                          </div>
                        </div>
                        <p className="text-vercel-300 text-sm">
                          Todos nuestros trabajos cuentan con garantía técnica y
                          seguro de responsabilidad civil.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-vercel-900 border-vercel-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-brand-900/50 text-brand-300">
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Equipo</h4>
                            <p className="text-sm text-vercel-400">
                              Profesionales especializados
                            </p>
                          </div>
                        </div>
                        <p className="text-vercel-300 text-sm">
                          Ingenieros y técnicos con más de 15 años de
                          experiencia en el sector.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollArea>

              <DialogFooter className="p-6 border-t border-vercel-800 bg-vercel-900/80 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button
                    onClick={() => {
                      closeModal();
                      openAppointmentModal(selectedService);
                    }}
                    className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white py-6 text-base"
                  >
                    Solicitar este servicio
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 border-vercel-300 hover:bg-vercel-800 py-6 text-base"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Contactar ahora
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Habla directamente con un especialista</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <Dialog
        open={showAppointmentModal}
        onOpenChange={setShowAppointmentModal}
      >
        <DialogContent className="max-w-md bg-vercel-900 border border-vercel-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Solicitar Servicio
            </DialogTitle>
            <DialogDescription className="text-vercel-300">
              {selectedAppointmentService
                ? `Complete el formulario para solicitar el servicio de ${selectedAppointmentService.title}`
                : "Complete el formulario para solicitar una consulta personalizada"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-vercel-300">
                  Nombre
                </Label>
                <Input
                  id="first-name"
                  placeholder="Juan"
                  className="bg-vercel-900 border-vercel-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-vercel-300">
                  Apellido
                </Label>
                <Input
                  id="last-name"
                  placeholder="Pérez"
                  className="bg-vercel-900 border-vercel-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-vercel-300">
                Email
              </Label>
              <Input
                id="email"
                placeholder="juan@ejemplo.com"
                className="bg-vercel-900 border-vercel-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-vercel-300">
                Teléfono
              </Label>
              <Input
                id="phone"
                placeholder="+54 9 11 1234-5678"
                className="bg-vercel-900 border-vercel-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-vercel-300">
                Servicio
              </Label>
              <Select defaultValue={selectedAppointmentService?.id || ""}>
                <SelectTrigger className="bg-vercel-900 border-vercel-700">
                  <SelectValue placeholder="Seleccione un servicio" />
                </SelectTrigger>
                <SelectContent className="bg-vercel-900 border-vercel-700">
                  {serviceCategories.map((category) => (
                    <div key={category.id}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-vercel-400">
                        {category.name}
                      </div>
                      {category.services.map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.id}
                          className="text-white"
                        >
                          {service.title}
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-vercel-300">
                Fecha preferida
              </Label>
              <div className="flex gap-4">
                <Input
                  id="date"
                  type="date"
                  className="bg-vercel-900 border-vercel-700"
                />
                <Input
                  id="time"
                  type="time"
                  className="bg-vercel-900 border-vercel-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-vercel-300">
                Mensaje
              </Label>
              <textarea
                id="message"
                rows={3}
                placeholder="Detalles adicionales sobre su proyecto..."
                className="w-full rounded-md border border-vercel-700 bg-vercel-900 p-3 text-sm text-white placeholder:text-vercel-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAppointmentModal(false)}
            >
              Cancelar
            </Button>
            <Button className="bg-brand-500 hover:bg-brand-600 text-white">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Consulta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

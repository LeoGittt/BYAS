"use client";

import { useState, useRef, SetStateAction, useMemo } from "react";
import {
  MapPin,
  ArrowRight,
  Search,
  X,
  ChevronDown,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// Project data based on the provided information
const projects = [
  {
    id: "autopista-mesopotamica-tramo-3",
    title: "Autopista Mesopotámica - Tramo III",
    description:
      "Relevamiento planialtimétrico completo para 71km de autopista en Entre Ríos.",
    location: "Colón y Concordia, Entre Ríos",
    year: "2005-2006",
    client: "CADIA S.A.",
    category: "rutas",
    details: {
      length: "71 kilómetros",
      technology: "Estación total Leica TC805",
      scope: "Relevamiento de traza completa y áreas adyacentes",
      features: [
        "Levantamiento planialtimétrico detallado",
        "Modelado digital del terreno",
        "Replanteo de ejes y puntos de control",
        "Coordinación con equipos de ingeniería civil",
      ],
    },
  },
  {
    id: "autopista-mesopotamica-tramo-4",
    title: "Autopista Mesopotámica - Tramo IV",
    description: "Trabajos topográficos para 33km de autopista en Concordia.",
    location: "Concordia, Entre Ríos",
    year: "2005-2006",
    client: "ATEC S.A.",
    category: "rutas",
    details: {
      length: "33 kilómetros",
      technology: "GPS diferencial y estación total",
      scope: "Mensuras de áreas de afectación",
      features: [
        "59 mensuras catastrales",
        "Delimitación de servidumbres",
        "Coordinación con propietarios",
        "Documentación legal y técnica",
      ],
    },
  },
  {
    id: "ruta-nacional-8-tramo-5",
    title: "Ruta Nacional Nº 8 - Tramo V",
    description: "Relevamiento para rediseño de 35km de ruta nacional.",
    location: "Arrecifes y Pergamino, Buenos Aires",
    year: "2005",
    client: "CADIA S.A.",
    category: "rutas",
    details: {
      length: "35 kilómetros",
      technology: "Sistema de posicionamiento RTK",
      scope: "Traza nueva con optimización de recorrido",
      features: [
        "Estudio de alternativas de traza",
        "Análisis de curvas verticales y horizontales",
        "Coordinación con Dirección Nacional de Vialidad",
        "Documentación para licitación",
      ],
    },
  },
  {
    id: "enlace-vial-victoria-rosario",
    title: "Enlace Vial Victoria-Rosario",
    description: "Replanteo del Distribuidor Norte y mensuras de afectación.",
    location: "Victoria, Entre Ríos",
    year: "2005-2006",
    client: "Dirección Provincial de Vialidad",
    category: "puentes",
    details: {
      mensuras: "27 propiedades",
      technology: "Sistema GIS integrado",
      scope: "Registro catastral completo",
      features: [
        "Replanteo geométrico preciso",
        "Coordinación interdisciplinaria",
        "Solución de conflictos de servidumbre",
        "Documentación legal para expropiaciones",
      ],
    },
  },
  {
    id: "mensuras-areas-afectacion-autopista",
    title: "Mensuras de Áreas de Afectación - Autopista Mesopotámica",
    description:
      "59 mensuras para áreas afectadas por la construcción de la autopista.",
    location: "Colón y Concordia, Entre Ríos",
    year: "2005-2006",
    client: "CADIA S.A.",
    category: "mensuras",
    details: {
      quantity: "59 mensuras",
      technology: "Estación total y GPS diferencial",
      scope: "Registro catastral de áreas afectadas",
      features: [
        "Delimitación precisa de áreas afectadas",
        "Documentación legal para expropiaciones",
        "Coordinación con autoridades catastrales",
        "Gestión de servidumbres administrativas",
      ],
    },
  },
  {
    id: "asesoramiento-caminos-rio-uruguay",
    title: "Asesoramiento Caminos del Río Uruguay S.A.",
    description:
      "Tareas topográficas de relevamiento y replanteo de obras en rutas nacionales.",
    location: "Buenos Aires, Entre Ríos y Corrientes",
    year: "2002-2006",
    client: "Caminos del Río Uruguay S.A.",
    category: "asesoramiento",
    details: {
      routes: "Rutas Nacionales 12 y 14",
      technology: "Sistemas topográficos avanzados",
      scope: "Asesoramiento técnico y supervisión",
      features: [
        "Relevamiento de obras existentes",
        "Replanteo de nuevas obras",
        "Supervisión técnica",
        "Documentación de control",
      ],
    },
  },
  {
    id: "mensura-planta-urbana-ceibas",
    title: "Mensura Planta Urbana Ceibas",
    description:
      "Mensura completa de la planta urbana de la localidad de Ceibas.",
    location: "Ceibas, Entre Ríos",
    year: "2003",
    client: "Superior Gobierno de la Provincia de Entre Ríos",
    category: "urbanizacion",
    details: {
      area: "241.312,10 m²",
      technology: "Estación total y GPS",
      scope: "Planificación urbana y catastro",
      features: [
        "Delimitación de manzanas y calles",
        "Registro catastral completo",
        "Planificación de espacios públicos",
        "Documentación para desarrollo urbano",
      ],
    },
  },
  {
    id: "relevamiento-yacireta-fatima",
    title: "Relevamiento Área Yacyretá - Conjunto Virgen de Fátima",
    description:
      "Relevamiento planialtimétrico para asentamiento de 1057 viviendas.",
    location: "Posadas, Misiones",
    year: "2002",
    client: "HARZA S.A. - Ente Binacional Yacyretá",
    category: "urbanizacion",
    details: {
      housing: "1057 viviendas",
      technology: "Estación total y GPS diferencial",
      scope: "Plan Estratégico YACYRETÁ 2002",
      features: [
        "Relevamiento topográfico detallado",
        "Planificación de infraestructura",
        "Delimitación de lotes",
        "Coordinación con equipos de arquitectura",
      ],
    },
  },
  {
    id: "gasoducto-centro-oeste",
    title: "Mensuras para el Gasoducto Centro Oeste",
    description:
      "Mensuras para la construcción del gasoducto en San Luis y Mendoza.",
    location: "La Toma - Beazley (San Luis), Beazley - La Dormida (Mendoza)",
    year: "2001",
    client: "Transportadora de Gas del Norte S.A.",
    category: "gasoductos",
    details: {
      length: "80 kilómetros",
      mensuras: "25 propiedades",
      technology: "GPS y estación total",
      scope: "Servidumbres administrativas para gasoducto",
      features: [
        "Delimitación de áreas de servidumbre",
        "Coordinación con propietarios",
        "Documentación legal",
        "Registro catastral",
      ],
    },
  },
  {
    id: "mensuras-tierras-fiscales-campana",
    title: "Mensuras de Tierras Fiscales Campana",
    description: "Mensura de tierras fiscales en el partido de Campana.",
    location: "Campana, Buenos Aires",
    year: "2001",
    client: "SATELY S.A.",
    category: "mensuras",
    details: {
      area: "1759 hectáreas",
      technology: "GPS diferencial",
      scope: "Registro catastral de tierras fiscales",
      features: [
        "Delimitación de parcelas",
        "Documentación legal",
        "Coordinación con autoridades",
        "Registro en catastro provincial",
      ],
    },
  },
  {
    id: "gasoducto-centro-oeste-completo",
    title: "Gasoducto Centro-Oeste Completo",
    description:
      "Cálculo de indemnizaciones y gestión de servidumbres para 730km de gasoducto.",
    location: "Loma de La Lata (Neuquén) - San Jerónimo (Santa Fe)",
    year: "2000-2001",
    client: "Transportadora de Gas del Norte S.A.",
    category: "gasoductos",
    details: {
      length: "730 kilómetros",
      servidumbres: "836 propiedades",
      technology: "Sistema GIS integrado",
      scope: "Gestión completa de servidumbres",
      features: [
        "Cálculo de indemnizaciones",
        "Arreglo con propietarios afectados",
        "Firma de convenios de servidumbre",
        "Registro gráfico del desarrollo de la traza",
        "Inscripción en registros públicos",
      ],
    },
  },
  {
    id: "sistema-transmision-salto-grande",
    title: "Sistema de Transmisión de Salto Grande",
    description:
      "Relevamiento topográfico para sistema de transmisión de 500kV.",
    location: "Entre Ríos",
    year: "1976-1977",
    client: "Comisión Técnica Mixta de Salto Grande",
    category: "electricidad",
    details: {
      length: "263 kilómetros",
      technology: "Equipos topográficos de precisión",
      scope: "Replanteo y relevamiento de línea de alta tensión",
      features: [
        "Replanteo de línea en base a vértices amojonados",
        "Relevamiento planialtimétrico de faja de 200m",
        "Perfil longitudinal del eje incluyendo batimetría",
        "Cálculo de coordenadas Gauss-Kruger",
      ],
    },
  },
];

// Categories for filtering
const categories = [
  { id: "all", label: "Todos" },
  { id: "rutas", label: "Rutas y Autopistas" },
  { id: "puentes", label: "Puentes" },
  { id: "gasoductos", label: "Gasoductos" },
  { id: "electricidad", label: "Líneas Eléctricas" },
  { id: "mensuras", label: "Mensuras" },
  { id: "urbanizacion", label: "Urbanización" },
  { id: "asesoramiento", label: "Asesoramiento" },
];

// Project Card Component
const ProjectCard = ({ project, onClick }: { project: typeof projects[number]; onClick: (project: typeof projects[number]) => void }) => {
  return (
    <Card
      className="h-full border-gray-800 bg-gray-900 hover:border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
      onClick={() => onClick(project)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge
            variant="outline"
            className="text-xs font-normal border-gray-700 text-gray-300"
          >
            {project.year}
          </Badge>
          <Badge
            variant="secondary"
            className="text-xs font-normal bg-brand-900/30 text-brand-300 border-brand-800/50"
          >
            {categories.find((c) => c.id === project.category)?.label || "Otro"}
          </Badge>
        </div>

        <h3 className="text-lg font-medium mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center text-xs text-gray-500 mb-3">
          <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
          <span className="truncate">{project.location}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{project.client}</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-brand-400 hover:text-brand-300 p-0 h-8"
          >
            Ver detalles
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// List Item Component
const ProjectListItem = ({ project, onClick }: { project: typeof projects[number]; onClick: (project: typeof projects[number]) => void }) => {
  return (
    <div
      className="border border-gray-800 bg-gray-900 rounded-md p-4 hover:border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Badge
              variant="outline"
              className="text-xs font-normal border-gray-700 text-gray-300"
            >
              {project.year}
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs font-normal bg-brand-900/30 text-brand-300 border-brand-800/50"
            >
              {categories.find((c) => c.id === project.category)?.label ||
                "Otro"}
            </Badge>
          </div>

          <h3 className="text-lg font-medium mb-1 text-white">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{project.description}</p>

          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <span className="text-xs text-gray-500">{project.client}</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-brand-400 hover:text-brand-300 p-0 h-8"
          >
            Ver detalles
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main component
const ProjectsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  type Project = typeof projects[number];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const headerRef = useRef(null);

  // Evitamos el uso de datos dinámicos como `Date.now()` o `Math.random()` en la renderización inicial
  const initialProjects = useMemo(() => projects, []);

  // Filter projects based on search and category
  const filteredProjects = initialProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle project click to open dialog
  const handleProjectClick = (project: SetStateAction<{ id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { length: string; technology: string; scope: string; features: string[]; mensuras?: undefined; quantity?: undefined; routes?: undefined; area?: undefined; housing?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { mensuras: string; technology: string; scope: string; features: string[]; length?: undefined; quantity?: undefined; routes?: undefined; area?: undefined; housing?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { quantity: string; technology: string; scope: string; features: string[]; length?: undefined; mensuras?: undefined; routes?: undefined; area?: undefined; housing?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { routes: string; technology: string; scope: string; features: string[]; length?: undefined; mensuras?: undefined; quantity?: undefined; area?: undefined; housing?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { area: string; technology: string; scope: string; features: string[]; length?: undefined; mensuras?: undefined; quantity?: undefined; routes?: undefined; housing?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { housing: string; technology: string; scope: string; features: string[]; length?: undefined; mensuras?: undefined; quantity?: undefined; routes?: undefined; area?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { length: string; mensuras: string; technology: string; scope: string; features: string[]; quantity?: undefined; routes?: undefined; area?: undefined; housing?: undefined; servidumbres?: undefined; }; } | { id: string; title: string; description: string; location: string; year: string; client: string; category: string; details: { length: string; servidumbres: string; technology: string; scope: string; features: string[]; mensuras?: undefined; quantity?: undefined; routes?: undefined; area?: undefined; housing?: undefined; }; } | null>) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section
      id="proyectos"
      className="bg-gray-950 py-12 sm:py-16"
      aria-labelledby="projects-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/topo-pattern-dark.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header section */}
        <div className="mb-8 sm:mb-12">
          <div ref={headerRef} className="max-w-3xl mx-auto text-center">
            <h1
              id="projects-heading"
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-200">
                Proyectos de Infraestructura
              </span>{" "}
              a Nivel Nacional
            </h1>

            <p className="text-gray-400 mb-8">
              Más de 20 años participando en obras estratégicas con precisión
              topográfica y excelencia técnica
            </p>

            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Buscar proyectos..."
                  className="pl-9 bg-gray-900/70 border-gray-800 text-white placeholder:text-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-gray-900/70 border-gray-800 text-white hover:bg-gray-800"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {categories.find((c) => c.id === selectedCategory)?.label ||
                      "Filtrar"}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-800 text-white">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category.id}
                      className={`${
                        selectedCategory === category.id
                          ? "bg-brand-900/30 text-brand-300"
                          : ""
                      } hover:bg-gray-800 cursor-pointer`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="mb-12">
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-900/50 border border-gray-800">
                <TabsTrigger
                  value="grid"
                  className="data-[state=active]:bg-brand-900/30 data-[state=active]:text-brand-300"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                    Cuadrícula
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="list"
                  className="data-[state=active]:bg-brand-900/30 data-[state=active]:text-brand-300"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    Lista
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Grid view */}
            <TabsContent value="grid" className="mt-0">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={handleProjectClick}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">
                    No se encontraron proyectos que coincidan con tu búsqueda.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-800 text-brand-400 hover:text-brand-300"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* List view */}
            <TabsContent value="list" className="mt-0">
              {filteredProjects.length > 0 ? (
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <ProjectListItem
                      key={project.id}
                      project={project}
                      onClick={handleProjectClick}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">
                    No se encontraron proyectos que coincidan con tu búsqueda.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-800 text-brand-400 hover:text-brand-300"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            ¿Necesita un proyecto similar?
          </h2>
          <p className="text-gray-400 mb-6">
            Nuestro equipo de expertos está listo para ayudarte con tu próximo
            proyecto de infraestructura.
          </p>
          <Button
            asChild
            className="bg-brand-600 hover:bg-brand-500 text-white"
          >
            <Link href="#contacto">
              Contáctanos ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Project detail dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl max-h-[90vh]">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="overflow-auto pr-6 -mr-6 max-h-[60vh] py-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300"
                  >
                    {selectedProject.year}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-brand-900/30 text-brand-300 border-brand-800/50"
                  >
                    {categories.find((c) => c.id === selectedProject.category)
                      ?.label || "Otro"}
                  </Badge>
                </div>

                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-white mb-1">Ubicación</h4>
                    <p className="text-gray-400">{selectedProject.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Cliente</h4>
                    <p className="text-gray-400">{selectedProject.client}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">
                    Detalles del Proyecto
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-800/50 p-4 rounded-md">
                    {selectedProject.details.technology && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">TECNOLOGÍA</p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.technology}
                        </p>
                      </div>
                    )}
                    {selectedProject.details.scope && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">ALCANCE</p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.scope}
                        </p>
                      </div>
                    )}
                    {selectedProject.details.length && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">LONGITUD</p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.length}
                        </p>
                      </div>
                    )}
                    {selectedProject.details.mensuras && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">MENSURAS</p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.mensuras}
                        </p>
                      </div>
                    )}
                    {selectedProject.details.servidumbres && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          SERVIDUMBRES
                        </p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.servidumbres}
                        </p>
                      </div>
                    )}
                    {selectedProject.details.area && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">ÁREA</p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.area}
                        </p>
                      </div>
                    )}
                    {selectedProject.details.housing && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">VIVIENDAS</p>
                        <p className="text-sm text-gray-300">
                          {selectedProject.details.housing}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {selectedProject.details.features &&
                  selectedProject.details.features.length > 0 && (
                    <div>
                      <h4 className="font-medium text-white mb-2">
                        Características
                      </h4>
                      <ul className="space-y-1 bg-gray-800/50 p-4 rounded-md">
                        {selectedProject.details.features.map(
                          (feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-1 h-1 rounded-full bg-brand-500 mt-[7px] mr-2"></span>
                              <span className="text-sm text-gray-300">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cerrar
                </Button>
                
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsShowcase;

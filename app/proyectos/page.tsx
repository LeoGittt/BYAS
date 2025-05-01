"use client";

import { useState, useRef } from "react";
import { MapPin, Building2, Ruler, X, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

const trabajos = [
  {
    tipo: "RELEVAMIENTO PLANIALTIMETRICO",
    descripcion: "Ruta Nacional Nº 14 – Autopista Mesopotámica Tramo IV",
    longitud: "33 Km",
    ubicacion: "Provincia de Entre Ríos, Departamento: Concordia",
    comitente: "ATEC S.A.",
    años: "2005 - 2006",
  },
  {
    tipo: "RELEVAMIENTO PLANIALTIMETRICO",
    descripcion: "Ruta Nacional Nº 8 – Traza Nueva - Tramo V",
    longitud: "35 Km",
    ubicacion: "Provincia de Buenos Aires, Partidos de Arrecifes y Pergamino",
    comitente: "CADIA S.A.",
    años: "2005",
  },
  {
    tipo: "MENSURAS DE AREAS DE AFECTACIÓN",
    descripcion: "Ruta Nacional Nº 14 – Autopista Mesopotámica Tramos III y IV",
    cantidadMensuras: 59,
    ubicacion: "Provincia de Entre Ríos, Departamentos Colon y Concordia",
    años: "2005-2006",
  },
  {
    tipo: "MENSURAS DE AREAS DE AFECTACIÓN",
    descripcion:
      "Enlace Vial Victoria – Rosario, Replanteo del Distribuidor Norte",
    cantidadMensuras: 27,
    ubicacion: "Provincia de Entre Ríos, Departamento Victoria",
    comitente: "Dirección Provincial de Vialidad",
    años: "2005 – 2006",
  },
  {
    tipo: "ASESORAMIENTO",
    descripcion: "Contrato con Caminos del Río Uruguay S.A.",
    tareas: "Relevamiento y replanteo de obras en Rutas Nacionales 12 y 14",
    ubicacion: "Provincias de Buenos Aires, Entre Ríos y Corrientes",
    años: "2002 a 2006",
  },
  {
    tipo: "MENSURA",
    descripcion: "Planta Urbana Localidad de Ceibas",
    superficie: "241.312,10 m2",
    comitente: "Superior Gobierno de la Provincia de Entre Ríos",
    años: "2003",
  },
  {
    tipo: "RELEVAMIENTO PLANIALTIMETRICO",
    descripcion: "Área Yaciretá - Conjunto Habitacional 'Virgen de Fátima'",
    cantidadViviendas: 1057,
    ubicacion: "Ciudad de Posadas",
    comitente: "HARZA S.A. - Ente Binacional Yacireta",
    años: "2002",
  },
  {
    tipo: "MENSURAS",
    descripcion: "Gasoducto Centro Oeste – San Luis y Mendoza",
    longitud: "80 Km",
    cantidadMensuras: 25,
    ubicacion: "San Luis: La Toma - Beazley, Mendoza: Beazley – La Dormida",
    comitente: "Transportadora de Gas del Norte S.A.",
    años: "2001",
  },
  {
    tipo: "MENSURAS DE TIERRAS FISCALES",
    descripcion: "Campana",
    superficie: "1759 Hs",
    ubicacion: "Provincia de Buenos Aires, Partido de Campana",
    comitente: "SATELY S.A.",
    años: "2001",
  },
  {
    tipo: "TRABAJOS GASODUCTO CENTRO – OESTE",
    descripcion: "Loma de La Lata – San Jerónimo",
    longitud: "730 Km",
    cantidad: 836,
    comitente: "Transportadora de Gas del Norte S.A.",
    tareas: [
      "Cálculo de indemnizaciones",
      "Arreglo con propietarios",
      "Firma de convenios",
      "Registro gráfico",
      "Archivo de mensuras",
      "Presentación a registros",
    ],
    años: "2000-2001",
  },
  {
    tipo: "RELEVAMIENTO TOPOGRÁFICO",
    descripcion: "Sistema de Transmisión Salto Grande - 500 Kv",
    tramos: [
      { tramo: "II", longitud: "123 Km" },
      { tramo: "III", longitud: "60 Km" },
      { tramo: "IV", longitud: "80 Km" },
    ],
    ubicacion: "Entre Ríos",
    comitente: "Comisión Técnica Mixta de Salto Grande",
    años: "1976 - 1977",
  },
  {
    tipo: "MENSURAS Y AMOJONAMIENTO",
    descripcion: "Línea de Alta Tensión de Salto Grande - 500 Kv",
    longitud: "166 Km",
    parcelasAfectadas: 145,
    ubicacion: "Entre Ríos, Depts. Uruguay, Gualeguaychú, Islas del Ibicuy",
    comitente: "Comisión Técnica Mixta de Salto Grande",
    año: "1978",
  },
  {
    tipo: "RELEVAMIENTO TOPOGRÁFICO",
    descripcion:
      "Sistema de Transmisión Piedra del Águila – Choele-Choel – Bahía Blanca",
    longitud: "350 Km",
    comitente: "SAIER S.R.L.",
    años: "1987",
  },
  {
    tipo: "RELEVAMIENTO PLANIALTIMÉTRICO",
    descripcion:
      "Sistema de Transmisión 500kV. San Antonio Oeste - Puerto Madryn",
    longitud: "250 Km",
    comitente: "IATASA",
    años: "1988 - 1989",
  },
  {
    tipo: "RELEVAMIENTO TOPOGRÁFICO",
    descripcion: "Sistema de Transmisión Yacyretá – Garabí – La Cruz 500kV",
    tramos: [
      { nombre: "Resistencia - Charata", longitud: "223 Km" },
      { nombre: "Colonia Elía - Gral. Rodríguez", longitud: "240 Km" },
      { nombre: "Salto Grande - Colonia Elía", longitud: "180 Km" },
    ],
    comitente: "Consorcio IGTMA",
    años: "1989-1990",
  },
  {
    tipo: "RELEVAMIENTO TOPOGRÁFICO",
    descripcion: "Sistema de Transmisión de Yacyretá - Tramos Varios - 500kV",
    comitente: "LITSA (Líneas de Transmisión del Litoral S.A.)",
    años: "No especificado",
  },
];

const tipoIconos = {
  "RELEVAMIENTO PLANIALTIMETRICO": <Ruler className="h-6 w-6" />,
  "MENSURAS DE AREAS DE AFECTACIÓN": <MapPin className="h-6 w-6" />,
  ASESORAMIENTO: <Building2 className="h-6 w-6" />,
  MENSURA: <MapPin className="h-6 w-6" />,
  MENSURAS: <MapPin className="h-6 w-6" />,
  "MENSURAS DE TIERRAS FISCALES": <MapPin className="h-6 w-6" />,
  "TRABAJOS GASODUCTO CENTRO – OESTE": <Building2 className="h-6 w-6" />,
  "RELEVAMIENTO TOPOGRÁFICO": <Ruler className="h-6 w-6" />,
  "MENSURAS Y AMOJONAMIENTO": <MapPin className="h-6 w-6" />,
  "RELEVAMIENTO PLANIALTIMÉTRICO": <Ruler className="h-6 w-6" />,
};

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const tiposUnicos = [
    "Todos",
    ...Array.from(new Set(trabajos.map((t) => t.tipo))),
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? trabajos
      : trabajos.filter((proj) => proj.tipo === activeFilter);

  return (
    <section id="proyectos" className="py-28 bg-gradient-to-b from-vercel-950 to-vercel-900">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50">
            <Building2 className="h-4 w-4 mr-2" />
            Portafolio de Proyectos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300">
            Nuestra Experiencia en Acción
          </h2>
          <p className="text-vercel-300 text-lg md:text-xl max-w-3xl mx-auto">
            Más de 50 años de proyectos ejecutados con excelencia técnica y compromiso profesional
          </p>
        </div>

        {/* Filtros por tipo */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto py-2">
          {tiposUnicos.map((tipo) => (
            <Button
              key={tipo}
              variant={activeFilter === tipo ? "default" : "outline"}
              onClick={() => setActiveFilter(tipo)}
              className="rounded-full px-5 border-2 whitespace-nowrap"
            >
              {tipo}
            </Button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proyecto, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-vercel-800 bg-vercel-900 hover:border-brand-500 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(proyecto)}
            >
              <div className="p-7">
                <div className="mb-5 p-3 rounded-xl inline-flex bg-gradient-to-br from-brand-900/50 to-brand-900 text-brand-300">
                  {tipoIconos[proyecto.tipo as keyof typeof tipoIconos]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {proyecto.descripcion}
                </h3>
                <div className="space-y-2 text-vercel-400 mb-5">
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {proyecto.ubicacion}
                  </p>
                  <p className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    {proyecto.comitente}
                  </p>
                  <p>{proyecto.años}</p>
                </div>
                <div className="flex items-center text-sm font-medium text-brand-400">
                  Ver detalles
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Proyecto */}
        {isOpen && selectedProject && (
          <Dialog
            static
            as="div"
            open={isOpen}
            onClose={closeModal}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <div className="fixed inset-0 bg-black/50" />

              <div className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-vercel-900 text-left align-middle shadow-xl border border-vercel-800">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-vercel-800"
                  aria-label="Cerrar modal"
                >
                  <X className="h-5 w-5 text-vercel-400" />
                </button>

                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-brand-900/50 to-brand-800 text-brand-300">
                      {
                        tipoIconos[
                          selectedProject.tipo as keyof typeof tipoIconos
                        ]
                      }
                    </div>
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-white">
                        {selectedProject.descripcion}
                      </Dialog.Title>
                      <p className="text-lg text-brand-300 mt-1">
                        {selectedProject.tipo}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-10 md:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <MapPin className="h-5 w-5 text-brand-500 mr-2" />
                          <span>Ubicación</span>
                        </h4>
                        <p className="text-vercel-300 pl-7">
                          {selectedProject.ubicacion}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Building2 className="h-5 w-5 text-brand-500 mr-2" />
                          <span>Comitente</span>
                        </h4>
                        <p className="text-vercel-300 pl-7">
                          {selectedProject.comitente}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Check className="h-5 w-5 text-brand-500 mr-2" />
                          <span>Periodo de ejecución</span>
                        </h4>
                        <p className="text-vercel-300 pl-7">
                          {selectedProject.años}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {selectedProject.longitud && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Ruler className="h-5 w-5 text-brand-500 mr-2" />
                            <span>Longitud</span>
                          </h4>
                          <p className="text-vercel-300 pl-7">
                            {selectedProject.longitud}
                          </p>
                        </div>
                      )}

                      {selectedProject.superficie && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Ruler className="h-5 w-5 text-brand-500 mr-2" />
                            <span>Superficie</span>
                          </h4>
                          <p className="text-vercel-300 pl-7">
                            {selectedProject.superficie}
                          </p>
                        </div>
                      )}

                      {selectedProject.cantidadMensuras && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Check className="h-5 w-5 text-brand-500 mr-2" />
                            <span>Cantidad de mensuras</span>
                          </h4>
                          <p className="text-vercel-300 pl-7">
                            {selectedProject.cantidadMensuras}
                          </p>
                        </div>
                      )}

                      {selectedProject.tramos && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Ruler className="h-5 w-5 text-brand-500 mr-2" />
                            <span>Tramos</span>
                          </h4>
                          <ul className="space-y-2 pl-7">
                            {selectedProject.tramos.map(
                              (tramo: any, i: number) => (
                                <li key={i} className="text-vercel-300">
                                  {tramo.tramo || tramo.nombre}: {tramo.longitud}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Asegurarse de que `selectedProject.tareas` sea un array antes de usar `.map` */}
                  {Array.isArray(selectedProject.tareas) && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Check className="h-5 w-5 text-brand-500 mr-2" />
                        <span>Tareas realizadas</span>
                      </h4>
                      <ul className="space-y-2 pl-7">
                        {selectedProject.tareas.map(
                          (tarea: string, i: number) => (
                            <li
                              key={i}
                              className="text-vercel-300 flex items-start"
                            >
                              <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3" />
                              <span>{tarea}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white py-4 text-base"
                    >
                      <Link href="#contacto" onClick={closeModal}>
                        Consultar por un proyecto similar
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-vercel-300 hover:bg-vercel-800 py-4 text-base"
                      onClick={closeModal}
                    >
                      Ver otros proyectos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
}

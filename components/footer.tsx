"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vercel-900 dark:bg-vercel-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">BYAS</span>
            </Link>
            <p className="text-vercel-300 mb-6 leading-relaxed">
              Servicios de Topografía, Agrimensura e Ingeniería Civil aplicados
              a Obras de Infraestructura con más de 50 años de experiencia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-vercel-800/50 hover:bg-vercel-800 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5 text-vercel-100" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="bg-vercel-800/50 hover:bg-vercel-800 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5 text-vercel-100" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="bg-vercel-800/50 hover:bg-vercel-800 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 text-vercel-100" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-vercel-800/50 hover:bg-vercel-800 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5 text-vercel-100" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#sobre-nosotros"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonios"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Servicios
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Relevamiento Planialtimétricos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Desarrollo de Urbanizaciones
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Agrimensura General
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Replanteo de Obras
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-vercel-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Cálculos Estructurales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-brand-400 mt-0.5" />
                <div>
                  <p className="text-vercel-200">+54 3446 672227</p>
                  <p className="text-vercel-200">+54 3446 672268</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-400" />
                <p className="text-vercel-200">info@byas.com.ar</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-400 mt-0.5" />
                <p className="text-vercel-200">
                  Argentina
                  <br />
                  Oficinas en todo el país
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-vercel-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-vercel-400 text-sm">
            &copy; {currentYear} BYAS. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-vercel-400 hover:text-white text-sm transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-vercel-400 hover:text-white text-sm transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

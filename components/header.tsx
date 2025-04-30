"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        "hero",
        "sobre-nosotros",
        "servicios",
        "por-que-elegirnos",
        "proyectos",
        "testimonios",
        "contacto",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-vercel-950/80 backdrop-blur-md border-b border-vercel-800 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Settings
            size={28}
            className="text-brand-400 transition-colors duration-300"
          />
          <span className="text-2xl font-bold text-white transition-colors duration-300">
            BYAS
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            href="#sobre-nosotros"
            isActive={activeSection === "sobre-nosotros"}
          >
            Sobre Nosotros
          </NavLink>
          <NavLink href="#servicios" isActive={activeSection === "servicios"}>
            Servicios
          </NavLink>
          <NavLink href="#proyectos" isActive={activeSection === "proyectos"}>
            Proyectos
          </NavLink>
          <NavLink
            href="#testimonios"
            isActive={activeSection === "testimonios"}
          >
            Testimonios
          </NavLink>
          <NavLink href="#contacto" isActive={activeSection === "contacto"}>
            Contacto
          </NavLink>

          <div className="hidden lg:flex items-center border-l border-vercel-800 pl-6 ml-2">
            <Phone className="h-4 w-4 mr-2 text-brand-400" />
            <span className="text-sm font-medium text-white">
              +54 3446 672227
            </span>
          </div>

          <Button
            asChild
            className="bg-vercel-900 hover:bg-vercel-800 text-white rounded-md transition-all duration-300"
          >
            <Link href="#contacto">Contáctanos</Link>
          </Button>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-md text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-vercel-950 absolute top-full left-0 right-0 shadow-lg border-b border-vercel-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                "sobre-nosotros",
                "servicios",
                "proyectos",
                "testimonios",
                "contacto",
              ].map((id) => (
                <MobileNavLink
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {id
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </MobileNavLink>
              ))}
              <div className="flex items-center py-3 border-t border-vercel-800">
                <Phone className="h-4 w-4 mr-2 text-brand-400" />
                <span className="text-sm font-medium text-white">
                  +54 3446 672227
                </span>
              </div>
              <Button
                asChild
                className="bg-vercel-900 hover:bg-vercel-800 text-white w-full rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="#contacto">Contáctanos</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors relative",
        isActive ? "text-brand-400" : "text-white hover:text-brand-400"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-brand-400" />
      )}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-white hover:text-brand-400 transition-colors font-medium py-3 border-b border-vercel-800 flex justify-between items-center"
      onClick={onClick}
    >
      <span>{children}</span>
    </Link>
  );
}

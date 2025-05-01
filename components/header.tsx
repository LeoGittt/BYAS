"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleSectionHighlight = () => {
      const sections = [
        "sobre-nosotros",
        "servicios",
        "proyectos",
        "testimonios",
        "contacto",
      ];
      let currentSection: string | null = null;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionHighlight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionHighlight);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-vercel-950/95 backdrop-blur-md border-b border-vercel-800/50 py-3 shadow-lg"
          : "bg-vercel-950/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group z-10">
          <motion.span
            className="text-2xl font-bold text-white transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              color: "rgb(var(--color-brand-400))",
            }}
          >
            BYAS
          </motion.span>
          <motion.span
            className="text-sm text-vercel-300 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ingeniería y Topografía
          </motion.span>
        </Link>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {[
            { href: "/nosotros", label: "Sobre Nosotros" },
            { href: "/servicios", label: "Servicios" },
            { href: "/proyectos", label: "Proyectos" },
            { href: "/contacto", label: "Contacto" },
          ].map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <NavLink
                href={`#${item.href}`}
                isActive={activeSection === item.href}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center border-l border-vercel-800/70 pl-6 ml-2"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Phone className="h-4 w-4 mr-2 text-brand-400" />
            </motion.div>
            <a
              href="tel:+543446672227"
              className="text-sm font-medium text-white hover:text-brand-400 transition-colors"
            >
              +54 3446 672227
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-brand-400 hover:bg-brand-500 text-vercel-950 font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-brand-400/20"
              >
                <Link href="#contacto">Contáctanos</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.nav>

        <motion.div
          className="md:hidden flex items-center z-10"
          whileTap={{ scale: 0.9 }}
        >
          <button
            className="p-2 rounded-full bg-vercel-900/50 backdrop-blur-md text-white hover:bg-brand-400/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "100vh",
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.1 },
              },
            }}
            className="md:hidden bg-vercel-950 fixed top-[var(--header-height)] left-0 right-0 bottom-0 z-40 overflow-hidden"
            style={
              {
                "--header-height": headerRef.current?.offsetHeight + "px",
              } as React.CSSProperties
            }
          >
            <div className="h-full flex flex-col">
              <motion.div
                className="container mx-auto px-4 py-8 flex-1 flex flex-col"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                <div className="flex-1 flex flex-col space-y-2">
                  {[
                    { href: "/nosotros", label: "Sobre Nosotros" },
                    { href: "/servicios", label: "Servicios" },
                    { href: "/proyectos", label: "Proyectos" },
                    { href: "/contacto", label: "Contacto" },
                  ].map((item) => (
                    <MobileNavLink
                      key={item.href}
                      href={`${item.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      isActive={activeSection === item.href}
                    >
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>

                <motion.div
                  className="mt-auto space-y-6 w-full"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="flex items-center py-4 border-t border-vercel-800/50">
                    <motion.div whileHover={{ scale: 1.1 }} className="mr-4">
                      <Phone className="h-4 w-4 text-brand-400" />
                    </motion.div>
                    <a
                      href="tel:+543446672227"
                      className="text-sm font-medium text-white hover:text-brand-400 transition-colors"
                    >
                      +54 3446 672227
                    </a>
                  </div>
                  <Button asChild>
                    <Link
                      href="#contacto"
                      className="w-full text-center py-2 px-4 bg-brand-400 text-vercel-950 hover:bg-brand-500 rounded-lg shadow-xl"
                    >
                      Contáctanos
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MobileNavLink({
  href,
  children,
  isActive,
  onClick,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "text-lg font-semibold text-white py-3 px-6 hover:bg-brand-400/20 rounded-lg transition-colors flex items-center",
        isActive ? "bg-brand-400/30" : ""
      )}
      onClick={onClick}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4 opacity-70" />
    </Link>
  );
}

function NavLink({
  href,
  children,
  isActive,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "text-lg font-semibold text-white hover:bg-brand-400/20 py-2 px-4 rounded-lg transition-colors",
        isActive ? "bg-brand-400/30" : ""
      )}
    >
      {children}
    </Link>
  );
}

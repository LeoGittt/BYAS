"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const headerRef = useRef<HTMLElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < 10 ||
          mobileMenuOpen
      );
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 10);

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
  }, [prevScrollPos, mobileMenuOpen]);

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
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-vercel-950/90 backdrop-blur-lg border-b border-vercel-800/50 py-3 shadow-lg"
          : "bg-gradient-to-b from-vercel-950/80 to-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group z-10">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Settings
              size={28}
              className="text-brand-400 group-hover:text-white transition-colors duration-300"
            />
          </motion.div>
          <motion.span
            className="text-2xl font-bold text-white transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              color: "rgb(var(--color-brand-400))",
            }}
          >
            BYAS
          </motion.span>
        </Link>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {[
            { id: "sobre-nosotros", label: "Sobre Nosotros" },
            { id: "servicios", label: "Servicios" },
            { id: "proyectos", label: "Proyectos" },
            { id: "testimonios", label: "Testimonios" },
            { id: "contacto", label: "Contacto" },
          ].map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <NavLink
                href={`#${item.id}`}
                isActive={activeSection === item.id}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center border-l border-vercel-800/70 pl-6 ml-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
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
            className="md:hidden bg-gradient-to-b from-vercel-950 to-vercel-900 fixed top-[var(--header-height)] left-0 right-0 bottom-0 z-40 overflow-hidden"
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
                    { id: "sobre-nosotros", label: "Sobre Nosotros" },
                    { id: "servicios", label: "Servicios" },
                    { id: "proyectos", label: "Proyectos" },
                    { id: "testimonios", label: "Testimonios" },
                    { id: "contacto", label: "Contacto" },
                  ].map((item) => (
                    <MobileNavLink
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      isActive={activeSection === item.id}
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
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Phone className="h-5 w-5 mr-3 text-brand-400" />
                    </motion.div>
                    <a
                      href="tel:+543446672227"
                      className="text-base font-medium text-white hover:text-brand-400 transition-colors"
                    >
                      +54 3446 672227
                    </a>
                  </div>

                  <Button
                    asChild
                    className="bg-brand-400 hover:bg-brand-500 text-vercel-950 font-medium w-full rounded-md py-6 text-lg shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="#contacto" className="flex justify-center">
                      Contáctanos Ahora
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
        "text-sm font-medium transition-all duration-300 relative py-1 px-1",
        isActive ? "text-brand-400" : "text-white hover:text-brand-400"
      )}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-brand-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="absolute inset-0 rounded-md -z-10 bg-brand-400/0 hover:bg-brand-400/10 transition-colors duration-300"></span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Link
        href={href}
        className={cn(
          "text-white hover:text-brand-400 transition-all duration-300 font-medium py-4 border-b border-vercel-800/30 flex justify-between items-center text-lg",
          isActive ? "text-brand-400" : ""
        )}
        onClick={onClick}
      >
        <span>{children}</span>
        <motion.div
          whileHover={{ x: 5 }}
          whileTap={{ x: -2 }}
          animate={isActive ? { x: [0, 5, 0] } : {}}
          transition={
            isActive
              ? { repeat: Infinity, repeatType: "reverse", duration: 1 }
              : {}
          }
        >
          <ChevronRight
            className={cn(
              "h-5 w-5 transition-colors",
              isActive ? "text-brand-400" : "text-vercel-600"
            )}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

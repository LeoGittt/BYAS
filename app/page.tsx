import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ServicesGrid from "@/components/services-grid";
import ProjectsShowcase from "@/components/projects-showcase";
import ContactSection from "@/components/contact-section";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          <Hero />
          <AboutSection />
          <ServicesGrid />
          <ProjectsShowcase />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

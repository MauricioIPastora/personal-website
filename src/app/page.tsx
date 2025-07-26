import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Particles from "@/components/Particles";
import CertificateCard from "@/components/CertificateCard";
import ResumeModal from "@/components/ResumeModal";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Mauricio Pastora
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <ResumeModal />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <Particles />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Mauricio Ignacio Pastora
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Developer portfolio showcasing my projects, skills,
                  certifications, and resume. Contact me with any questions!
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="https://github.com/mauricioipastora"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mauricio-pastora-044244186/"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:mauriciopastora@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <Particles />
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Internal Company Directory"
                description="Internal directory built for the Inter-American Institute on Justice and Sustainability."
                image="/IIJS-Directory-Screenshot.PNG"
                link="https://github.com/MauricioIPastora/IIJS_Directory_V2"
                link2="https://iijs-directory.app"
                tags={["React", "Vite", "Flask", "Python", "PostgreSQL", "AWS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CertificateCard
                title="AWS Certified AI Practitioner"
                issuer="Amazon Web Services Training and Certification"
                image="/AWS-AI-Practitioner-Cert.png"
                issueDate="2025-07-23"
                expirationDate="2028-01-15"
                credentialLink="https://www.credly.com/badges/94ee172a-933d-4a9c-bdfa-e79c807ca5f6/linked_in_profile"
              />
              <CertificateCard
                title="CS50x: CS50's Introduction to Computer Science"
                issuer="Harvard CS50"
                image="/Harvard-Logo.png"
                issueDate="2025-01-27"
                expirationDate={null}
                credentialLink="https://courses.edx.org/certificates/f048bc830f2140bfa955940c263e2d23"
              />
              <CertificateCard
                title="Responsive Web Design"
                issuer="freeCodeCamp"
                image="/freeCodeCamp.png"
                issueDate="2023-02-06"
                expirationDate={null}
                credentialLink="https://www.freecodecamp.org/certification/MauricioP/responsive-web-design"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

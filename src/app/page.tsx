import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import MatrixRain from "@/components/Matrix";
import CertificateCard from "@/components/CertificateCard";
import ContactForm from "@/components/ContactForm";
import { FloatingNav } from "@/components/FloatingNav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Timeline } from "@/components/Timeline";
import { Chatbot } from "@/components/Chatbot";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Matrix Rain Background */}
        {/* <MatrixRain className="z-0" /> */}

        {/* Animated background blobs */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/30 mb-4 mt-4">
                <span className="relative z-10 text-green-400">
                  Full Stack Developer & AI Engineer
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-white">Hi, I&apos;m</span>
              <span className="text-gradient-green matrix-glow">
                Mauricio Pastora
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px] bg-black/50 backdrop-blur-sm border border-green-500/30 p-4 rounded-xl">
              Professional developer portfolio featuring my projects, technical
              skills, certifications, and professional experience. Built with
              Next.js, TypeScript, and Tailwind CSS, deployed on AWS
              infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-emerald-500 border-0 text-black font-semibold">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-green-500/50 text-green-400 hover:text-black hover:bg-green-500 hover:border-green-500 bg-black/50 backdrop-blur-sm"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/mauricioipastora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/50 hover:bg-green-500/20 text-zinc-400 hover:text-green-400 border border-green-500/30"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mauricio-pastora-044244186/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/50 hover:bg-green-500/20 text-zinc-400 hover:text-green-400 border border-green-500/30"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/50 hover:bg-green-500/20 text-zinc-400 hover:text-green-400 border border-green-500/30"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Info Card */}
          <div className="flex justify-center">
            <GlassmorphicCard className="max-w-md">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">
                    Available for opportunities
                  </span>
                </div>
                <p className="text-zinc-300">
                  I craft exceptional digital experiences with code, creativity,
                  and a passion for innovation. Specializing in full-stack
                  development and AI integration.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-green-500/20">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium text-white">
                      Washington, D.C.
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Focus</div>
                    <div className="font-medium text-white">
                      Full Stack & AI
                    </div>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 rounded-full border-2 border-green-500/40 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300">
                I&apos;m a passionate full-stack developer with experience
                building web applications and AI-powered digital products. I
                specialize in React, Next.js, and Python, with extensive
                experience in AWS cloud infrastructure.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                My journey in tech is driven by a strong foundation in software
                development and a curiosity for emerging technologies. I&apos;ve
                worked on projects ranging from internal company directories to
                AI-powered platforms.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                When I&apos;m not coding, you can find me exploring new AI
                technologies, contributing to open-source projects, and staying
                up-to-date with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Name</div>
                  <div className="font-medium text-white">
                    Mauricio Ignacio Pastora
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium text-white">Contact via form</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="font-medium text-white">Washington, D.C.</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Availability</div>
                  <div className="font-medium text-green-400">
                    Open to opportunities
                  </div>
                </div>
              </div>
            </GlassmorphicCard>

            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-green-500/30 bg-black/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">
                    <Image
                      src="/foto - Edited.jpg"
                      alt="Mauricio Pastora"
                      width={400}
                      height={400}
                      className="rounded-lg border-2 border-emerald-500/40 shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient-green mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-zinc-400">
                    Building the future, one line of code at a time
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="space-y-16 mt-16">
            <ProjectCard
              title="Internal Company Directory"
              description="Internal directory built for the Inter-American Institute on Justice and Sustainability to track and manage employee, client, subcontractor, and any other contact information. Allows for easy search and filtering of contacts by name, email, phone, organization, country, organization type, and sector. Users can also add, edit, and delete contacts, organizations, organization types, and sectors as well as view contact details and export filtered contact list to a CSV file."
              image="/IIJS-Directory-Screenshot.PNG"
              link="https://github.com/MauricioIPastora/IIJS_Directory_V2"
              link2="https://iijs-directory.app"
              tags={[
                "React",
                "Vite",
                "Flask",
                "Python",
                "PostgreSQL",
                "AWS",
                "RDS",
                "S3 Bucket",
                "CloudFront",
                "Route 53",
                "EC2",
                "Cognito",
                "VPC",
                "Subnets",
                "Lambda",
                "Security Groups",
              ]}
              architectureDescription={
                <>
                  <b>AWS Infrastructure:</b>
                  <br />
                  The application leverages AWS services for scalability and
                  security. The React frontend is hosted in an S3 bucket and
                  delivered globally via CloudFront, with Route 53 managing DNS.
                  The backend runs on an EC2 instance inside a VPC, connected to
                  an RDS PostgreSQL database. Security Groups enforce strict
                  firewall rules, and Cognito manages user authentication. A
                  Pre-Signup Lambda trigger validates email domains (blocking
                  disposable or unauthorized domains) and logs actions to
                  CloudWatch. This setup provides a secure, high-performance
                  foundation with managed hosting and authentication. Frontend
                  <br />
                  <b>Frontend Architecture:</b>
                  <br />
                  The frontend is built with React and TypeScript, using Vite
                  for fast builds and SWR for efficient data fetching. A
                  component-based design with TailwindCSS ensures reusable,
                  responsive UI elements. State is managed via React Hooks and
                  the Context API, including an authentication context tied to
                  Cognito. This architecture delivers a performant and adaptive
                  interface with seamless user session handling.
                  <br />
                  <b>Backend Architecture:</b>
                  <br />
                  The backend uses Flask with a RESTful API backed by PostgreSQL
                  via SQLAlchemy. It follows clean REST principles, returning
                  JSON responses with proper status codes. Authentication relies
                  on Cognito-issued JWT tokens, reducing the need for custom
                  auth logic. SQLAlchemy&apos;s parameterized queries and input
                  normalization protect against SQL injection, while the modular
                  design simplifies database interactions and scaling.
                  <br />
                  <b>Deployment Pipeline:</b>
                  <br />
                  CI/CD is powered by GitHub Actions, automating builds and
                  deployments. Frontend changes are built with Vite and synced
                  to S3, followed by CloudFront cache invalidation. Backend
                  updates are deployed to EC2 via SSH with automatic dependency
                  installation and service restarts. Environment variables and
                  GitHub Secrets manage sensitive configurations for dev,
                  staging, and production environments. Security Features: All
                  traffic runs over HTTPS with SSL certificates from AWS
                  Certificate Manager. The RDS database is in a private subnet,
                  and Security Groups restrict inbound access. CORS is
                  configured on the Flask API to allow the frontend domain while
                  blocking unauthorized origins. Cognito secures authentication
                  and session management, while SQLAlchemy and input
                  sanitization mitigate injection risks. Sensitive credentials
                  are stored securely in AWS and GitHub Secrets.
                </>
              }
            />

            <ProjectCard
              title="Beltway Bits | Vinely.AI"
              description="An AI-powered, community-driven platform for sharing and discussing the latest events and news regarding the tech scene in the Washington, D.C. area."
              image="beltway.PNG"
              link="https://github.com/Vinely-AI/vinely-feed"
              link2="https://beltwaybits.vinely.ai/"
              tags={[
                "React",
                "Cheerio",
                "AWS Bedrock",
                "S3 Bucket",
                "Lambda",
                "OpenAI",
                "Anthropic",
                "MCP Server",
                "Express",
                "RAG Application",
                "S3 Vector Bucket",
                "Bedrock Knowledge Base",
                "DynamoDB",
                "AWS Comprehend",
                "AWS Textract",
              ]}
              title2="Contributions to the project"
              architectureDescription={
                <>
                  <b>R&D:</b>
                  <br />
                  Research and Development of the platform included the
                  implementation of different AWS services and tools to replace
                  the current vectorization pipeline. This led me to develop an
                  infrastructure that included the use of AWS Comprehend and
                  textract for extraction of text, AWS Bedrock for chunking, AWS
                  Titan V2 for vector embeddings, and DynamoDB for storing the
                  metadata of the chunks to avoid revectorization of the same
                  chunks.
                  <br />
                  <b>Features:</b>
                  <br />
                  Built and implemented a scraper to extract the raw text
                  content from a webpage.
                  <br />
                  <b>MCP Server:</b>
                  <br />
                  Developed and tested several different MCP tools to assist in
                  the development of the platform.
                </>
              }
            />

            <ProjectCard
              title="Pandio.AI"
              description="An AI-powered web browser currently in development"
              image="pandiorepo.PNG"
              link="https://github.com/MauricioIPastora/pandio-browser"
              tags={[
                "Electron",
                "React",
                "TypeScript",
                "Vite",
                "TailwindCSS",
                "OpenAI",
                "GPT-3.5-turbo",
                "react-rnd",
              ]}
              architectureDescription={
                <>
                  <b>Frontend Architecture:</b>
                  <br />
                  The renderer is built with React 19 and TypeScript, using Vite
                  for fast HMR development builds. A component-based design
                  leverages TailwindCSS for a dark-themed, responsive interface.
                  State management uses React Hooks exclusively—including custom
                  hooks like useChat and usePandioSidebar for encapsulated state
                  logic. The layout features a collapsible sidebar
                  (SidebarProvider context) and a resizable/draggable AI chat
                  panel powered by react-rnd for flexible positioning.
                  <br />
                  <b>Browser Core:</b>
                  <br />
                  The webview-based browser engine provides full navigation
                  controls (back, forward, refresh, home) with intelligent URL
                  handling—automatically prefixing https:// for domain-like
                  inputs or redirecting plain text to Google search. Navigation
                  events are intercepted to keep the URL bar synchronized with
                  the actual webview state.
                  <br />
                  <b>AI Chat Integration:</b>
                  <br />
                  The integrated Pandio Chat component connects directly to
                  OpenAI&apos;s GPT-3.5-turbo API via the Chat Completions
                  endpoint. API keys are securely managed through Vite
                  environment variables. The chat supports two display modes: a
                  fixed sidebar (300px width, docked right) and a floating modal
                  (draggable, resizable, 300-800px). Conversation state is
                  managed locally with React state, featuring loading indicators
                  and auto-scroll to the latest message.
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I work with"
          />

          <div className="mt-16">
            <TechStack />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading
            title="Certifications"
            subtitle="Professional credentials"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
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
              image="/freeCodeCamp.PNG"
              issueDate="2023-02-06"
              expirationDate={null}
              credentialLink="https://www.freecodecamp.org/certification/MauricioP/responsive-web-design"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-white">
                      Use contact form
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <Linkedin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <Link
                      href="https://www.linkedin.com/in/mauricio-pastora-044244186/"
                      target="_blank"
                      className="font-medium text-white hover:text-green-400 transition-colors"
                    >
                      linkedin.com/in/mauricio-pastora
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <Github className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <Link
                      href="https://github.com/mauricioipastora"
                      target="_blank"
                      className="font-medium text-white hover:text-green-400 transition-colors"
                    >
                      github.com/mauricioipastora
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-green-500/20">
                <h4 className="text-lg font-medium mb-4 text-white">
                  Current Status
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-zinc-300">
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-12 bg-black/50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="text-gradient-green">Mauricio</span>
              <span className="text-white">Pastora</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Mauricio Ignacio Pastora. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/mauricioipastora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-green-500/20 text-zinc-400 hover:text-green-400 border border-green-500/30"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mauricio-pastora-044244186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-green-500/20 text-zinc-400 hover:text-green-400 border border-green-500/30"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-green-500/20 text-zinc-400 hover:text-green-400 border border-green-500/30"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}

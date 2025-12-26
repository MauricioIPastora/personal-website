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
                href="#tech-stack"
                className="transition-colors hover:text-foreground/80"
              >
                Tech Stack
              </Link>
              <Link
                href="#certifications"
                className="transition-colors hover:text-foreground/80"
              >
                Certifications
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
                  Professional developer portfolio featuring my projects,
                  technical skills, certifications, and professional experience.
                  Built with Next.js, TypeScript, and Tailwind CSS for optimal
                  performance and user experience. The webpage you&apos;re
                  seeing is deployed on AWS infrastructure utilizing S3 for
                  static hosting, CloudFront for global content delivery, and a
                  Lambda function, API Gateway, and SES for contact form
                  functionality.
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
            <div className="space-y-12">
              <ProjectCard
                title="Internal Company Directory"
                description="Internal directory built for the Inter-American Institute on Justice and Sustainability to track and manage employee, client, subcontractor, and any other contact information. Allows for easy search and filtering of contacts by name, email, phone, organization, country, organization type, and sector. Users can also add, edit, and delete contacts, organizations,  organization types, and sectors as well as view contact details and export filtered contact list to a CSV file."
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
                architectureDescription={`AWS Infrastructure:
The application leverages AWS services for scalability and security. The React frontend is hosted in an S3 bucket and delivered globally via CloudFront, with Route 53 managing DNS. The backend runs on an EC2 instance inside a VPC, connected to an RDS PostgreSQL database. Security Groups enforce strict firewall rules, and Cognito manages user authentication. A Pre-Signup Lambda trigger validates email domains (blocking disposable or unauthorized domains) and logs actions to CloudWatch. This setup provides a secure, high-performance foundation with managed hosting and authentication.

Frontend Architecture:
The frontend is built with React and TypeScript, using Vite for fast builds and SWR for efficient data fetching. A component-based design with TailwindCSS ensures reusable, responsive UI elements. State is managed via React Hooks and the Context API, including an authentication context tied to Cognito. This architecture delivers a performant and adaptive interface with seamless user session handling.

Backend Architecture:
The backend uses Flask with a RESTful API backed by PostgreSQL via SQLAlchemy. It follows clean REST principles, returning JSON responses with proper status codes. Authentication relies on Cognito-issued JWT tokens, reducing the need for custom auth logic. SQLAlchemy’s parameterized queries and input normalization protect against SQL injection, while the modular design simplifies database interactions and scaling.

Deployment Pipeline:
CI/CD is powered by GitHub Actions, automating builds and deployments. Frontend changes are built with Vite and synced to S3, followed by CloudFront cache invalidation. Backend updates are deployed to EC2 via SSH with automatic dependency installation and service restarts. Environment variables and GitHub Secrets manage sensitive configurations for dev, staging, and production environments.

Security Features:
All traffic runs over HTTPS with SSL certificates from AWS Certificate Manager. The RDS database is in a private subnet, and Security Groups restrict inbound access. CORS is configured on the Flask API to allow the frontend domain while blocking unauthorized origins. Cognito secures authentication and session management, while SQLAlchemy and input sanitization mitigate injection risks. Sensitive credentials are stored securely in AWS and GitHub Secrets.`}
              />
            </div>
            <div className="space-y-12 mt-6">
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
                title2="Contributions to the project:"
                architectureDescription={`R&D: 
Research and Development of the platform included the implementation of different AWS services and tools to replace the current vectorization pipeline. This led me to develop an infrastructure that included the use of AWS Comprehend and textract for extraction of text, AWS Bedrock for chunking, AWS Titan V2 for vector embeddings, and DynamoDB for storing the metadata of the chunks to avoid revectorization of the same chunks.

Features: 
Built and implemented a scraper to extract the raw text content from a webpage.

MCP Server: 
Developed and tested several different MCP tools to assist in the development of the platform.

`}
              />
            </div>
            <div className="space-y-12 mt-6">
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
                architectureDescription={`Frontend Architecture:
The renderer is built with React 19 and TypeScript, using Vite for fast HMR development builds. A component-based design leverages TailwindCSS for a dark-themed, responsive interface. State management uses React Hooks exclusively—including custom hooks like useChat and usePandioSidebar for encapsulated state logic. The layout features a collapsible sidebar (SidebarProvider context) and a resizable/draggable AI chat panel powered by react-rnd for flexible positioning.

Browser Core:
The webview-based browser engine provides full navigation controls (back, forward, refresh, home) with intelligent URL handling—automatically prefixing https:// for domain-like inputs or redirecting plain text to Google search. Navigation events are intercepted to keep the URL bar synchronized with the actual webview state.

AI Chat Integration:
The integrated Pandio Chat component connects directly to OpenAI's GPT-3.5-turbo API via the Chat Completions endpoint. API keys are securely managed through Vite environment variables. The chat supports two display modes: a fixed sidebar (300px width, docked right) and a floating modal (draggable, resizable, 300-800px). Conversation state is managed locally with React state, featuring loading indicators and auto-scroll to the latest message.
`}
              />
            </div>
          </div>
        </section>

        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="certifications" className="py-12 md:py-24 lg:py-32">
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
                image="/freeCodeCamp.PNG"
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

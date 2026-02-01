"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Software Engineer",
    company: "Vertex Labs",
    period: "February 2025 - Present",
    bullets: [
      "Designed and implemented MCP servers and tools powering modular AI capabilities across the Vinely.AI platform.",
      "Leveraging Electron.js, React, Vite, TypeScript, TailwindCSS, OpenAI, GPT-3.5-turbo, and react-rnd, to develop an AI powered browser called Surph.AI with ability to integrate MCP tools as company product.",
      "Leading the migration of a client’s full AWS infrastructure between accounts, replicating services, transferring data and permissions, and validating deployments to ensure security, continuity, and minimal downtime.",
      "Developed RAG pipelines backed by vector databases, applying embedding deduplication and retrieval optimizations that reduced storage costs by 50% and improved response quality.",
      "Integrated third-party APIs and web-scraping pipelines with secure authentication, supporting scalable data ingestion for AI systems.",
      "Collaborated in an agile SDLC with frequent deployments, automated tests, code reviews, and production debugging in a containerized runtime.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Client: IIJS",
    period: "February 2025 - Present",
    bullets: [
      "Architected and delivered a production React and TypeScript application backed by Python and Flask APIs, supporting real-time data visualization and analytics.",
      "Designed secure, scalable AWS infrastructure (EC2, RDS PostgreSQL, S3, Lambda, Cognito, CloudFront) with best practices IAM roles and policies, supporting deployment, monitoring, and ongoing system support.",
      "Built CI/CD pipelines to automate testing and deployment, improving software quality and release reliability.",
      "Worked closely with stakeholders to translate business requirements into technical designs and implemented solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Arboria",
    period: "June 2025 - Present",
    bullets: [
      "Architecting AWS cloud infrastructure using Terraform to deploy containerized microservices on ECS Fargate, writing Dockerfiles and managing container registries (ECR), implementing CI/CD pipelines with GitHub Actions, and configuring VPC network policies, security groups, and auto-scaling compute resources (CPU/memory-based scaling) with bash scripting for automation.",
      "Leading the implementation of full-stack features for a logistics management application, including building dynamic Next.js pages and components (e.g., a responsive map interface using the Google Maps API), secureauthentication, user profile management, and designing scalable PostgreSQL schemas to ship production enhancements on rapid release cycles.",
    ],
  },
  {
    title: "Business Dev. Associate",
    company: "Inter-American Institute on Justice and Sustainability",
    period: "September 2023 - February 2025",
    bullets: [
      "Leveraged Agile methodology and cloud-based systems during development alongside Python, SQLite, Tkinter, and front-end design, to build a data warehouse business solution that streamlined access to client and expert data, cutting retrieval time by 70%.",
      "Managed comprehensive IT operations, including onboarding subcontractors, configuring IAM roles and policies, and collaborating closely with senior leadership to align IT solutions with organizational goals.",
      "Spearheaded marketing campaigns using analytics from social media, external communications, and website management, increasing digital engagement metrics by 30%.",
    ],
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-green-500/30 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-green-500/30 p-6 transition-all duration-300 hover:border-green-500/60 card-glow">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-green-400">
                  {experience.title}
                </h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <ul className="text-zinc-300 space-y-2 list-disc list-outside ml-4">
                  {experience.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

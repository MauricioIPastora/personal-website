"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Software Engineer",
    company: "Vertex Labs",
    period: "February 2025 - Present",
    bullets: [
      "Applied algorithmic optimization and efficient data structure design using AWS Lambda, DynamoDB, and vector databases to eliminate redundant embeddings and reprocessing, reducing storage costs by 50% and improving retrieval performance.",
      "Developed client-facing AI tools that synchronize frontend queries with MCP servers and vector databases, implementing structured data parsing and comparison logic to deliver accurate, low-latency user interactions.",
      "Built and deployed multiple MCP tools integrated into the Vinely.ai platform, enabling modular, reusable AI capabilities across workflows.",
      "Integrated advanced features including web scraping pipelines and secure third-party API authentication, enhancing platform functionality and data ingestion reliability.",
      "Collaborated within an agile engineering team, participating in code reviews, debugging, automated testing, and iterative feature delivery to maintain production quality standards.",
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
    company: "Arborea",
    period: "June 2025 - Present",
    bullets: [
      "Leading the ongoing implementation of full-stack features, including building dynamic Next.js pages and components (e.g., a responsive map interface using the Google Maps API), secure authentication, and user profile management, and designing scalable SQL/DDL schemas to ship production enhancements on rapid release cycles.",
      "Engaging in ongoing client meetings to define and prioritize MVP features, actively translating non-technical business needs into actionable technical deliverables, maintaining rapid feature implementation.",
      "Collaborating with a development team for version control, code reviews, and seamless integration of contributions.",
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

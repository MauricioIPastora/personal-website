"use client";

import { motion } from "framer-motion";
import { GlassmorphicCard } from "./GlassmorphicCard";

const technologies = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Electron",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Python",
      "PostgreSQL",
      "SQLite3",
      "Supabase",
      "Electron",
      "Java",
      "Node.js",
      "Flask",
    ],
  },
  {
    category: "DevOps",
    skills: ["AWS", "CI/CD", "Git", "Nginx", "Github Actions"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "GitHub"],
  },
  {
    category: "AI",
    skills: [
      "OpenAI SDK",
      "Anthropic SDK",
      "Model Context Protocol (MCP)",
      "Bedrock Knowledge Base",
      "AWS Comprehend",
      "AWS Textract",
      "AWS Bedrock",
      "AWS Titan V2",
      "S3 Vector Bucket",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {technologies.map((tech, index) => (
        <motion.div key={tech.category} variants={itemVariants}>
          <GlassmorphicCard>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              {tech.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/30 hover:bg-green-500/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassmorphicCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

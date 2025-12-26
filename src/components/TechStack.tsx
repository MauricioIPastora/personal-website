import { Card } from "@/components/ui/card";

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Electron"],
  },
  {
    category: "Backend",
    skills: ["Python", "PostgreSQL", "SQLite3", "Supabase", "Electron"],
  },
  {
    category: "DevOps",
    skills: ["AWS", "CI/CD", "Git", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "GitHub", "Vite"],
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

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 bg-muted/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-sm font-medium text-accent-foreground ring-1 ring-inset ring-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  link2?: string;
  tags: string[];
  architectureDescription?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  link2,
  architectureDescription,
}: ProjectCardProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Project Card */}
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 gap-4 flex">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
          {link2 && (
            <Link
              href={link2}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              <GlobeIcon className="h-4 w-4" />
              View Deployment
            </Link>
          )}
        </CardFooter>
      </Card>

      {/* Architecture Description */}
      {architectureDescription && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">
            Project Architecture
          </h4>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <div className="bg-muted/50 rounded-lg p-4 border">
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {architectureDescription}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

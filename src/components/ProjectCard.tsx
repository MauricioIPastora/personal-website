"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  link2?: string;
  tags: string[];
  architectureDescription?: React.ReactNode;
  title2?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  link2,
  architectureDescription,
  title2,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="grid gap-6 lg:grid-cols-2"
    >
      {/* Project Card */}
      <Card
        className="overflow-hidden self-start bg-black/50 backdrop-blur-sm border-green-500/30 transition-all duration-300 hover:border-green-500/60 card-glow group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${
                isHovered ? "bg-green-500" : "bg-zinc-500"
              } transition-colors duration-300`}
            ></div>
          </div>
        </div>
        <CardContent className="p-4 relative">
          <h3 className="font-semibold text-xl mb-2 text-green-400">{title}</h3>
          <p className="text-sm text-zinc-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-4 gap-4 flex border-t border-green-500/20 mt-2">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
          {link2 && (
            <Link
              href={link2}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors"
            >
              <GlobeIcon className="h-4 w-4" />
              View Deployment
            </Link>
          )}
        </CardFooter>
      </Card>

      {/* Architecture Description */}
      {architectureDescription && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-green-400">
            {title2 || "Project Architecture"}
          </h4>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <div className="relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm border border-green-500/30 p-4 hover:border-green-500/60 transition-all duration-300 card-glow">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg blur opacity-25"></div>
              <div className="relative whitespace-pre-wrap text-sm leading-relaxed text-zinc-300">
                {architectureDescription}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

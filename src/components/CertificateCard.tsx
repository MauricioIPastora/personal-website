"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, CalendarX } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface CertificateCardProps {
  title: string
  issuer: string
  image: string
  issueDate: string
  expirationDate?: string | null
  credentialLink: string
}

export default function CertificateCard({
  title,
  issuer,
  image,
  issueDate,
  expirationDate,
  credentialLink,
}: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="overflow-hidden h-full flex flex-col bg-black/50 backdrop-blur-sm border-green-500/30 transition-all duration-300 hover:border-green-500/60 card-glow group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={
              image || "/placeholder.svg?height=300&width=400&query=certificate"
            }
            alt={`${title} certificate`}
            fill
            className={`object-contain p-4 transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
        <CardContent className="p-4 flex-1 relative">
          <h3 className="font-semibold text-lg mb-2 text-green-400">{title}</h3>
          <p className="text-sm text-zinc-400 mb-4">{issuer}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-green-400/70" />
              <span className="text-zinc-400">Issued:</span>
              <span className="text-zinc-300">{formatDate(issueDate)}</span>
            </div>

            {expirationDate ? (
              <div className="flex items-center gap-2">
                <CalendarX className="h-4 w-4 text-green-400/70" />
                <span className="text-zinc-400">Expires:</span>
                <span className="text-zinc-300">{formatDate(expirationDate)}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CalendarX className="h-4 w-4 text-green-400/70" />
                <span className="text-zinc-400">No expiration</span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 border-t border-green-500/20 mt-2">
          <Link href={credentialLink} target="_blank" className="w-full">
            <Button
              variant="outline"
              className="w-full bg-transparent text-green-400 border-green-500/50 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Show Credential
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

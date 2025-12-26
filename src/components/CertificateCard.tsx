import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, CalendarX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CertificateCardProps {
  title: string;
  issuer: string;
  image: string;
  issueDate: string;
  expirationDate?: string | null;
  credentialLink: string;
}

export default function CertificateCard({
  title,
  issuer,
  image,
  issueDate,
  expirationDate,
  credentialLink,
}: CertificateCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-muted/50 backdrop-blur-sm">
      <div className="relative aspect-[4/3] ">
        <Image
          src={
            image || "/placeholder.svg?height=300&width=400&query=certificate"
          }
          alt={`${title} certificate`}
          fill
          className="object-contain p-4"
        />
      </div>
      <CardContent className="p-4 flex-1">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{issuer}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Issued:</span>
            <span>{formatDate(issueDate)}</span>
          </div>

          {expirationDate ? (
            <div className="flex items-center gap-2">
              <CalendarX className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Expires:</span>
              <span>{formatDate(expirationDate)}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <CalendarX className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">No expiration</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={credentialLink} target="_blank" className="w-full">
          <Button
            variant="outline"
            className="w-full bg-transparent text-black dark:text-green-500 dark:border-green-500"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Show Credential
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

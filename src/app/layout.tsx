import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Pastora",
  description: "portfolio showcasing projects and skills",
  openGraph: {
    title: "Mauricio Pastora - Portfolio",
    description:
      "Full-stack developer portfolio showcasing projects, skills, and experience",
    type: "website",
    url: "https://mauriciopastora.com", // Replace with your actual domain
    images: [
      {
        url: "/mauricio-pastora.png", // You can change this to any image in your public folder
        width: 1200,
        height: 630,
        alt: "Mauricio Pastora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauricio Pastora",
    description:
      "Full-stack developer portfolio showcasing projects, skills, and experience",
    images: ["/mauricio-pastora.png"], // Same image for Twitter
  },
  icons: {
    icon: "/foto - Edited.jpg", // This will be your favicon
    apple: "/foto - Edited.jpg", // Apple touch icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

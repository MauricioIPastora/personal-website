"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Add cache busting parameter to ensure fresh content
  const resumeUrl = "/Resume, Mauricio Ignacio Pastora, 2025.pdf";
  const iframeUrl = `${resumeUrl}?t=${Date.now()}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/Resume, Mauricio Ignacio Pastora, 2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewExternal = () => {
    window.open(resumeUrl, "_blank");
  };

  const openModal = () => {
    setIsOpen(true);
    setIsLoading(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Resume Button */}
      <Button
        variant="outline"
        onClick={openModal}
        className="bg-transparent dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-black dark:hover:border-green-500"
      >
        Resume
      </Button>

      {/* Resume Modal */}
      <Dialog open={isOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-2 flex-shrink-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Resume</DialogTitle>
              <div className="flex items-center gap-2 pr-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleViewExternal}
                  className="flex items-center gap-2 bg-transparent dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-black dark:hover:border-green-500"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-transparent dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-black dark:hover:border-green-500"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 p-6 py-16">
            <div className="w-full h-full border rounded-lg overflow-hidden bg-white">
              {isLoading && (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              )}
              <iframe
                src={iframeUrl}
                className="w-full h-full"
                title="Resume PDF"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? "none" : "block" }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

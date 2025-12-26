"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  // Replace this URL with your actual API Gateway URL
  const API_ENDPOINT =
    "https://z9a3kiujui.execute-api.us-east-1.amazonaws.com/default/personal-website-contact-form-handler";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setMessage(""); // Clear any previous messages

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        setMessage(data.message);
        form.reset();
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="p-6 bg-muted/50 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p
            className={`text-sm text-center mt-4 ${
              message.includes("Thanks") || message.includes("success")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </Card>
  );
}

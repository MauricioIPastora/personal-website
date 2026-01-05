"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  // Replace this URL with your actual API Gateway URL
  const API_ENDPOINT =
    "https://z9a3kiujui.execute-api.us-east-1.amazonaws.com/default/personal-website-contact-form-handler"

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setMessage("") // Clear any previous messages

    const form = e.currentTarget
    const formData = new FormData(form)

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
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      if (response.ok) {
        const data = await response.json()
        console.log("Response data:", data)
        setMessage(data.message)
        form.reset()
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Fetch error:", error)
      setMessage("Network error. Please check your connection and try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-green-500/30 p-6 transition-all duration-300 hover:border-green-500/60 card-glow">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-green-400">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="bg-black/50 border-green-500/30 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="bg-black/50 border-green-500/30 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="bg-black/50 border-green-500/30 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-zinc-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-black font-semibold border-0"
              disabled={pending}
            >
              {pending ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {message && (
              <p
                className={`text-sm text-center mt-4 ${
                  message.includes("Thanks") || message.includes("success")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

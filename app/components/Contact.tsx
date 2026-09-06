"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, Send } from "lucide-react";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setFormStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "martmorbos@gmail.com",
        },
        publicKey
      );

      setFormData({ name: "", email: "", message: "" });
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-slate-600">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground/90 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind or just want to say hi? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Let&apos;s collaborate!
              </h3>
              <p className="text-muted-foreground/90 leading-relaxed font-light">
                Whether through email or social media, I&apos;m always open to new opportunities.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600/20 to-slate-600/20 flex items-center justify-center text-emerald-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground/80 font-light">Email me at</p>
                <a
                  href="mailto:martmorbos@gmail.com"
                  className="text-lg font-semibold hover:text-emerald-400 transition-colors duration-300"
                >
                  martmorbos@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
              <p className="text-sm text-muted-foreground/80 mb-4 font-light">
                Connect on social media
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: GitHubLogoIcon,
                    href: "https://github.com/martmilitante",
                  },
                  {
                    icon: LinkedInLogoIcon,
                    href: "https://www.linkedin.com/in/reymart-militante/",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="glass rounded-lg hover:bg-emerald-600/20 hover:text-emerald-400 hover:border-emerald-600/30 transition-all duration-300"
                      asChild
                    >
                      <Link href={social.href} target="_blank" rel="noreferrer">
                        <Icon className="w-5 h-5" />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-card border-slate-200 dark:border-white/10 hover:border-emerald-600/40 dark:hover:border-emerald-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground/90">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      autoComplete="name"
                      required
                      className="bg-background/30 border-slate-300 dark:border-white/10 focus:border-emerald-600 focus:ring-emerald-600/30 transition-all duration-300 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground/90">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      autoComplete="email"
                      required
                      className="bg-background/30 border-slate-300 dark:border-white/10 focus:border-emerald-600 focus:ring-emerald-600/30 transition-all duration-300 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground/90">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      required
                      className="min-h-[150px] bg-background/30 border-slate-300 dark:border-white/10 focus:border-emerald-600 focus:ring-emerald-600/30 transition-all duration-300 resize-none rounded-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-gradient-to-r from-emerald-600 to-slate-600 text-white hover:from-emerald-700 hover:to-slate-700 shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 group font-semibold rounded-lg"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                    {formStatus === "sending" ? (
                      <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </Button>
                  <p
                    className="text-sm text-muted-foreground/80"
                    role="status"
                    aria-live="polite"
                  >
                    {formStatus === "success"
                      ? "Message sent successfully. I will get back to you soon."
                      : formStatus === "error"
                        ? "Unable to send your message. Please try again later."
                        : "Your message will be sent securely."}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

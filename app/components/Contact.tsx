"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              <h3 className="text-2xl font-bold mb-4">
                Let&apos;s talk about everything!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Don&apos;t like forms? Send me an email.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email me at</p>
                <a
                  href="mailto:martmorbos@gmail.com"
                  className="text-lg font-medium hover:text-indigo-400 transition-colors"
                >
                  martmorbos@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4">
                Follow me on social media
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
                      className="glass rounded-full hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
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
            <Card className="glass-card border-white/10">
              <CardContent className="p-8">
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-background/50 border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background/50 border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[150px] bg-background/50 border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/50 transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-500/25 transition-all group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

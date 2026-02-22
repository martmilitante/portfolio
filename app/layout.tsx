import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://reymartmilitante.com"),
  title: "Reymart Militante | Fullstack Developer",
  description:
    "I build scalable, performant, and elegant web applications. Passionate about crafting exceptional digital experiences with a keen eye for design and a love for clean code.",
  keywords: [
    "Reymart Militante",
    "Fullstack Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "Philippines",
    "Web Developer",
  ],
  authors: [
    {
      name: "Reymart Militante",
      url: "https://www.linkedin.com/in/reymart-militante/",
    },
  ],
  creator: "Reymart Militante",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reymartmilitante.dev",
    title: "Reymart Militante | Fullstack Developer",
    description: "I build scalable, performant, and elegant web applications.",
    siteName: "Reymart Militante Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Reymart Militante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reymart Militante | Fullstack Developer",
    description: "I build scalable, performant, and elegant web applications.",
    images: ["/images/profile.png"],
    creator: "@martmilitante",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

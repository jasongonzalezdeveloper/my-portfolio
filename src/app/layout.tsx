import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SkipToContent from "@/components/ui/SkipToContent";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jason González — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years building scalable React and Angular applications. Specialized in accessibility, performance, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Angular",
    "Costa Rica",
    "Accessibility",
    "WCAG",
  ],
  authors: [{ name: "Jason Francisco González García" }],
  openGraph: {
    title: "Jason González — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years building scalable React and Angular applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-navy-950 text-text-primary antialiased">
        <LanguageProvider>
          <SkipToContent />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

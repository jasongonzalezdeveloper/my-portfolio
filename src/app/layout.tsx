import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SkipToContent from "@/components/ui/SkipToContent";
import { assetPath } from "@/lib/assetPath";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://jasongonzalezdeveloper.github.io/my-portfolio/";
const SITE_TITLE = "Jason González — Senior Frontend Engineer";
const SITE_DESCRIPTION =
  "Senior Frontend Engineer with 7+ years building scalable React and Angular applications. Specialized in accessibility, performance, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: assetPath("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [assetPath("/opengraph-image.png")],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jason Francisco González García",
  jobTitle: "Senior Frontend Engineer",
  url: SITE_URL,
  email: "mailto:jason.gonzalez.developer@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/jason-gonzalez-garcia/",
    "https://github.com/jasongonzalezdeveloper",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Heredia",
    addressCountry: "CR",
  },
};

const themeInitScript = `(function(){try{var s=localStorage.getItem("portfolio-theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

const goatcounterUrl = process.env.NEXT_PUBLIC_GOATCOUNTER_URL;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {goatcounterUrl && (
          <script
            data-goatcounter={goatcounterUrl}
            async
            src="//gc.zgo.at/count.js"
          />
        )}
      </head>
      <body
        className="min-h-full flex flex-col bg-bg text-text antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <SkipToContent />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

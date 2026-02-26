import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdqaadir.github.io'),
  title: "Quadri Lateef | Senior Product Engineer",
  description: "Portfolio of Quadri Lateef, a Senior Product Focused Engineer specialized in building robust, scalable applications with NestJS, Prisma, and React.",
  keywords: ["Quadri Lateef", "Senior Product Engineer", "Full Stack Developer", "NestJS", "Prisma", "React", "Next.js", "Frontend Developer Nigeria"],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico", // Assuming standard favicon exists or Next.js handles it, explicit is better
    apple: "/apple-icon.png", // Optional if exists
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdqaadir.github.io",
    title: "Quadri Lateef | Senior Product Engineer",
    description: "Portfolio of Quadri Lateef, a Senior Product Focused Engineer specialized in building robust, scalable applications.",
    siteName: "Quadri Lateef Portfolio",
    images: [
      {
        url: "/my-og-image.png", // Using the large icon as OG image fallback for now
        width: 512,
        height: 512,
        alt: "Quadri Lateef Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadri Lateef | Senior Product Engineer",
    description: "Senior Product Focused Engineer building the future with code.",
    creator: "@mufty_codes",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${syne.variable} ${poppins.variable} antialiased bg-background text-foreground font-body`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Quadri Lateef Olayinka",
              alternateName: "MuftyCodes",
              url: "https://abdqaadir.github.io",
              jobTitle: "Senior Product Focused Engineer",
              sameAs: [
                "https://github.com/abdqaadir",
                "https://www.linkedin.com/in/quadri-lateef",
                "https://twitter.com/mufty_codes"
              ],
              knowsAbout: ["Product Engineering", "Full Stack Development", "NestJS", "Prisma", "PostgreSQL", "React", "Next.js"],
              description: "Senior Product Focused Engineer specialized in building robust, scalable applications with NestJS, Prisma, and React.",
              image: "https://abdqaadir.github.io/assets/profile.jpg", // Placeholder for profile image
              address: {
                "@type": "PostalAddress",
                addressCountry: "Nigeria"
              }
            }),
          }}
        />

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Turbose AI Labs Enterprise",
  description: "Enterprise AI consulting, implementation, and intelligent systems engineering for forward-thinking businesses.",
  metadataBase: new URL("https://turbose.com"),
  openGraph: {
    title: "Turbose AI Labs Enterprise",
    description: "We design, build, and deploy production-grade AI systems — autonomous agents, intelligent automation, and enterprise knowledge infrastructure.",
    url: "https://turbose.com",
    siteName: "Turbose AI Labs Enterprise",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbose AI Labs Enterprise",
    description: "Enterprise AI consulting and implementation. From strategy to production — intelligently engineered.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
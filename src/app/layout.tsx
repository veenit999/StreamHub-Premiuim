import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StreamHub Premium — Premium Entertainment. Simplified.",
  description:
    "All your premium subscriptions — Netflix, Spotify, Disney+, ChatGPT Plus, Microsoft 365 and more — in one place. Instant delivery, secure payments, verified accounts.",
  keywords: [
    "subscription marketplace",
    "Netflix subscription",
    "Spotify Premium",
    "ChatGPT Plus",
    "Disney+ Hotstar",
    "Microsoft 365",
  ],
  openGraph: {
    title: "StreamHub Premium — Premium Entertainment. Simplified.",
    description:
      "All your premium subscriptions, one place. Affordable access to entertainment, music, learning and productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

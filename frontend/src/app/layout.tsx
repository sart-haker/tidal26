import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageShell } from "@/components/layout/PageShell";
import { TooltipProvider } from "@/components/ui/Tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCP Track — Pipeline ILI Analysis",
  description: "In-Line Inspection data alignment and growth analysis for pipeline anomalies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <PageShell>{children}</PageShell>
        </TooltipProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, DynaPuff } from "next/font/google";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { AiChatbot } from "@/components/ai/AiChatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PenguinPipe — Pipeline ILI Analysis",
  description:
    "In-Line Inspection data alignment and growth analysis for pipeline anomalies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
          <AiChatbot />
        </TooltipProvider>
      </body>
    </html>
  );
}

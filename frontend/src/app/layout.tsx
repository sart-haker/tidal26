import type { Metadata } from "next";
import { Geist, Geist_Mono, Luckiest_Guy } from "next/font/google";
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

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCP Track — Pipeline ILI Analysis",
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
        className={`${geistSans.variable} ${geistMono.variable} ${luckiestGuy.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
          <AiChatbot />
        </TooltipProvider>
      </body>
    </html>
  );
}

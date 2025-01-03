import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fontsource/inter';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
 
import { Footer1 } from "@/blocks/footer/footer1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TWBlocks",
  description: "Free SaaS website blocks based on React with shadcn & Tailwind",
  keywords:
    "tailwindcss, react, shadcn, design, webdesign, website, saas templates, saas website templates",
  authors: [{ name: "p", url: " " }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="TWBlocks - Free SaaS website blocks"
        />
        <meta
          property="og:description"
          content="Free SaaS website blocks based on React with shadcn & Tailwind"
        />
        <meta
          property="og:image"
          content=" "
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          
             
          
          {children}
        </ThemeProvider>
        <Footer1 />
      </body>
    </html>
  );
}

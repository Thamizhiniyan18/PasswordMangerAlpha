import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Password Manager",
  description: "A Password Manager Build using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

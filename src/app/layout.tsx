import type { Metadata } from "next";
import "@/styles/globals.css";
import Dropdown from "@/components/ThemeDropdown/Dropdown";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Create Mastery",
    template: "%s | Create Mastery",
  },
  description: "The official Create Mastery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex flex-row justify-between bg-blue-300 p-2 text-stone-900 select-none">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src="/create-mastery-logo.svg"
                alt="Create Mastery Logo"
                width={70}
                height={70}
              />

              <span className="text-5xl font-bold">CREATE MASTERY</span>
            </div>

            <div className="mr-4 flex items-center justify-center">
              <Dropdown />
            </div>
          </header>

          <main className="flex-1 bg-stone-100 dark:bg-stone-900">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/styles/globals.css";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import Dropdown from "@/components/ThemeDropdown/Dropdown";
import Link from "next/link";
import styles from "@/styles/layout.module.css";

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
            <Link
              href="/"
              className="flex flex-row items-center justify-center gap-2"
            >
              <Image
                src="/create-mastery-logo.svg"
                alt="Create Mastery Logo"
                width={70}
                height={70}
              />

              <span className="hidden text-5xl font-bold sm:inline">
                CREATE MASTERY
              </span>
            </Link>

            <nav className="my-auto -mr-1.5 flex items-center justify-center rounded-lg bg-stone-900 sm:mr-4">
              <ul className="flex flex-row items-center justify-center">
                <li>
                  <Link href="/guide" className={styles.navbar__link}>
                    <span className="pl-1">GUIDE</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/SCSDC-co"
                    className={styles.navbar__link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    SCSDC
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.curseforge.com/minecraft/mc-mods/create"
                    className={styles.navbar__link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    DOWNLOAD
                  </a>
                </li>
                <li>
                  <Dropdown />
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-1 bg-stone-100 dark:bg-stone-900">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

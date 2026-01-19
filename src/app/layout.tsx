import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import { DropdownMenu } from "radix-ui";
import "@/styles/globals.css";
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
    <html lang="en">
      <body className="flex min-h-screen flex-col">
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
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className="flex flex-row items-center justify-center text-xl font-semibold text-blue-50 transition outline-none not-focus:text-stone-900 hover:cursor-pointer"
                  aria-label="Theme Dropdown"
                  type="button"
                >
                  THEME
                  <Icon icon="lucide:chevron-right" width="32" height="32" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content className="bg-blue-300" loop>
                <DropdownMenu.Item className="theme-dropdown__item">
                  DARK
                </DropdownMenu.Item>
                <DropdownMenu.Item className="theme-dropdown__item">
                  LIGHT
                </DropdownMenu.Item>
                <DropdownMenu.Item className="theme-dropdown__item">
                  SYSTEM
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </header>

        <main className="flex-1 bg-stone-900">{children}</main>
      </body>
    </html>
  );
}

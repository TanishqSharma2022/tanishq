import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "@/components/toggle-theme";
import { ThemeProvider } from "./theme-provider";
import { switchThemeDuration } from "../constants/switch-theme";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tanishq Sharma",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  ${switchThemeDuration}`}
      >
        <main className="flex min-h-screen flex-col text-zinc-700 dark:bg-dot-white/[0.1] bg-dot-zinc-700/[0.1] dark:text-white items-center bg-white dark:bg-zinc-900 justify-between p-6 md:p-12">
      <div className="md:w-[50%]">
        <Navbar />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
        </div>
        </main>
      </body>
    </html>
  );
}

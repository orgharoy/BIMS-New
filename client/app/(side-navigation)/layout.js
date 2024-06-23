import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stratix | Dashboard",
  description: "Business Initiative Management System - Authentication Pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-screen h-16">
            <Navigation />
          </div>
          <div className="flex">
            <div className="w-80">
              <Sidebar />
            </div>
            <div className="p-5 w-[calc(100vw-320px)] bg-slate-100 dark:bg-black">
              {children}
            </div>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
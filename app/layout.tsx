import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Athena | Tracking made easy",
  description: "Created by Alazar Michael",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-white dark:bg-primary-6 text-primary-6 dark:text-white`}
      >
        <div className="py-4 px-8">
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}

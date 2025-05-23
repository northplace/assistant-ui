import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MyRuntimeProvider } from "./MyRuntimeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenAI Chat App",
  description: "Chat application powered by OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en" className="h-dvh">
        <body className={`${inter.className} h-dvh`}>{children}</body>
      </html>
    </MyRuntimeProvider>
  );
}
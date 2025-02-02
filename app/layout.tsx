import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { getConfigFromHeaders } from "@/server/util";
import { ConfigProvider } from "./global-context";

const monsterrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const config = getConfigFromHeaders(headersList);
  return (
    <html lang="en">
      <ConfigProvider initialConfig={config}>
        <body className={monsterrat.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}

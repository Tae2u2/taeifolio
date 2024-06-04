import type { Metadata } from "next";
import "./global.css";
import localfont from "next/font/local";
import Navigation from "@/components/Navigation";

const pretendard = localfont({
  src: "../styles/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAEIFOLIO",
  description: "주니어 개발자 포트폴리오",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Navigation />
        {children}
        <small>©taeifolio</small>
      </body>
    </html>
  );
}

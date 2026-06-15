import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReturnBot from "@/components/ReturnBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "리턴루프 — 버는 만큼 돌려주고, 돌려준 만큼 다시 큰다",
  description:
    "리턴루프(ReturnLoop) — 소자본 창업자와 회사가 함께 만든 수익을 매일 나누고, 쇼핑포인트로 다시 순환시키는 상생 분배 플랫폼.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* FOUC 방지 — 페인트 전에 저장된 테마 적용 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('rl_theme')||'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ReturnBot />
      </body>
    </html>
  );
}

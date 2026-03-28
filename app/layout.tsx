import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenClaw VN - GPT-5.4 & Codex-5.3 API Key | Chỉ 80K/tháng",
  description:
    "Mua API key OpenAI chính hãng giá rẻ: GPT-5.4, Codex-5.3. Hỗ trợ cài đặt OpenClaw miễn phí, thanh toán VNĐ, không cần thẻ quốc tế. 500+ người dùng.",
  keywords: [
    "OpenClaw",
    "API key OpenAI",
    "GPT-5.4",
    "Codex-5.3",
    "mua API key",
    "OpenAI API",
  ],
  openGraph: {
    title: "OpenClaw VN - GPT-5.4 & Codex-5.3 API Key",
    description:
      "Trải nghiệm GPT-5.4 & Codex-5.3 không giới hạn – Chỉ 80K/tháng. Hỗ trợ cài đặt OpenClaw miễn phí.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog – Tin tức AI & Hướng dẫn OpenClaw | OpenClaw VN",
  description:
    "Tin tức AI mới nhất, hướng dẫn sử dụng GPT-5.4 & Codex-5.3 cho developer và người non-tech. Blog chính thức từ OpenClaw VN.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

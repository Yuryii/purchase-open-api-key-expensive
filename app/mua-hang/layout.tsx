import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hướng dẫn mua hàng – OpenClaw VN | Chỉ 80K/tháng",
  description:
    "Hướng dẫn đăng ký và mua API key OpenClaw chỉ 80K/tháng. Thanh toán VNĐ qua Zalo, hỗ trợ cài đặt miễn phí từ đầu.",
};

export default function MuaHangLayout({
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

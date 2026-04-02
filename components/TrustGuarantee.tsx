"use client";

import { useEffect, useRef } from "react";
import { Shield, RefreshCw, Headphones, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const guarantees = [
  {
    icon: Shield,
    title: "Hoàn tiền 100% – 30 ngày",
    description: "Không hài lòng? Hoàn tiền đầy đủ trong vòng 30 ngày đầu tiên, không câu hỏi.",
    color: "bg-emerald-100 text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: RefreshCw,
    title: "Cài đặt miễn phí từ đầu",
    description: "Hỗ trợ cài đặt OpenClaw vào Cursor, VS Code, Claude App miễn phí cho mọi khách hàng.",
    color: "bg-blue-100 text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ Zalo & Telegram 24/7",
    description: "Đội ngũ hỗ trợ qua Zalo và Telegram, phản hồi trong vài phút trong giờ hành chính.",
    color: "bg-purple-100 text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: Lock,
    title: "Thanh toán an toàn",
    description: "Chuyển khoản qua Momo hoặc MB Bank – không cần cung cấp thông tin thẻ nhạy cảm.",
    color: "bg-amber-100 text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

export default function TrustGuarantee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".section-fade").forEach((child) => {
            child.classList.add("visible");
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <section id="trust" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Cam kết
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Mua sản phẩm –{" "}
                <span className="gradient-text">yên tâm tuyệt đối</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                4 lý do khiến bạn hoàn toàn yên tâm khi mua OpenClaw
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g, i) => (
              <div
                key={g.title}
                className={cn(
                  "section-fade opacity-0 rounded-2xl p-6 border card-hover text-center",
                  g.bg,
                  g.border
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5",
                    g.color
                  )}
                >
                  <g.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-secondary-800 mb-2 text-sm lg:text-base">
                  {g.title}
                </h3>
                <p className="text-xs lg:text-sm text-secondary-500 leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

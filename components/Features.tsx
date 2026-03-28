"use client";

import { useEffect, useRef } from "react";
import {
  Cpu,
  Infinity,
  Wrench,
  CreditCard,
  MessageCircle,
  RefreshCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Cpu,
    title: "Mô hình mới nhất",
    description: "GPT-5.4, Codex-5.3 – Model mới nhất từ OpenAI, luôn được cập nhật",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Infinity,
    title: "Không giới hạn",
    description: "Không giới hạn request mỗi tháng, thoải mái sử dụng mọi lúc",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Wrench,
    title: "Cài đặt dễ dàng",
    description: "Hỗ trợ cài OpenClaw từ đầu, even nếu bạn chưa biết gì về tech",
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: CreditCard,
    title: "Thanh toán VNĐ",
    description: "Không cần thẻ quốc tế, chuyển khoản hoặc ví Momo/ZaloPay",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: MessageCircle,
    title: "Hỗ trợ tiếng Việt",
    description: "Trả lời nhanh qua Zalo/Telegram, hỗ trợ 24/7 mọi lúc",
    color: "bg-pink-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: RefreshCcw,
    title: "Bảo hành 30 ngày",
    description: "Hoàn tiền 100% nếu key không hoạt động, không hỏi lý do",
    color: "bg-teal-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-500",
  },
];

export default function Features() {
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
      <section id="features" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Tính năng nổi bật
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Tại sao chọn <span className="gradient-text">OpenClaw VN</span>?
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                Chúng tôi mang đến trải nghiệm API OpenAI tốt nhất cho người
                dùng Việt Nam
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={cn(
                  "section-fade opacity-0 card-hover bg-white border border-slate-200 rounded-2xl p-6 lg:p-8",
                  `delay-[${i * 100}ms]`
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                    feature.bgColor
                  )}
                >
                  <feature.icon className={cn("w-7 h-7", feature.iconColor)} />
                </div>
                <h3 className="text-lg font-bold text-secondary-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

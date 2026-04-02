"use client";

import { useEffect, useRef } from "react";
import {
  Check,
  Zap,
  CreditCard,
  Globe,
  Headphones,
  RefreshCw,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import pricingConfig from "@/config/pricing.json";

const advantages = [
  {
    icon: Zap,
    title: "Không giới hạn request/tháng",
    description:
      "Dùng bao nhiêu tùy bạn, không lo giới hạn. ChatGPT Plus giới hạn ~200 tin nhắn/3 giờ.",
    color: "bg-amber-100 text-amber-600",
    badge: "TIẾT KIỆM NHẤT",
  },
  {
    icon: Globe,
    title: "Không cần VPN",
    description:
      "Truy cập từ Việt Nam không cần VPN. ChatGPT Plus yêu cầu VPN ổn định.",
    color: "bg-blue-100 text-blue-600",
    badge: "",
  },
  {
    icon: CreditCard,
    title: "Thanh toán bằng VNĐ",
    description:
      "Chuyển khoản Momo hoặc MB Bank – không cần thẻ quốc tế. ChatGPT Plus bắt buộc thẻ thanh toán quốc tế.",
    color: "bg-emerald-100 text-emerald-600",
    badge: "",
  },
  {
    icon: MessageSquare,
    title: "Hỗ trợ tiếng Việt ưu tiên",
    description:
      "Prompt bằng tiếng Việt cho kết quả tốt nhất, không cần dịch sang tiếng Anh.",
    color: "bg-purple-100 text-purple-600",
    badge: "",
  },
  {
    icon: RefreshCw,
    title: "Refund 30 ngày – không câu hỏi",
    description:
      "Hoàn tiền đầy đủ trong 30 ngày đầu nếu không hài lòng. ChatGPT Plus không hoàn tiền.",
    color: "bg-rose-100 text-rose-600",
    badge: "",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ qua Zalo & Telegram",
    description:
      "Đội ngũ hỗ trợ phản hồi nhanh qua Zalo và Telegram, không có chatbot tự động.",
    color: "bg-cyan-100 text-cyan-600",
    badge: "",
  },
];

export default function Comparison() {
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
      <section id="comparison" className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Ưu điểm vượt trội
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Tại sao chọn{" "}
                <span className="gradient-text">OpenClaw?</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                6 lý do OpenClaw vượt trội hơn ChatGPT Plus – dành cho lập trình viên & creator Việt
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={cn(
                  "section-fade opacity-0 bg-white rounded-2xl p-6 border border-slate-200 card-hover relative",
                  adv.badge && "lg:col-span-3 xl:col-span-1"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {adv.badge && (
                  <span className="absolute -top-3 left-6 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {adv.badge}
                  </span>
                )}
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
                    adv.color
                  )}
                >
                  <adv.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-secondary-800 mb-2 text-base lg:text-lg">
                  {adv.title}
                </h3>
                <p className="text-sm text-secondary-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>

          <div className="section-fade opacity-0 mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-primary-500 shadow-lg px-8 py-4">
                <Sparkles className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <p className="font-extrabold text-secondary-800 text-xl">
                    OpenClaw
                  </p>
                  <p className="text-3xl font-extrabold text-primary-600">
                    {pricingConfig.sellPrice / 1000}K
                    <span className="text-base font-normal text-secondary-400 ml-1">
                      VNĐ/tháng
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl border border-slate-200 px-8 py-4 opacity-70">
                <Zap className="w-6 h-6 text-secondary-400" />
                <div className="text-left">
                  <p className="font-extrabold text-secondary-400 text-xl">
                    ChatGPT Plus
                  </p>
                  <p className="text-3xl font-extrabold text-secondary-300">
                    ~590K
                    <span className="text-base font-normal text-secondary-300 ml-1">
                      VNĐ/tháng
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/mua-hang"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 text-lg"
              >
                Mua ngay – chỉ {pricingConfig.sellPrice / 1000}K/tháng
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

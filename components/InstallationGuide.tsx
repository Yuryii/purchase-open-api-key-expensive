"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShoppingCart,
  KeyRound,
  Terminal,
  Rocket,
  MessageCircle,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    icon: ShoppingCart,
    title: "Đăng ký & mua gói",
    description:
      "Nhấn 'Mua ngay' để vào nhóm Zalo, chuyển khoản 80K/tháng, xác nhận với admin để nhận API key.",
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    number: 2,
    icon: KeyRound,
    title: "Nhận API key qua Zalo",
    description:
      "Sau khi thanh toán, admin sẽ gửi API key qua Zalo trong vòng 5 phút. Lưu lại key cẩn thận.",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    number: 3,
    icon: Terminal,
    title: "Mở Terminal & dán lệnh",
    description:
      'Mở Terminal (Windows: nhấn Win+R gõ "cmd", Mac: nhấn Cmd+Space gõ "Terminal"). Dán lệnh được gửi kèm key, nhấn Enter và đợi cài đặt hoàn tất.',
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    code: "curl -fsSL https://openclaw.vn/install | sh",
  },
  {
    number: 4,
    icon: KeyRound,
    title: "Kết nối API key",
    description:
      "Mở OpenClaw Dashboard, nhập API key của bạn vào. Xong! Không cần cấu hình phức tạp nào thêm.",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    number: 5,
    icon: Rocket,
    title: "Tận hưởng!",
    description:
      "Bắt đầu sử dụng GPT-5.4 & Codex-5.3 ngay. Đội ngũ hỗ trợ luôn sẵn sàng giúp bạn 24/7.",
    color: "bg-pink-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

export default function InstallationGuide() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={sectionRef}>
      <section
        id="installation"
        className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Hướng dẫn cài đặt
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Cài đặt OpenClaw <span className="gradient-text">trong 5 phút</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                Chỉ cần dán 1 lệnh vào Terminal – đội ngũ hỗ trợ giúp bạn từng bước
              </p>
            </div>
          </div>

          <div className="section-fade opacity-0 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 group",
                    activeStep === i
                      ? "bg-primary-50 border-2 border-primary-300 shadow-lg shadow-primary-100"
                      : "bg-white border border-slate-200 hover:border-primary-200 hover:shadow-md"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white flex-shrink-0 transition-colors",
                      step.color
                    )}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-800 group-hover:text-primary-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}

              <div className="section-fade opacity-0 mt-6">
                <a
                  href="https://zalo.me/g/vtogvm532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-50 border-2 border-green-300 rounded-xl hover:bg-green-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-green-700">
                      Hỗ trợ trực tiếp 24/7 qua nhóm Zalo
                    </p>
                    <p className="text-sm text-green-600 mt-0.5">
                      Đội ngũ kỹ thuật giúp bạn cài đặt từ xa, không lo lỗi
                    </p>
                  </div>
                  <MessageCircle className="w-6 h-6 text-green-500 ml-auto flex-shrink-0" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block sticky top-24">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                    {steps[activeStep].title}
                  </div>
                </div>
                <div className={cn("p-6 transition-all duration-500", steps[activeStep].bgColor)}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        steps[activeStep].bgColor
                      )}
                    >
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return (
                          <Icon
                            className={cn("w-6 h-6", steps[activeStep].iconColor)}
                          />
                        );
                      })()}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-800">
                        Bước {steps[activeStep].number}: {steps[activeStep].title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                    {steps[activeStep].description}
                  </p>
                  {"code" in steps[activeStep] && (
                    <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm">
                      <p className="text-green-400 mb-1">$</p>
                      <p className="text-white break-all">
                        {(steps[activeStep] as (typeof steps)[number] & { code: string }).code}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import {
  UserPlus,
  MessageCircle,
  CheckCircle,
  Download,
  ArrowRight,
  Shield,
  Zap,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import pricingConfig from "@/config/pricing.json";

const formatPrice = (price: number) =>
  price.toLocaleString("vi-VN");

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Đăng ký tài khoản",
    description:
      "Truy cập trang đăng ký và tạo tài khoản tại routerapi.vovantin.online để bắt đầu.",
    link: "https://routerapi.vovantin.online/",
    linkText: "Đăng ký ngay",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    number: 2,
    icon: MessageCircle,
    title: "Vào nhóm Zalo hỗ trợ mua hàng",
    description:
      "Tham gia nhóm Zalo chính thức để thực hiện thanh toán và được hỗ trợ từ đội ngũ admin.",
    link: "https://zalo.me/g/vtogvm532",
    linkText: "Vào nhóm Zalo",
    color: "bg-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Thanh toán & Xác nhận",
    description:
      "Thanh toán " + formatPrice(pricingConfig.sellPrice) + " VNĐ/tháng, sau đó nhắn tin theo cú pháp \"Tên đăng ký + Đã Thanh toán\" vào nhóm Zalo để admin cấp token và hướng dẫn sử dụng.",
    link: null,
    linkText: null,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    number: 4,
    icon: Download,
    title: "Cài đặt & Sử dụng ngay",
    description:
      "Lần đầu mua, đội ngũ hỗ trợ sẽ giúp bạn cài và setup OpenClaw từ đầu để có thể sử dụng ngay lập tức.",
    link: null,
    linkText: null,
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

const highlights = [
  {
    icon: Zap,
    label: "Giá cố định",
    value: `${formatPrice(pricingConfig.sellPrice / 1000)}K/${pricingConfig.period}`,
    desc: "Không phí ẩn, không chia gói",
  },
  {
    icon: Shield,
    label: "Bảo hành",
    value: "30 ngày",
    desc: "Hoàn tiền 100% nếu không hài lòng",
  },
  {
    icon: Clock,
    label: "Hỗ trợ",
    value: "24/7",
    desc: "Zalo & Telegram",
  },
];

export default function MuaHangPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".step-fade").forEach((child) => {
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
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-amber-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Hướng dẫn mua hàng
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-800 mb-6 leading-tight">
            Mua API Key <span className="gradient-text">OpenClaw</span>
            <br />
            chỉ trong 4 bước đơn giản
          </h1>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Thanh toán bằng VNĐ, hỗ trợ cài đặt miễn phí từ đầu. Không cần thẻ
            quốc tế, không rườm rà.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="step-fade opacity-0"
                  style={{
                    transitionDelay: `${index * 120}ms`,
                    transition:
                      "opacity 0.6s ease-out, transform 0.6s ease-out",
                  }}
                >
                  <div
                    className={cn(
                      "relative bg-white rounded-2xl border-2 overflow-hidden shadow-lg",
                      step.borderColor
                    )}
                  >
                    {/* Step header bar */}
                    <div
                      className={cn(
                        "flex items-center gap-3 px-6 py-4",
                        step.bgColor
                      )}
                    >
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-md flex-shrink-0",
                          step.color
                        )}
                      >
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-secondary-800">
                          {step.title}
                        </h3>
                      </div>
                      <Icon
                        className={cn(
                          "w-6 h-6 flex-shrink-0",
                          step.color.replace("bg-", "text-")
                        )}
                      />
                    </div>

                    {/* Step body */}
                    <div className="px-6 py-5">
                      <p className="text-secondary-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {step.link && (
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md",
                            step.color
                          )}
                        >
                          {step.linkText}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-8 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-4 right-8 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Sẵn sàng bắt đầu?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Tham gia nhóm Zalo ngay hôm nay để được hỗ trợ mua hàng và cài
                đặt OpenClaw miễn phí.
              </p>

              <a
                href="https://zalo.me/g/vtogvm532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-10 py-4 rounded-xl hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Vào nhóm Zalo hỗ trợ mua hàng
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <p className="text-xs text-secondary-400 font-semibold uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-2xl font-extrabold text-secondary-800 mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-secondary-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

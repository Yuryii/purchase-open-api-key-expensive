"use client";

import { useEffect, useRef } from "react";
import { Check, Zap, ArrowRight, Shield } from "lucide-react";

const plan = {
  name: "Gói API Key",
  price: "80.000",
  period: "tháng",
  features: [
    "GPT-5.4 & Codex-5.3",
    "Không giới hạn request/tháng",
    "Hỗ trợ cài đặt OpenClaw từ đầu",
    "Thanh toán bằng VNĐ",
    "Hỗ trợ qua Zalo/Telegram",
    "Bảo hành 30 ngày – hoàn tiền 100%",
  ],
};

export default function Pricing() {
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
      <section
        id="pricing"
        className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Bảng giá
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Giá <span className="gradient-text">cố định 80K/tháng</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-xl mx-auto">
                Một gói duy nhất – tất cả tính năng. Không phí ẩn, không chia
                gói. Giảm 15% cho lần đầu mua!
              </p>
            </div>
          </div>

          <div className="section-fade opacity-0">
            <div className="relative bg-white rounded-2xl border-2 border-primary-500 shadow-xl shadow-primary-500/10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-amber-500" />

              <div className="text-center pt-10 pb-6 px-6 lg:px-10">
                <h3 className="text-xl font-bold text-secondary-800 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-5xl lg:text-6xl font-extrabold text-primary-600">
                    {plan.price}
                  </span>
                  <div className="text-left">
                    <span className="text-secondary-400 text-lg font-semibold block">
                      VNĐ
                    </span>
                    <span className="text-secondary-400 text-sm">/tháng</span>
                  </div>
                </div>
                <span className="inline-block mt-3 bg-accent-100 text-accent-700 text-sm font-bold px-4 py-1.5 rounded-full">
                  Giảm 15% lần đầu cài đặt
                </span>
              </div>

              <div className="px-6 lg:px-10 pb-2">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-secondary-600"
                    >
                      <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 lg:px-10 pb-8 pt-6">
                <a
                  href="https://routerapi.vovantin.online/"
                  className="block w-full text-center bg-primary-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 active:translate-y-0 text-lg"
                >
                  Mua ngay
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </a>
                <div className="flex items-center justify-center gap-2 mt-4 text-secondary-400 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Bảo hành hoàn tiền 30 ngày</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section-fade opacity-0 mt-8 text-center">
            <p className="text-secondary-500 text-sm flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-primary-500" />
              Giới thiệu bạn bè – giảm thêm{" "}
              <strong className="text-primary-600">10%/người/tháng</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

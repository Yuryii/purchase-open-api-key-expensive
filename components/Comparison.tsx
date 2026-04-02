"use client";

import { useEffect, useRef } from "react";
import { Check, X, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import pricingConfig from "@/config/pricing.json";

const comparisonRows = [
  { feature: "Model GPT-5.4 & Codex-5.3", openclaw: true, chatgpt: false, note: "ChatGPT Plus chỉ có GPT-4o" },
  { feature: "Không giới hạn request/tháng", openclaw: true, chatgpt: false, note: "ChatGPT Plus giới hạn ~200 msg/3h" },
  { feature: "Thanh toán bằng VNĐ", openclaw: true, chatgpt: false, note: "Cần thẻ quốc tế hoặc tài khoản tổ chức" },
  { feature: "Không cần VPN", openclaw: true, chatgpt: false, note: "ChatGPT Plus cần VPN ổn định" },
  { feature: "Hỗ trợ tiếng Việt ưu tiên", openclaw: true, chatgpt: false, note: "" },
  { feature: "Cài đặt miễn phí từ đầu", openclaw: true, chatgpt: false, note: "" },
  { feature: "Refund 30 ngày", openclaw: true, chatgpt: false, note: "ChatGPT Plus không hoàn tiền" },
  { feature: "Hỗ trợ qua Zalo/Telegram", openclaw: true, chatgpt: false, note: "" },
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
      <section id="comparison" className="py-20 lg:py-28 bg-slate-50 overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                So sánh
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Tại sao chọn{" "}
                <span className="gradient-text">OpenClaw?</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                So sánh chi tiết với ChatGPT Plus – đâu là lựa chọn tốt hơn cho bạn?
              </p>
            </div>
          </div>

          <div className="section-fade opacity-0 overflow-x-auto pt-2">
            <div className="min-w-[600px] pt-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div />
                <div className="text-center">
                  <div className="bg-white rounded-2xl border-2 border-primary-500 shadow-lg p-5 relative z-0">
                    <span className="absolute -top-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md ring-4 ring-slate-50">
                      KHUYÊN DÙNG
                    </span>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Sparkles className="w-5 h-5 text-primary-600" />
                      <span className="font-extrabold text-secondary-800 text-lg">
                        OpenClaw
                      </span>
                    </div>
                    <p className="text-3xl font-extrabold text-primary-600">
                      {pricingConfig.sellPrice / 1000}K
                    </p>
                    <p className="text-sm text-secondary-400">VNĐ/tháng</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 opacity-80">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Zap className="w-5 h-5 text-secondary-400" />
                      <span className="font-extrabold text-secondary-800 text-lg">
                        ChatGPT Plus
                      </span>
                    </div>
                    <p className="text-3xl font-extrabold text-secondary-400">
                      ~590K
                    </p>
                    <p className="text-sm text-secondary-400">VNĐ/tháng</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={cn(
                      "grid grid-cols-3 gap-4 px-6 py-4 items-center",
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    )}
                  >
                    <div>
                      <p className="font-semibold text-secondary-700 text-sm lg:text-base">
                        {row.feature}
                      </p>
                      {row.note && (
                        <p className="text-xs text-secondary-400 mt-0.5">
                          {row.note}
                        </p>
                      )}
                    </div>
                    <div className="text-center">
                      {row.openclaw ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-100">
                          <Check className="w-5 h-5 text-accent-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100">
                          <X className="w-5 h-5 text-slate-300" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      {row.chatgpt ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-100">
                          <Check className="w-5 h-5 text-accent-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                          <X className="w-5 h-5 text-red-600 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/mua-hang"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 text-lg"
                >
                  Mua ngay – chỉ {pricingConfig.sellPrice / 1000}K/tháng
                  <Check className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

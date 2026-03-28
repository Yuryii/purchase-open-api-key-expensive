"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check, Users, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const referralLevels = [
  { count: 1, discount: "10%", label: "1 người" },
  { count: 3, discount: "30%", label: "3 người" },
  { count: 5, discount: "50%", label: "5 người" },
  { count: 10, discount: "100%", label: "10 người (Miễn phí!)" },
];

export default function ReferralProgram() {
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState("");
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

  const handleCopy = () => {
    const link = `https://openclaw.vn/ref/${referralCode || "OPENCLAW2024"}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div ref={sectionRef}>
      <section className="py-20 lg:py-28 gradient-bg text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="section-fade opacity-0">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Users className="w-4 h-4" />
                Chương trình giới thiệu
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Giới thiệu nhận hoa hồng –{" "}
                <span className="text-primary-400">Giảm 10%/tháng!</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Mỗi người bạn mua thành công, bạn được giảm <strong>10%</strong>{" "}
                phí mỗi tháng. Giới thiệu càng nhiều, phí càng giảm.
                Tối đa lên đến <strong className="text-primary-400">miễn phí hoàn toàn!</strong>
              </p>

              <div className="space-y-4 mb-8">
                {referralLevels.map((level) => (
                  <div
                    key={level.count}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
                      level.count === 5
                        ? "bg-white/20 border border-primary-400/50"
                        : "bg-white/5 hover:bg-white/10"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg",
                        level.count === 5 ? "bg-primary-600" : "bg-white/10"
                      )}
                    >
                      {level.count}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{level.label}</p>
                      <p className="text-sm text-white/60">bạn bè mua thành công</p>
                    </div>
                    <div
                      className={cn(
                        "text-2xl font-extrabold",
                        level.count === 10 ? "text-primary-400" : "text-white"
                      )}
                    >
                      -{level.discount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-fade opacity-0" style={{ transitionDelay: "200ms" }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-bold">Chia sẻ link giới thiệu</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Mã giới thiệu của bạn
                    </label>
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      placeholder="Nhập mã giới thiệu hoặc bỏ trống"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Link giới thiệu của bạn
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={`https://openclaw.vn/ref/${referralCode || "OPENCLAW2024"}`}
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/80 text-sm focus:outline-none"
                      />
                      <button
                        onClick={handleCopy}
                        className={cn(
                          "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300",
                          copied
                            ? "bg-accent-500 text-white"
                            : "bg-primary-600 text-white hover:bg-primary-700 hover:-translate-y-0.5"
                        )}
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Đã copy!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="text-sm text-white/60 mb-1">
                      Hoa hồng của bạn
                    </p>
                    <p className="text-2xl font-extrabold text-primary-400">
                      10% / người / tháng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

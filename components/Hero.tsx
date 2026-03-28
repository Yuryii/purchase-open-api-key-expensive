"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Star, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const trustBadges = [
  { icon: Star, label: "500+ người dùng" },
  { icon: ShieldCheck, label: "Bảo hành 30 ngày" },
  { icon: Clock, label: "Hỗ trợ 24/7" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="section-fade">
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                <span>Giảm 15% lần đầu cài đặt!</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-800 leading-tight mb-6">
                Trải nghiệm{" "}
                <span className="gradient-text">GPT-5.4 & Codex-5.3</span>{" "}
                không giới hạn
                <br />
                <span className="text-primary-600">Chỉ 80K/tháng</span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Hỗ trợ cài đặt OpenClaw miễn phí, dùng ngay model mới nhất mà
                không cần tài khoản quốc tế. Thanh toán bằng VNĐ cực kỳ tiện lợi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="/mua-hang"
                  className="btn-primary text-base px-8 py-4 rounded-xl shadow-lg shadow-primary-600/25"
                >
                  Mua ngay – 80K
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#installation"
                  className="btn-secondary text-base px-8 py-4 rounded-xl"
                >
                  Xem hướng dẫn cài đặt
                </a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm text-secondary-500"
                  >
                    <Icon className="w-5 h-5 text-accent-500" />
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden animate-float">
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                    OpenClaw – GPT-5.4
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-slate-100 rounded-xl p-4 text-sm">
                    <p className="text-slate-500 text-xs mb-1">User</p>
                    <p className="text-secondary-700">
                      Viết cho tôi một đoạn code Python để sort một array
                    </p>
                  </div>
                  <div className="bg-primary-600 rounded-xl p-4 text-sm">
                    <p className="text-white/70 text-xs mb-1">GPT-5.4</p>
                    <pre className="text-white text-xs overflow-x-auto">
{`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`}
                    </pre>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-accent-500">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Response time: 0.8s · Tokens used: 128</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg animate-bounce-slow">
                +GPT-5.4
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

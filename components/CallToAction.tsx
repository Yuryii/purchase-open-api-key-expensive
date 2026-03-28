"use client";

import { useState, useEffect, useRef } from "react";
import { Send, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div ref={sectionRef}>
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Ưu đãi giới hạn
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Sẵn sàng trải nghiệm{" "}
            <span className="text-amber-300">GPT-5.4 & Codex-5.3</span>?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Đăng ký hôm nay – Giảm <strong className="text-white">15%</strong>{" "}
            + hỗ trợ cài đặt miễn phí. Không phí ẩn, không cam kết.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="flex-1 px-5 py-4 rounded-xl text-secondary-800 placeholder:text-secondary-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-lg"
            />
            <button
              type="submit"
              className={cn(
                "flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg",
                submitted
                  ? "bg-accent-500 text-white"
                  : "bg-secondary-800 text-white hover:bg-secondary-900 hover:-translate-y-0.5"
              )}
            >
              {submitted ? (
                "Đã gửi!"
              ) : (
                <>
                  Gửi cho tôi
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <a
            href="/mua-hang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
          >
            Mua ngay
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import {
  Code2,
  FileText,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Globe,
  Bot,
  Database,
  PenTool,
  Brain,
} from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Viết & debug code",
    description: "Tạo function, sửa bug, review code nhanh chóng với Codex-5.3.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "Soạn email & văn bản",
    description: "Viết email chuyên nghiệp, proposal, hợp đồng bằng tiếng Việt.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Phân tích dữ liệu",
    description: "Xử lý, phân tích và trực quan hóa dữ liệu với Python script.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Hỗ trợ khách hàng",
    description: "Tạo chatbot, trả lời tự động, giảm 80% chi phí vận hành.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Lightbulb,
    title: "Brainstorm ý tưởng",
    description: "Đưa ra ý tưởng sáng tạo, lên kế hoạch dự án trong vài giây.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Globe,
    title: "Dịch thuật & ngôn ngữ",
    description: "Dịch tài liệu, viết content đa ngôn ngữ chính xác cao.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Bot,
    title: "Xây dựng AI agent",
    description: "Tạo autonomous agent tự động hóa workflows phức tạp.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Database,
    title: "Quản lý cơ sở dữ liệu",
    description: "Viết SQL query, thiết kế schema, tối ưu hiệu suất database.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: PenTool,
    title: "Sáng tạo nội dung",
    description: "Viết blog, script video, caption social media, quảng cáo.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Brain,
    title: "Học tập & nghiên cứu",
    description: "Giải thích khái niệm phức tạp, tóm tắt paper, ôn tập hiệu quả.",
    color: "bg-violet-100 text-violet-600",
  },
];

export default function UseCases() {
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
      <section id="use-cases" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Trường hợp sử dụng
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                GPT-5.4 & Codex-5.3{" "}
                <span className="gradient-text">làm được gì?</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                Không giới hạn request – dùng bao nhiêu tùy bạn, không lo phí phát sinh
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="section-fade opacity-0 bg-slate-50 rounded-2xl p-5 border border-slate-100 card-hover text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${uc.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <uc.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-secondary-800 mb-2 text-sm lg:text-base">
                  {uc.title}
                </h3>
                <p className="text-xs lg:text-sm text-secondary-500 leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>

          <div className="section-fade opacity-0 text-center mt-12">
            <p className="text-secondary-500 text-sm">
              Và còn rất nhiều trường hợp sử dụng khác — dùng không giới hạn, giá chỉ{" "}
              <strong className="text-primary-600">150K/tháng</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

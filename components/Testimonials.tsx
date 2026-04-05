"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Minh Phạm",
    role: "Full-stack Developer",
    company: "Freelancer",
    avatar: "MP",
    avatarBg: "bg-blue-500",
    content:
      "Mình dùng OpenClaw thay thế ChatGPT Plus tiết kiệm được gần 500K/tháng. Models mạnh, response nhanh, tích hợp Cursor IDE cực kỳ tiện. Đội ngũ hỗ trợ cài đặt tận tình trong 10 phút.",
    rating: 5,
  },
  {
    name: "Huy Nguyễn",
    role: "AI Engineer",
    company: "Tech Startup",
    avatar: "HN",
    avatarBg: "bg-emerald-500",
    content:
      "Dùng cho pipeline AI của startup. Ưu điểm lớn nhất là thanh toán VNĐ qua Momo, không cần thẻ quốc tế. Key hoạt động ổn định, chưa gặp lỗi nào đáng kể.",
    rating: 5,
  },
  {
    name: "Thanh Trần",
    role: "Content Creator",
    company: "YouTube Channel",
    avatar: "TT",
    avatarBg: "bg-purple-500",
    content:
      "Dùng GPT-5.4 để viết script và tạo ý tưởng nội dung. Chất lượng output rất tốt, đặc biệt khi prompt bằng tiếng Việt. Đã giới thiệu cho 3 bạn bè cùng mua.",
    rating: 5,
  },
  {
    name: "Lan Đặng",
    role: "Data Analyst",
    company: "Finance Corp",
    avatar: "LD",
    avatarBg: "bg-amber-500",
    content:
      "Dùng Codex-5.3 để viết Python script xử lý dữ liệu. Tốc độ nhanh, context window dài, không giới hạn request như các gói khác. Giá 180K thì quá rẻ so với giá trị mang lại.",
    rating: 5,
  },
  {
    name: "Quang Lê",
    role: "Backend Developer",
    company: "Agency",
    avatar: "QL",
    avatarBg: "bg-rose-500",
    content:
      "Đã dùng 6 tháng, chưa có ngày nào bị gián đoạn. Tích hợp Postman test API rất dễ. Refund policy 30 ngày cũng là điểm cộng lớn cho người mới thử.",
    rating: 5,
  },
];

export default function Testimonials() {
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
      <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Đánh giá
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Khách hàng nói gì về{" "}
                <span className="gradient-text">OpenClaw?</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                Hơn 500+ người dùng đã tin tưởng sử dụng OpenClaw mỗi ngày
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={cn(
                  "section-fade opacity-0 bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 card-hover relative",
                  i === 0 && "md:col-span-2 lg:col-span-1 lg:row-span-2"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-200" />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg",
                      t.avatarBg
                    )}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-secondary-800">{t.name}</p>
                    <p className="text-sm text-secondary-400">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-secondary-600 leading-relaxed text-sm lg:text-base">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="section-fade opacity-0 text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-secondary-500 text-sm px-5 py-2.5 rounded-full">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Được đánh giá <strong className="text-secondary-700">5.0/5.0</strong> bởi hơn 200+ người dùng</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

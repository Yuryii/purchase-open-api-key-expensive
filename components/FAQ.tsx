"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Tôi chưa biết gì về OpenClaw, có khó không?",
    answer:
      "Hoàn toàn không! Chúng tôi hỗ trợ cài đặt từ đầu, kể cả khi bạn chưa biết gì về công nghệ. Chỉ cần làm theo 6 bước đơn giản hoặc nhắn tin Zalo để được hỗ trợ riêng.",
  },
  {
    question: "Tôi cần chuẩn bị gì để bắt đầu?",
    answer:
      "Bạn chỉ cần một máy tính (Windows/Mac/Linux) và điện thoại để thanh toán. Không cần thẻ tín dụng quốc tế, không cần tài khoản OpenAI. Tất cả đã có sẵn trong gói dịch vụ.",
  },
  {
    question: "Key API có hoạt động ngay không?",
    answer:
      "Có! Sau khi thanh toán, bạn sẽ nhận được API key qua Zalo hoặc email trong vòng 5 phút. Key được kích hoạt ngay và sẵn sàng sử dụng 100%.",
  },
  {
    question: "Nếu key bị lỗi thì sao?",
    answer:
      "Chúng tôi cam kết bảo hành 30 ngày. Nếu key không hoạt động vì bất kỳ lý do gì, chúng tôi sẽ đổi key mới hoặc hoàn tiền 100% – không hỏi lý do.",
  },
  {
    question: "Tôi có thể nâng cấp gói không?",
    answer:
      "Hoàn toàn có thể! Bạn có thể nâng cấp gói bất kỳ lúc nào qua Zalo/Telegram. Chênh lệch giá sẽ được tính theo tỷ lệ ngày còn lại trong tháng.",
  },
  {
    question: "Tokens là gì? 1 tháng dùng được bao nhiêu?",
    answer:
      "Tokens là đơn vị tính phí cho mỗi câu hỏi/trả lời. 1 token ≈ 0.75 từ tiếng Anh hoặc 1-2 ký tự tiếng Việt. Gói Starter (50K tokens) đủ cho khoảng 1,000-2,000 câu hỏi thông thường. Gói Pro (1M tokens) đủ cho sử dụng liên tục cả tháng.",
  },
  {
    question: "Có cần thẻ tín dụng quốc tế không?",
    answer:
      "Không! Bạn có thể thanh toán qua chuyển khoản ngân hàng Vietcombank, Momo, hoặc ZaloPay – hoàn toàn bằng VNĐ, không cần thẻ quốc tế.",
  },
  {
    question: "Thanh toán bằng cách nào?",
    answer:
      "Chúng tôi hỗ trợ: Chuyển khoản ngân hàng Vietcombank (STK: 123456789 – Nguyễn Văn A), Momo (0901234567), hoặc ZaloPay. Sau khi chuyển khoản, nhắn tin xác nhận qua Zalo để nhận key ngay.",
  },
  {
    question: "Giới thiệu bạn bè như thế nào?",
    answer:
      "Rất đơn giản! Đăng nhập tài khoản, lấy link giới thiệu từ trang Tài khoản, chia sẻ cho bạn bè. Mỗi khi có người mua thành công qua link của bạn, bạn được giảm 10% phí mỗi tháng.",
  },
  {
    question: "OpenClaw là gì? Khác gì ChatGPT?",
    answer:
      "OpenClaw là công cụ giúp bạn truy cập API của OpenAI (công nghệ đằng sau ChatGPT) một cách dễ dàng. Khác với ChatGPT (phải trả phí thuê bao hàng tháng), OpenClaw cho phép bạn trả theo lượng sử dụng thực tế (tokens), linh hoạt và tiết kiệm hơn.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Câu hỏi <span className="gradient-text">thường gặp</span>
              </h2>
              <p className="text-lg text-secondary-500">
                Không tìm thấy câu trả lời? Liên hệ Zalo ngay!
              </p>
            </div>
          </div>

          <div className="section-fade opacity-0 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-primary-200 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-secondary-400 flex-shrink-0 transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-5 text-secondary-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

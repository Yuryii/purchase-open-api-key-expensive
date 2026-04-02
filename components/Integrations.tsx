"use client";

import { useEffect, useRef } from "react";
import { Code2, Terminal, Layers, FlaskConical, Globe2 } from "lucide-react";

const integrations = [
  {
    name: "Cursor IDE",
    description: "AI coding assistant tích hợp sẵn GPT-5.4 & Codex-5.3",
    icon: "C",
    bg: "bg-blue-600",
  },
  {
    name: "VS Code",
    description: "Cài đặt qua extension Copilot-like experience",
    icon: "VS",
    bg: "bg-blue-500",
  },
  {
    name: "Claude App",
    description: "Desktop app cho conversation và workspace",
    icon: "CA",
    bg: "bg-amber-500",
  },
  {
    name: "Postman",
    description: "Test API, gửi request và xem response trực tiếp",
    icon: "P",
    bg: "bg-orange-500",
  },
  {
    name: "Python",
    description: "Dùng via API trong script, Jupyter Notebook, automation",
    icon: "Py",
    bg: "bg-yellow-500",
  },
  {
    name: "Node.js",
    description: "Tích hợp vào backend, chatbot, webhook, serverless",
    icon: "JS",
    bg: "bg-green-600",
  },
  {
    name: "curl / API",
    description: "Gọi trực tiếp từ terminal bằng bất kỳ ngôn ngữ nào",
    icon: "cURL",
    bg: "bg-slate-600",
  },
  {
    name: "Web / Browser",
    description: "Dùng qua API endpoint REST – hoạt động mọi nền tảng",
    icon: "WEB",
    bg: "bg-purple-600",
  },
];

export default function Integrations() {
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
      <section id="integrations" className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-fade opacity-0">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Tích hợp
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary-800 mb-4">
                Hoạt động trên{" "}
                <span className="gradient-text">mọi nền tảng</span>
              </h2>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                REST API chuẩn – dùng được với Cursor, VS Code, Python, Node.js, Postman...
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {integrations.map((integ, i) => (
              <div
                key={integ.name}
                className="section-fade opacity-0 bg-white rounded-2xl p-5 border border-slate-200 card-hover flex items-start gap-4"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${integ.bg} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}
                >
                  {integ.icon}
                </div>
                <div>
                  <h3 className="font-bold text-secondary-800 mb-1">
                    {integ.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-secondary-500 leading-relaxed">
                    {integ.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-fade opacity-0 mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200">
              <Code2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-secondary-700">
                Code completion
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200">
              <Terminal className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-secondary-700">
                Streaming response
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200">
              <Globe2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-secondary-700">
                HTTPS – bảo mật
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

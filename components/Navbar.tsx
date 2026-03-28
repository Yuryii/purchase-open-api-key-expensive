"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Tính năng", href: "#features" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Hướng dẫn", href: "#installation" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-secondary-800">
                OpenClaw
              </span>
              <span className="font-bold text-lg text-primary-600"> VN</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-primary-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://routerapi.vovantin.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Mua ngay
            </a>
          </div>

          <button
            className="md:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 origin-top",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <a
              href="https://routerapi.vovantin.online/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-primary-600 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 hover:bg-primary-700"
            >
              Mua ngay
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

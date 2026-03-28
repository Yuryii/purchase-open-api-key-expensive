import { Zap, Mail, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "Liên kết nhanh",
    links: [
      { label: "Trang chủ", href: "#" },
      { label: "Tính năng", href: "#features" },
      { label: "Bảng giá", href: "#pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Hướng dẫn", href: "#installation" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Chính sách",
    links: [
      { label: "Chính sách bảo mật", href: "#" },
      { label: "Điều khoản sử dụng", href: "#" },
      { label: "Chính sách hoàn tiền", href: "#" },
      { label: "Chính sách bảo hành", href: "#" },
      { label: "Chính sách huấn luyện AI", href: "/chinh-sach-huan-luyen-ai" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">OpenClaw</span>
                <span className="font-bold text-lg text-primary-400"> VN</span>
              </div>
            </div>
            <p className="text-secondary-400 leading-relaxed mb-6 max-w-md">
              Dịch vụ API OpenAI chính hãng cho người dùng Việt Nam. Hỗ trợ
              cài đặt OpenClaw, thanh toán VNĐ, không cần thẻ quốc tế.
            </p>
            <div className="space-y-3">
              <a
                href="https://zalo.me/g/vtogvm532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-400 hover:text-primary-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>Nhóm Zalo mua hàng</span>
              </a>
              <a
                href="https://routerapi.vovantin.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@openclaw.vn</span>
              </a>
              <a
                href="https://routerapi.vovantin.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Telegram: @openclawvn</span>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold text-white mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-bold text-white mb-4">Thông tin thanh toán</h4>
            <div className="space-y-3">
              <div className="bg-secondary-800 rounded-xl p-4">
                <p className="text-xs text-secondary-400 mb-1">Ngân hàng</p>
                <p className="text-sm font-semibold text-white">
                  Vietcombank
                </p>
                <p className="text-xs text-secondary-400 mt-1">
                  STK: 1048465414
                </p>
                <p className="text-xs text-secondary-400">
                  Võ Văn Tín – Chi nhánh Biên Hòa
                </p>
              </div>
              <div className="bg-secondary-800 rounded-xl p-4">
                <p className="text-xs text-secondary-400 mb-1">Ví điện tử</p>
                <p className="text-sm font-semibold text-white">Momo</p>
                <p className="text-xs text-secondary-400">
                  SĐT: 0372040759
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-500 text-sm">
            © 2026 OpenClaw VN. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-1 text-xs text-secondary-600">
            <span>Made with</span>
            <span className="text-red-500">❤</span>
            <span>in Vietnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

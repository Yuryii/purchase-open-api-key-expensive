import { MessageCircle, ChevronRight } from "lucide-react";

export default function ZaloCommunityBanner() {
  return (
    <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="inline-block text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              Cộng đồng OpenClaw
            </p>
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2 leading-snug">
              Tham gia group Zalo để được hướng dẫn thanh toán &amp; cài đặt
            </h3>
            <p className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
              Gặp khó khăn khi cài đặt hoặc chưa biết cách thanh toán? Đội ngũ
              hỗ trợ viên sẵn sàng giải đáp và hướng dẫn bạn từng bước trong nhóm
              Zalo — miễn phí, nhanh chóng, tận tâm.
            </p>
          </div>
          <div className="flex-shrink-0 sm:w-auto relative z-10">
            <a
              href="https://zalo.me/g/vtogvm532"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl w-full sm:w-auto whitespace-nowrap cursor-pointer"
            >
              <span>Tham gia ngay</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

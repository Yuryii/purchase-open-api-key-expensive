import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Brain,
  BookOpen,
  Scale,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title:
    "Chính sách huấn luyện AI - OpenClaw VN | Chỉ dùng cho mục đích huấn luyện, không train data",
  description:
    "Chính sách sử dụng API OpenClaw VN: Chỉ dùng key cho mục đích huấn luyện AI, cấm train data, cấm fine-tuning trên dữ liệu người dùng. Bảo vệ quyền lợi khách hàng.",
};

const sections = [
  {
    id: "cam-quyen-dinh",
    icon: XCircle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Hành vi bị cấm tuyệt đối",
    description:
      "Các hoạt động sau đây vi phạm nghiêm trọng chính sách và dẫn đến khóa tài khoản vĩnh viễn mà không hoàn tiền:",
    items: [
      {
        title: "Sử dụng API để train/fine-tune mô hình AI",
        detail:
          "Tuyệt đối cấm sử dụng bất kỳ output nào từ API để huấn luyện, fine-tune,蒸馏 (distill), hoặc cải thiện bất kỳ mô hình AI nào — bao gồm cả mô hình nội bộ và mô hình công khai.",
      },
      {
        title: "Thu thập dữ liệu để xây dựng tập dữ liệu huấn luyện",
        detail:
          "Cấm sử dụng API để tạo ra tập dữ liệu (dataset) phục vụ mục đích huấn luyện mô hình AI. Mọi dữ liệu sinh ra từ API chỉ được sử dụng cho ứng dụng cuối (end-user application).",
      },
      {
        title: "Sử dụng API để tạo dữ liệu train cho bên thứ ba",
        detail:
          "Không được dùng API để sản sinh nội dung, câu trả lời, code, hoặc bất kỳ dữ liệu nào nhằm bán, chia sẻ, hoặc cung cấp cho bên thứ ba phục vụ mục đích huấn luyện AI.",
      },
      {
        title: "Reverse engineering mô hình",
        detail:
          "Cấm mọi hành vi dùng API để thu thập dữ liệu nhằm phân tích, sao chép, hoặc tái tạo chức năng của mô hình AI gốc.",
      },
      {
        title: "Bypass hoặc đánh cắp credits/quota",
        detail:
          "Cấm mọi hành vi khai thác lỗ hổng hệ thống, chia sẻ key cho nhiều người, hoặc sử dụng key cho mục đích khác với đăng ký ban đầu.",
      },
    ],
    warning:
      "Vi phạm bất kỳ điều nào trong mục này sẽ bị khóa tài khoản ngay lập tức, toàn bộ credits bị confiscate, và không được hoàn tiền. OpenClaw VN có quyền theo dõi và phát hiện hành vi vi phạm thông qua log và usage pattern.",
  },
  {
    id: "muc-dich-su-dung",
    icon: CheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Mục đích sử dụng hợp lệ",
    description:
      "Các hoạt động sau đây được phép sử dụng API OpenClaw VN, miễn là tuân thủ Điều khoản sử dụng chung:",
    items: [
      {
        title: "Ứng dụng end-user (người dùng cuối)",
        detail:
          "Sử dụng API để xây dựng ứng dụng phục vụ người dùng cuối: chatbot, trợ lý ảo, công cụ hỗ trợ viết, tóm tắt tài liệu, dịch thuật, v.v.",
      },
      {
        title: "Hỗ trợ công việc và học tập cá nhân",
        detail:
          "Dùng API để hỗ trợ nghiên cứu, học tập, làm việc văn phòng, lập trình, viết bài, phân tích dữ liệu — phục vụ mục đích cá nhân hoặc doanh nghiệp.",
      },
      {
        title: "Xử lý và phân tích dữ liệu doanh nghiệp",
        detail:
          "Sử dụng API để xử lý dữ liệu nội bộ của doanh nghiệp (phân tích báo cáo, hỗ trợ khách hàng, tự động hóa quy trình) — không dùng để huấn luyện mô hình.",
      },
      {
        title: "Tạo nội dung sáng tạo và thương mại",
        detail:
          "Dùng API để tạo nội dung thương mại: viết bài blog, copy quảng cáo, sản xuất nội dung marketing, miễn là nội dung đó phục vụ người dùng cuối.",
      },
      {
        title: "Debugging và hỗ trợ lập trình",
        detail:
          "Dùng Codex-5.3 hoặc GPT-5.4 để debug, review code, giải thích code, viết documentation — phục vụ mục đích phát triển phần mềm.",
      },
    ],
  },
  {
    id: "tai-khoan-quyen",
    icon: Scale,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Quyền và trách nhiệm",
    description: "Các quy định về quyền sở hữu dữ liệu và trách nhiệm của các bên:",
    items: [
      {
        title: "Quyền sở hữu dữ liệu đầu vào",
        detail:
          "Bạn giữ toàn quyền sở hữu mọi dữ liệu, câu hỏi, tài liệu mà bạn gửi qua API (input/prompt). OpenClaw VN không sử dụng dữ liệu này cho bất kỳ mục đích huấn luyện nào.",
      },
      {
        title: "Quyền sở hữu output",
        detail:
          "Bạn giữ quyền sở hữu nội dung do API tạo ra (output/completion), có thể sử dụng cho mục đích thương mại hoặc cá nhân, trừ các hạn chế trong phần 'Hành vi bị cấm'.",
      },
      {
        title: "Trách nhiệm của người dùng",
        detail:
          "Người dùng chịu trách nhiệm về nội dung được tạo ra từ API, đảm bảo tuân thủ pháp luật Việt Nam và quốc tế, không vi phạm bản quyền, quyền riêng tư của bên thứ ba.",
      },
      {
        title: "Trách nhiệm của OpenClaw VN",
        detail:
          "OpenClaw VN đảm bảo API hoạt động ổn định, hỗ trợ kỹ thuật 24/7, và áp dụng các biện pháp bảo mật tối ưu cho dữ liệu của người dùng.",
      },
    ],
  },
  {
    id: "phan-hoi",
    icon: Shield,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "Giám sát và xử lý vi phạm",
    description:
      "OpenClaw VN áp dụng các biện pháp giám sát và xử lý vi phạm như sau:",
    items: [
      {
        title: "Hệ thống giám sát usage",
        detail:
          "Chúng tôi theo dõi usage pattern, request volume, và behavior analysis để phát hiện các hoạt động bất thường hoặc vi phạm chính sách.",
      },
      {
        title: "Quy trình xử lý vi phạm",
        detail:
          "Khi phát hiện vi phạm: (1) Cảnh báo qua email/Zalo, (2) Tạm khóa tài khoản 7 ngày để điều tra, (3) Khóa vĩnh viễn nếu vi phạm được xác nhận hoặc tái phạm.",
      },
      {
        title: "Quyền khiếu nại",
        detail:
          "Nếu bạn bị khóa tài khoản oan, có quyền khiếu nại trong vòng 14 ngày qua email support@openclaw.vn. Chúng tôi sẽ xem xét và phản hồi trong 48 giờ.",
      },
      {
        title: "Bồi thường",
        detail:
          "Trong trường hợp khóa nhầm do lỗi hệ thống, OpenClaw VN sẽ hoàn lại credits còn lại hoặc mở khóa tài khoản tùy tình huống.",
      },
    ],
  },
  {
    id: "cam-ket",
    icon: Brain,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Cam kết của OpenClaw VN",
    description:
      "Chúng tôi cam kết bảo vệ hệ sinh thái AI lành mạnh và công bằng cho tất cả người dùng:",
    items: [
      {
        title: "Không train trên dữ liệu người dùng",
        detail:
          "OpenClaw VN cam kết KHÔNG BAO GIỜ sử dụng dữ liệu, prompt, hoặc output của người dùng để huấn luyện, cải thiện, hoặc phát triển bất kỳ mô hình AI nào.",
      },
      {
        title: "Minh bạch nguồn gốc API",
        detail:
          "API OpenClaw VN được kết nối trực tiếp đến các nhà cung cấp AI uy tín, không có hidden model, không gian lận chất lượng. Đây là cam kết thương hiệu.",
      },
      {
        title: "Hỗ trợ người dùng sử dụng đúng mục đích",
        detail:
          "Đội ngũ OpenClaw VN sẵn sàng tư vấn nếu bạn không chắc chắn về việc sử dụng API có nằm trong chính sách cho phép hay không.",
      },
      {
        title: "Cập nhật chính sách",
        detail:
          "Chính sách này có thể được cập nhật theo thời gian. Thông báo sẽ được gửi qua email và niêm yết trên website. Sử dụng API sau khi có thông báo = đồng ý với chính sách mới.",
      },
    ],
  },
];

export default function AITrainingPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-amber-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Chính sách quan trọng
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-800 mb-6">
              Chính sách{" "}
              <span className="gradient-text">Huấn luyện AI</span>
            </h1>
            <p className="text-lg text-secondary-500 max-w-3xl mx-auto leading-relaxed">
              Mua API key OpenClaw VN chỉ dùng cho mục đích huấn luyện AI.
              Tuyệt đối cấm sử dụng API để train data, fine-tune model, hoặc
              xây dựng tập dữ liệu huấn luyện. Vi phạm sẽ bị khóa tài khoản
              vĩnh viễn.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="pb-12 -mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800 text-sm mb-1">
                  Cấm tuyệt đối
                </p>
                <p className="text-red-700 text-xs leading-relaxed">
                  Train model, fine-tune, thu thập dữ liệu train
                </p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-green-800 text-sm mb-1">
                  Được phép
                </p>
                <p className="text-green-700 text-xs leading-relaxed">
                  Ứng dụng end-user, hỗ trợ công việc, tạo nội dung
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 sm:col-span-2 lg:col-span-1">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 text-sm mb-1">
                  Hình thức xử lý
                </p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Vi phạm → Khóa vĩnh viễn, không hoàn tiền, confisticate credits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isOdd = idx % 2 !== 0;
              return (
                <div
                  key={section.id}
                  className={cn(
                    "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",
                    isOdd ? "border-l-4 border-l-primary-500" : "border-l-4 border-l-slate-300"
                  )}
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                          section.iconBg
                        )}
                      >
                        <Icon className={cn("w-6 h-6", section.iconColor)} />
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-secondary-800 mb-2">
                          {section.title}
                        </h2>
                        <p className="text-secondary-500 leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                        >
                          <div className="flex items-start gap-3">
                            <span className="bg-primary-100 text-primary-700 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              {itemIdx + 1}
                            </span>
                            <div>
                              <h4 className="font-bold text-secondary-800 mb-1">
                                {item.title}
                              </h4>
                              <p className="text-secondary-500 text-sm leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {section.warning && (
                      <div className="mt-5 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-red-800 text-sm mb-1">
                            Cảnh báo vi phạm
                          </p>
                          <p className="text-red-700 text-sm leading-relaxed">
                            {section.warning}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <FileText className="w-6 h-6 text-secondary-500" />
              <h2 className="text-xl font-extrabold text-secondary-800">
                Giải thích thuật ngữ
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  term: "Fine-tuning",
                  def: "Quá trình huấn luyện thêm một mô hình AI đã có sẵn trên dữ liệu riêng để tạo ra phiên bản model mới phù hợp hơn với nhu cầu cụ thể.",
                },
                {
                  term: "Train data",
                  def: "Dữ liệu được sử dụng để huấn luyện hoặc cải thiện mô hình AI, bao gồm cả input (prompt) và output (response) từ API.",
                },
                {
                  term: "End-user application",
                  def: "Ứng dụng phục vụ người dùng cuối trực tiếp — ví dụ: chatbot trả lời khách hàng, công cụ viết email, app hỗ trợ học tập.",
                },
                {
                  term: "Reverse engineering",
                  def: "Hành vi sử dụng API để thu thập dữ liệu nhằm phân tích, sao chép, hoặc tái tạo cách hoạt động của mô hình AI gốc.",
                },
                {
                  term: "Distillation",
                  def: "Quá trình tạo ra một mô hình nhỏ hơn bằng cách học từ output của mô hình lớn — một dạng huấn luyện gián tiếp, cũng bị cấm.",
                },
                {
                  term: "Dataset / Corpus",
                  def: "Tập hợp dữ liệu được cấu trúc để phục vụ huấn luyện AI. Không được tạo bằng cách gọi API hàng loạt.",
                },
              ].map((item) => (
                <div key={item.term} className="bg-white rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-primary-700 text-sm mb-1">
                    {item.term}
                  </p>
                  <p className="text-secondary-500 text-xs leading-relaxed">
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Còn thắc mắc về chính sách sử dụng?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Đội ngũ OpenClaw VN sẵn sàng tư vấn nếu bạn không chắc chắn về
              việc sử dụng API có nằm trong chính sách cho phép hay không.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://zalo.me/g/vtogvm532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
              >
                Hỏi qua Zalo
                <ChevronRight className="w-5 h-5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Quay lại trang chủ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

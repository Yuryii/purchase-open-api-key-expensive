"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Eye,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
  Code2,
  Lightbulb,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    id: 1,
    slug: "ai-la-gi-giai-thich-don-gian-cho-nguoi-khong-biet-cong-nghe",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "AI là gì? Giải thích đơn giản cho người không biết gì về công nghệ",
    excerpt:
      "Trí tuệ nhân tạo (AI) nghe có vẻ phức tạp nhưng thực ra rất dễ hiểu. Bài viết này sẽ giải thích AI bằng ngôn ngữ của cuộc sống hàng ngày, không cần kiến thức kỹ thuật.",
    readTime: "5 phút",
    views: 2847,
    date: "20/03/2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    content: `
      <h2>AI – Trí tuệ nhân tạo là gì?</h2>
      <p>Hãy tưởng tượng bạn có một "trợ lý thông minh" có thể học hỏi từ kinh nghiệm và đưa ra quyết định tốt hơn theo thời gian. Đó chính là AI!</p>
      <p>Giống như cách một đứa trẻ học nói – nghe nhiều lần rồi tự nói được, AI cũng "học" từ hàng tỷ câu hỏi và câu trả lời để biết cách phản hồi đúng.</p>

      <h2>Tại sao AI quan trọng?</h2>
      <p>AI giống như một "siêu nhân vật phụ" trong công việc:</p>
      <ul>
        <li><strong>Viết email</strong> – AI giúp soạn thảo nhanh gấp 10 lần</li>
        <li><strong>Phân tích dữ liệu</strong> – Thay bạn đọc hàng nghìn báo cáo trong vài giây</li>
        <li><strong>Học ngoại ngữ</strong> – AI có thể dịch chính xác hơn cả từ điển</li>
        <li><strong>Lên ý tưởng</strong> – Khi bạn bí, AI gợi ý hàng chục hướng đi</li>
      </ul>

      <h2>ChatGPT / GPT là gì?</h2>
      <p>GPT (Generative Pre-trained Transformer) là "bộ não" đằng sau các chatbot như ChatGPT. Nó được huấn luyện trên hàng tỷ văn bản từ internet để hiểu và trả lời câu hỏi con người.</p>
      <p>GPT-5.4 là phiên bản mới nhất, mạnh hơn, nhanh hơn và "thông minh" hơn các phiên bản trước rất nhiều.</p>

      <h2>Bạn không cần biết lập trình để dùng AI</h2>
      <p>Đây là điều tuyệt vời nhất: <strong>bạn chỉ cần biết gõ tiếng Việt</strong>. Không cần viết code, không cần cài phần mềm phức tạp. Chỉ cần một tài khoản và kết nối internet.</p>
    `,
  },
  {
    id: 2,
    slug: "5-cach-nhan-vien-van-phong-tiet-kiem-2-gio-moi-ngay-voi-ai",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "5 cách nhân viên văn phòng tiết kiệm 2 giờ mỗi ngày với AI",
    excerpt:
      "Không cần biết code, nhân viên marketing, kế toán, nhân sự đều có thể dùng GPT để tự động hóa công việc nhàm chán. Cùng xem 5 ví dụ thực tế.",
    readTime: "4 phút",
    views: 1934,
    date: "18/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    content: `
      <h2>1. Soạn email trong 30 giây</h2>
      <p>Thay vì ngồi 30 phút suy nghĩ cách diễn đạt, chỉ cần gõ: "Viết email xin nghỉ phép 3 ngày, lý do gia đình có việc bận". GPT sẽ soạn ngay cho bạn, chỉ cần chỉnh sửa vài chỗ.</p>

      <h2>2. Tóm tắt tài liệu dài</h2>
      <p>Có một bản hợp đồng 20 trang? Một bài báo khoa học? Chỉ cần gửi cho GPT và hỏi: "Tóm tắt nội dung chính trong 5 câu". Bạn đọc trong 1 phút thay vì 1 tiếng.</p>

      <h2>3. Lên kế hoạch công việc</h2>
      <p>"Hôm nay tôi cần làm: báo cáo tháng, họp team, gọi điện khách hàng. Sắp xếp lịch trình hợp lý giúp tôi." – GPT sẽ lên lịch cụ thể cho bạn.</p>

      <h2>4. Dịch thuật chuyên nghiệp</h2>
      <p>GPT dịch không chỉ đúng từ vựng mà còn giữ nguyên "phong cách" văn bản – formal, casual, kỹ thuật. Tốt hơn nhiều so với Google Translate.</p>

      <h2>5. Tạo ý tưởng sáng tạo</h2>
      <p>"Gợi ý 10 cách tiếp cận khách hàng mới cho cửa hàng thời trang nam" – GPT sẽ đưa ra danh sách đa dạng, bạn chọn cái phù hợp nhất.</p>
    `,
  },
  {
    id: 3,
    slug: "openclaw-la-gi-tai-sao-developer-viet-nen-dung",
    category: "dev",
    categoryLabel: "Lập trình viên",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "OpenClaw là gì? Tại sao developer Việt nên dùng thay vì API OpenAI trực tiếp?",
    excerpt:
      "OpenClaw hoạt động như một proxy giữa ứng dụng của bạn và API OpenAI gốc, tối ưu chi phí và bỏ qua các rào cản thanh toán quốc tế. Chi tiết về kiến trúc và cách sử dụng.",
    readTime: "8 phút",
    views: 3210,
    date: "15/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    content: `
      <h2>Vấn đề khi dùng OpenAI API trực tiếp</h2>
      <p>Nếu bạn từng thử đăng ký OpenAI API, chắc bạn biết:</p>
      <ul>
        <li>Cần thẻ tín dụng quốc tế (Visa/MasterCard) – không có thẻ Việt Nam</li>
        <li>Chi phí tính theo USD, tỷ giá biến động</li>
        <li>Tài khoản dễ bị blocked nếu IP từ Việt Nam</li>
        <li>Tốc độ sometimes chậm vào giờ cao điểm</li>
      </ul>

      <h2>OpenClaw giải quyết gì?</h2>
      <p>OpenClaw đứng giữa ứng dụng của bạn và OpenAI API, hoạt động như một "cầu nối thông minh":</p>
      <pre><code>// Thay vì gọi OpenAI trực tiếp
const response = await openai.chat.completions.create({
  model: "gpt-5.4",
  messages: [{ role: "user", content: "Hello" }]
});

// Giờ chỉ cần gọi OpenClaw endpoint
const response = await fetch("https://api.openclaw.vn/v1/chat", {
  headers: { "Authorization": \`Bearer \${OPENCLAW_API_KEY}\` },
  body: JSON.stringify({ model: "gpt-5.4", messages })
});</code></pre>

      <h2>Tính năng nổi bật của OpenClaw</h2>
      <ul>
        <li><strong>Tối ưu chi phí</strong> – Gom request nhỏ thành batch, giảm 20-30% chi phí</li>
        <li><strong>Rate limit thông minh</strong> – Tự động retry, queue management</li>
        <li><strong>Logging & Monitoring</strong> – Xem usage, chi phí theo thời gian thực</li>
        <li><strong>Multi-model routing</strong> – Tự động chọn model phù hợp với loại task</li>
      </ul>
    `,
  },
  {
    id: 4,
    slug: "so-sanh-chi-phi-api-openai-goc-vs-openclaw",
    category: "dev",
    categoryLabel: "Lập trình viên",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "So sánh chi phí: API OpenAI gốc vs OpenClaw – thực sự tiết kiệm bao nhiêu?",
    excerpt:
      "Phân tích chi tiết chi phí thực tế khi sử dụng OpenAI API trực tiếp vs qua OpenClaw, bao gồm cả các hidden cost và thời gian tiết kiệm được.",
    readTime: "6 phút",
    views: 1856,
    date: "12/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    content: `
      <h2>Bảng so sánh chi phí</h2>
      <table>
        <tr><th>Tiêu chí</th><th>OpenAI gốc</th><th>OpenClaw</th></tr>
        <tr><td>Giá gốc GPT-5.4</td><td>$0.01/1K tokens</td><td>Tương đương</td></tr>
        <tr><td>Thẻ Visa quốc tế</td><td>Bắt buộc ($25-50/năm)</td><td>Không cần</td></tr>
        <tr><td>Phí chuyển đổi USD</td><td>~3% mỗi lần</td><td>0% (VNĐ)</td></tr>
        <tr><td>Setup ban đầu</td><td>30-60 phút</td><td>5 phút</td></tr>
        <tr><td>Hỗ trợ tiếng Việt</td><td>Không</td><td>24/7 Zalo</td></tr>
      </table>

      <h2>Ví dụ thực tế</h2>
      <p>Ứng dụng chatbot của bạn xử lý 100,000 request/tháng, mỗi request ~500 tokens:</p>
      <ul>
        <li><strong>OpenAI gốc:</strong> 100K × 500 = 50M tokens → ~$500 + phí Visa + phí USD ≈ <strong>$550-600</strong></li>
        <li><strong>OpenClaw:</strong> 50M tokens × quy đổi = ~<strong>80K VND</strong> (~$3)</li>
      </ul>
      <p><em>Tiết kiệm: ~97% chi phí + không mất thời gian setup</em></p>
    `,
  },
  {
    id: 5,
    slug: "gpt-54-nano-vs-mini-vs-full-nen-chon-phien-ban-nao",
    category: "ai-news",
    categoryLabel: "Tin tức AI",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "GPT-5.4 nano vs GPT-5.4 mini vs GPT-5.4: Nên chọn phiên bản nào?",
    excerpt:
      "OpenAI vừa ra mắt 3 biến thể GPT-5.4: nano, mini và bản đầy đủ. Bài viết phân tích điểm mạnh, điểm yếu và use-case phù hợp của từng phiên bản.",
    readTime: "5 phút",
    views: 4102,
    date: "10/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    content: `
      <h2>Tổng quan 3 phiên bản</h2>
      <p>OpenAI giờ cung cấp 3 tier cho GPT-5.4, mỗi tier phù hợp với nhu cầu khác nhau:</p>

      <h2>GPT-5.4 nano – Nhanh & rẻ</h2>
      <p><strong>Đặc điểm:</strong> Model nhẹ nhất, tốc độ cực nhanh, chi phí thấp nhất.</p>
      <p><strong>Phù hợp:</strong> Chatbot đơn giản, tóm tắt text, phân loại, task đơn giản.</p>
      <p><strong>Ví dụ:</strong> "Trả lời câu hỏi khách hàng về giờ mở cửa" – nano là đủ.</p>

      <h2>GPT-5.4 mini – Cân bằng</h2>
      <p><strong>Đặc điểm:</strong> Balance giữa chất lượng và tốc độ, giá hợp lý.</p>
      <p><strong>Phù hợp:</strong> Hầu hết use-case thông thường: viết content, phân tích, hỗ trợ lập trình.</p>
      <p><strong>Ví dụ:</strong> "Viết email marketing 500 từ" – mini cho kết quả rất tốt.</p>

      <h2>GPT-5.4 (full) – Mạnh nhất</h2>
      <p><strong>Đặc điểm:</strong> Chất lượng cao nhất, xử lý task phức tạp, reasoning sâu.</p>
      <p><strong>Phù hợp:</strong> Task phức tạp: phân tích dữ liệu lớn, viết code chuyên sâu, tư vấn chiến lược.</p>
    `,
  },
  {
    id: 6,
    slug: "openai-ra-mat-codex-53-co-gi-moi",
    category: "ai-news",
    categoryLabel: "Tin tức AI",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "OpenAI ra mắt Codex-5.3: Có gì mới so với phiên bản trước?",
    excerpt:
      "Codex-5.3 là model AI chuyên về lập trình của OpenAI. Phiên bản mới nhất có gì cải thiện? Code nhanh hơn, chính xác hơn, và hỗ trợ nhiều ngôn ngữ hơn.",
    readTime: "4 phút",
    views: 2893,
    date: "08/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    content: `
      <h2>Codex là gì?</h2>
      <p>Codex là model AI chuyên biệt cho lập trình, được huấn luyện trên hàng tỷ dòng code. Nó hiểu ngữ cảnh code, có thể đề xuất, viết, và sửa lỗi code cực kỳ hiệu quả.</p>

      <h2>Codex-5.3 – Điểm mới</h2>
      <ul>
        <li><strong>Tốc độ nhanh hơn 40%</strong> – Response time giảm đáng kể</li>
        <li><strong>Chính xác hơn</strong> – ít "hallucination" (sai code) hơn</li>
        <li><strong>50+ ngôn ngữ</strong> – Python, JS, TypeScript, Go, Rust, và nhiều hơn</li>
        <li><strong>Hiểu architecture</strong> – Có thể đề xuất design pattern, cải thiện codebase</li>
      </ul>

      <h2>Nên dùng GPT hay Codex?</h2>
      <p><strong>Codex:</strong> Khi bạn cần viết/sửa code, review code, debug.</p>
      <p><strong>GPT-5.4:</strong> Khi bạn cần giải thích code, viết documentation, tư vấn kiến trúc.</p>
      <p><strong>Cả hai:</strong> Khi project phức tạp – dùng Codex viết code, GPT viết docs.</p>
    `,
  },
  {
    id: 7,
    slug: "cach-nha-quan-ly-su-dung-ai-de-tang-doanh-so",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Cách nhà quản lý, chủ shop sử dụng AI để tăng doanh số",
    excerpt:
      "Không cần biết code hay công nghệ, chỉ cần biết dùng ChatGPT đúng cách. Hướng dẫn cụ thể cho chủ shop, nhà quản lý muốn tận dụng AI trong kinh doanh.",
    readTime: "7 phút",
    views: 2201,
    date: "05/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    content: `
      <h2>AI giúp gì cho việc kinh doanh?</h2>
      <p>Nhiều chủ shop online, quản lý nghĩ AI chỉ dành cho dân công nghệ. Thực ra, AI có thể giúp <strong>bất kỳ ai</strong> bán hàng hiệu quả hơn.</p>

      <h2>Viết content bán hàng chuyên nghiệp</h2>
      <p>"Viết caption Facebook 200 từ cho sản phẩm son môi, tone vui vẻ, có CTA mua hàng" – GPT sẽ viết 5-10 biến thể để bạn chọn.</p>

      <h2>Phân tích phản hồi khách hàng</h2>
      <p>Gửi 50 bình luận của khách cho GPT và hỏi: "Phân tích 3 vấn đề khách hàng phản ánh nhiều nhất"</p>

      <h2>Lên chiến lược khuyến mãi</h2>
      <p>"Tôi bán giày, tháng 4 muốn chạy flash sale. Gợi ý cơ chế giảm giá, thời gian phù hợp, cách thông báo để tăng đơ"</p>

      <h2>Training nhân viên</h2>
      <p>"Viết script 5 bước để nhân viên tư vấn khách mua laptop, tập trung vào nhu cầu văn phòng"</p>
    `,
  },
  {
    id: 8,
    slug: "huong-dan-tich-hop-openclaw-api-vao-ung-dung-react",
    category: "dev",
    categoryLabel: "Lập trình viên",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Hướng dẫn tích hợp OpenClaw API vào ứng dụng React trong 10 phút",
    excerpt:
      "Step-by-step guide để kết nối OpenClaw API vào React app. Bao gồm setup project, gọi API, handle errors, và best practices cho production.",
    readTime: "10 phút",
    views: 1654,
    date: "01/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    content: `
      <h2>Prerequisites</h2>
      <ul>
        <li>React project (Create React App hoặc Vite)</li>
        <li>OpenClaw API key (mua tại openclaw.vn)</li>
        <li>Node.js 18+</li>
      </ul>

      <h2>Step 1: Setup environment</h2>
      <pre><code>npm install @openclaw/sdk
# hoặc nếu dùng fetch trực tiếp, không cần install gì</code></pre>

      <h2>Step 2: Tạo API client</h2>
      <pre><code>// lib/openclaw.ts
const OPENCLAW_API_KEY = process.env.OPENCLAW_API_KEY;
const OPENCLAW_ENDPOINT = 'https://api.openclaw.vn/v1/chat/completions';

export async function chat(messages: any[]) {
  const response = await fetch(OPENCLAW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${OPENCLAW_API_KEY}\`,
    },
    body: JSON.stringify({
      model: 'gpt-5.4',
      messages,
    }),
  });
  if (!response.ok) throw new Error('API Error');
  return response.json();
}</code></pre>

      <h2>Step 3: Sử dụng trong component</h2>
      <pre><code>const [messages, setMessages] = useState([]);

async function sendMessage(userMessage: string) {
  const response = await chat([...messages, { role: 'user', content: userMessage }]);
  setMessages(response.choices[0].message);
}</code></pre>
    `,
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  "non-tech": Lightbulb,
  dev: Code2,
  "ai-news": Newspaper,
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || "");
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    };
    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-secondary-800 mb-4">
              Không tìm thấy bài viết
            </h1>
            <p className="text-secondary-500 mb-8">
              Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại trang blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const CategoryIcon = categoryIcons[post.category] || Lightbulb;

  return (
    <>
      <Navbar />
      <article className="min-h-screen pt-24 pb-20">
        {/* Hero Image */}
        <div className="relative h-[40vh] min-h-[300px] max-h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại Blog
              </Link>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4",
                  post.categoryColor
                )}
              >
                <CategoryIcon className="w-3.5 h-3.5" />
                {post.categoryLabel}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="py-6 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()} lượt đọc
              </span>
            </div>
          </div>

          {/* Excerpt */}
          <div className="py-8">
            <p className="text-lg md:text-xl text-secondary-600 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div
            ref={contentRef}
            className={cn(
              "prose prose-lg max-w-none transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-secondary-800 mb-2 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Chia sẻ bài viết
                </h3>
                <p className="text-sm text-secondary-500">
                  Nếu thấy hữu ích, hãy chia sẻ cho bạn bè!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => shareOnSocial("facebook")}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </button>
                <button
                  onClick={() => shareOnSocial("twitter")}
                  className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </button>
                <button
                  onClick={() => shareOnSocial("linkedin")}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-secondary-700 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Đã copy!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Copy link
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="mt-8 p-6 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-xl font-bold">OC</span>
              </div>
              <div>
                <h4 className="font-bold text-secondary-800">
                  Đội ngũ OpenClaw VN
                </h4>
                <p className="text-sm text-secondary-500">
                  Chuyên gia về AI & API, hỗ trợ 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Code2,
  BookOpen,
  Newspaper,
  Lightbulb,
  ArrowRight,
  Clock,
  Eye,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Tất cả", icon: BookOpen },
  { id: "non-tech", label: "Mọi ngành", icon: Lightbulb },
  { id: "dev", label: "Lập trình viên", icon: Code2 },
  { id: "ai-news", label: "Tin tức AI", icon: Newspaper },
];

const posts = [
  {
    id: 1,
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "AI là gì? Giải thích đơn giản cho người không biết gì về công nghệ",
    excerpt:
      "Trí tuệ nhân tạo (AI) nghe có vẻ phức tạp nhưng thực ra rất dễ hiểu. Bài viết này sẽ giải thích AI bằng ngôn ngữ của cuộc sống hàng ngày, không cần kiến thức kỹ thuật.",
    readTime: "5 phút",
    views: 2847,
    date: "20/03/2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
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
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "5 cách nhân viên văn phòng tiết kiệm 2 giờ mỗi ngày với AI",
    excerpt:
      "Không cần biết code, nhân viên marketing, kế toán, nhân sự đều có thể dùng GPT để tự động hóa công việc nhàm chán. Cùng xem 5 ví dụ thực tế.",
    readTime: "4 phút",
    views: 1934,
    date: "18/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
    category: "dev",
    categoryLabel: "Lập trình viên",
    categoryColor: "bg-blue-100 text-blue-700",
    categoryBg: "bg-blue-50",
    title: "OpenClaw là gì? Tại sao developer Việt nên dùng thay vì API OpenAI trực tiếp?",
    excerpt:
      "OpenClaw hoạt động như một proxy giữa ứng dụng của bạn và API OpenAI gốc, tối ưu chi phí và bỏ qua các rào cản thanh toán quốc tế. Chi tiết về kiến trúc và cách sử dụng.",
    readTime: "8 phút",
    views: 3210,
    date: "15/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
    category: "dev",
    categoryLabel: "Lập trình viên",
    categoryColor: "bg-blue-100 text-blue-700",
    categoryBg: "bg-blue-50",
    title: "So sánh chi phí: API OpenAI gốc vs OpenClaw – thực sự tiết kiệm bao nhiêu?",
    excerpt:
      "Phân tích chi tiết chi phí thực tế khi sử dụng OpenAI API trực tiếp vs qua OpenClaw, bao gồm cả các hidden cost và thời gian tiết kiệm được.",
    readTime: "6 phút",
    views: 1856,
    date: "12/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
    category: "ai-news",
    categoryLabel: "Tin tức AI",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryBg: "bg-purple-50",
    title: "GPT-5.4 nano vs GPT-5.4 mini vs GPT-5.4: Nên chọn phiên bản nào?",
    excerpt:
      "OpenAI vừa ra mắt 3 biến thể GPT-5.4: nano, mini và bản đầy đủ. Bài viết phân tích điểm mạnh, điểm yếu và use-case phù hợp của từng phiên bản.",
    readTime: "5 phút",
    views: 4102,
    date: "10/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
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
    category: "ai-news",
    categoryLabel: "Tin tức AI",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryBg: "bg-purple-50",
    title: "OpenAI ra mắt Codex-5.3: Có gì mới so với phiên bản trước?",
    excerpt:
      "Codex-5.3 là model AI chuyên về lập trình của OpenAI. Phiên bản mới nhất có gì cải thiện? Code nhanh hơn, chính xác hơn, và hỗ trợ nhiều ngôn ngữ hơn.",
    readTime: "4 phút",
    views: 2893,
    date: "08/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
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
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "Cách nhà quản lý, chủ shop sử dụng AI để tăng doanh số",
    excerpt:
      "Không cần biết code hay công nghệ, chỉ cần biết dùng ChatGPT đúng cách. Hướng dẫn cụ thể cho chủ shop, nhà quản lý muốn tận dụng AI trong kinh doanh.",
    readTime: "7 phút",
    views: 2201,
    date: "05/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: `
      <h2>AI giúp gì cho việc kinh doanh?</h2>
      <p>Nhiều chủ shop online, quản lý nghĩ AI chỉ dành cho dân công nghệ. Thực ra, AI có thể giúp <strong>bất kỳ ai</strong> bán hàng hiệu quả hơn.</p>

      <h2>Viết content bán hàng chuyên nghiệp</h2>
      <p>"Viết caption Facebook 200 từ cho sản phẩm son môi, tone vui vẻ, có CTA mua hàng" – GPT sẽ viết 5-10 biến thể để bạn chọn.</p>

      <h2>Phân tích phản hồi khách hàng</h2>
      <p>Gửi 50 bình luận của khách cho GPT và hỏi: "Phân tích 3 vấn đề khách hàng phản ánh nhiều nhất"</p>

      <h2>Lên chiến lược khuyến mãi</h2>
      <p>"Tôi bán giày, tháng 4 muốn chạy flash sale. Gợi ý cơ chế giảm giá, thời gian phù hợp, cách thông báo để tăng đơn"</p>

      <h2>Training nhân viên</h2>
      <p>"Viết script 5 bước để nhân viên tư vấn khách mua laptop, tập trung vào nhu cầu văn phòng"</p>
    `,
  },
  {
    id: 8,
    category: "dev",
    categoryLabel: "Lập trình viên",
    categoryColor: "bg-blue-100 text-blue-700",
    categoryBg: "bg-blue-50",
    title: "Hướng dẫn tích hợp OpenClaw API vào ứng dụng React trong 10 phút",
    excerpt:
      "Step-by-step guide để kết nối OpenClaw API vào React app. Bao gồm setup project, gọi API, handle errors, và best practices cho production.",
    readTime: "10 phút",
    views: 1654,
    date: "01/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);

  return (
    <div ref={sectionRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-amber-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "text-center transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Blog – Tin tức & Hướng dẫn
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-800 mb-6">
              Khám phá thế giới{" "}
              <span className="gradient-text">AI & OpenClaw</span>
            </h1>
            <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
              Tin tức AI mới nhất, hướng dẫn chi tiết cho developer và bài viết
              dễ hiểu cho người non-tech. Mọi thứ bạn cần biết về GPT-5.4 &
              Codex-5.3.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "section-fade opacity-0 transition-all duration-700",
                visible && "opacity-100 translate-y-0"
              )}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden card-hover">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        ⭐ Bài viết nổi bật
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={cn(
                          "text-xs font-bold px-3 py-1 rounded-full",
                          featuredPost.categoryColor
                        )}
                      >
                        {featuredPost.categoryLabel}
                      </span>
                      <span className="text-secondary-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-secondary-800 mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-secondary-500 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-secondary-400 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {featuredPost.views.toLocaleString()} lượt đọc
                      </span>
                      <span className="text-secondary-400 text-xs">
                        {featuredPost.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                      : "bg-white text-secondary-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts
              .filter((p) => !p.featured || activeCategory !== "all")
              .map((post, i) => (
                <article
                  key={post.id}
                  className={cn(
                    "section-fade opacity-0 bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover",
                    visible && "opacity-100 translate-y-0"
                  )}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    transition:
                      "opacity 0.6s ease-out, transform 0.6s ease-out",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={cn(
                          "text-xs font-bold px-3 py-1 rounded-full",
                          post.categoryColor
                        )}
                      >
                        {post.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-secondary-800 mb-3 leading-snug line-clamp-2 group-hover:text-primary-600">
                      {post.title}
                    </h3>
                    <p className="text-secondary-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-secondary-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views.toLocaleString()} lượt đọc
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 text-xs font-bold">OC</span>
                        </div>
                        <span className="text-xs font-semibold text-secondary-600">
                          Đội ngũ OpenClaw VN
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary-400 text-lg">
                Không có bài viết nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-10 lg:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Bạn đã sẵn sàng trải nghiệm GPT-5.4?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Mua API key OpenClaw ngay hôm nay – chỉ 80K/tháng, hỗ trợ cài
              đặt miễn phí, thanh toán VNĐ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://routerapi.vovantin.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
              >
                Mua API Key ngay
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Quay lại trang chủ
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
        <li><strong>OpenClaw:</strong> 50M tokens × quy đổi = ~<strong>180K VND</strong> (~$6)</li>
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
  {
    id: 9,
    slug: "key-gpt-54-gia-150k-thang-chi-bang-4-ly-cafe",
    category: "ai-news",
    categoryLabel: "Tin tức AI",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryBg: "bg-purple-50",
    title: "Key GPT-5.4 chỉ 180K/tháng – Chỉ bằng 4 ly cà phê, bạn có cả tháng AI không giới hạn",
    excerpt:
      "Trong khi nhiều người Việt phải chi 500-800K mỗi tháng cho thẻ Visa để dùng OpenAI, giờ đây chỉ cần 180K VND là bạn có đầy đủ GPT-5.4, Codex, và hỗ trợ tiếng Việt 24/7. Sự thật đằng sau con số này.",
    readTime: "6 phút",
    views: 5623,
    date: "25/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80",
    content: `
      <h2>Tại sao người Việt thường tốn 500-800K/tháng để dùng AI?</h2>
      <p>Nếu bạn từng thử đăng ký ChatGPT Plus hoặc OpenAI API, chắc bạn đã gặp những rào cản sau:</p>
      <ul>
        <li><strong>Thẻ Visa quốc tế:</strong> Phí phát hành $25-50 (khoảng 600K-1.2M VND), phí duy trì hàng năm</li>
        <li><strong>Tỷ giá USD/VND:</strong> Thêm 3-5% phí chuyển đổi mỗi khi nạp tiền</li>
        <li><strong>Không hỗ trợ tiếng Việt:</strong> Khi gặp lỗi, phải liên hệ hỗ trợ bằng tiếng Anh</li>
        <li><strong>Tài khoản bị khóa:</strong> Nhiều IP từ Việt Nam bị đánh dấu, tài khoản có thể bị suspended bất kỳ lúc nào</li>
      </ul>
      <p>Kết quả: Mỗi tháng bạn có thể tốn <strong>500K - 800K VND</strong> chỉ để duy trì quyền truy cập, chưa kể chi phí sử dụng thực tế.</p>

      <h2>Giải pháp: Key GPT-5.4 chỉ 180K/tháng</h2>
      <p>OpenClaw VN cung cấp API key GPT-5.4 với mức giá <strong>chỉ 150,000 VND/tháng</strong>. Đây là cách nó hoạt động:</p>
      <table>
        <tr><th>Tiêu chí</th><th>OpenAI gốc</th><th>OpenClaw VN</th></tr>
        <tr><td>Chi phí hàng tháng</td><td>500K - 800K VND</td><td><strong>180K VND</strong></td></tr>
        <tr><td>Phí thẻ Visa</td><td>600K-1.2M VND/năm</td><td>Không cần</td></tr>
        <tr><td>Phí chuyển đổi USD</td><td>3-5% mỗi lần</td><td>0%</td></tr>
        <tr><td>Thanh toán</td><td>Visa/MasterCard</td><td>Chuyển khoản, Momo, Zalo</td></tr>
        <tr><td>Hỗ trợ</td><td>Tiếng Anh, email</td><td>Tiếng Việt, Zalo 24/7</td></tr>
      </table>
      <p><strong>Tiết kiệm: ~500-600K mỗi tháng = 6-7 triệu/năm</strong></p>

      <h2>180K/tháng thì dùng được gì?</h2>
      <p>Với 180K/tháng, bạn nhận được:</p>
      <ul>
        <li><strong>GPT-5.4 không giới hạn</strong> – Model mới nhất, mạnh nhất của OpenAI</li>
        <li><strong>Codex-5.3</strong> – Hỗ trợ lập trình 50+ ngôn ngữ</li>
        <li><strong>3 phiên bản GPT-5.4</strong> – nano, mini, full – tự chọn phù hợp task</li>
        <li><strong>API endpoint</strong> – Tích hợp được vào app, website, chatbot</li>
        <li><strong>Dashboard quản lý</strong> – Theo dõi usage, chi phí theo thời gian thực</li>
      </ul>

      <h2>So sánh chi phí thực tế</h2>
      <p>Ví dụ: Ứng dụng chatbot của bạn phục vụ 1,000 khách hàng/ngày, mỗi khách hỏi 5 câu:</p>
      <ul>
        <li><strong>OpenAI gốc:</strong> 1,000 × 5 × 30 = 150,000 câu hỏi/tháng × 50 tokens = 7.5M tokens → <strong>$75 (~1.8M VND)</strong> + phí Visa + phí USD = <strong>2-3M/tháng</strong></li>
        <li><strong>OpenClaw VN:</strong> Cùng lượng usage = <strong>180K/tháng</strong> (có thể nâng cấp gói cao hơn nếu cần)</li>
      </ul>
      <p><em>Tiết kiệm: ~1.5-2 triệu/tháng cho một ứng dụng vừa và nhỏ</em></p>

      <h2>Ai nên mua key GPT-5.4 giá rẻ này?</h2>
      <ul>
        <li><strong>Developer/System admin</strong> – Cần tích hợp AI vào sản phẩm, không muốn lo chuyện thanh toán quốc tế</li>
        <li><strong>Chủ shop/Doanh nghiệp nhỏ</strong> – Dùng chatbot AI để tư vấn khách 24/7</li>
        <li><strong>Freelancer</strong> – Dùng GPT viết content, dịch thuật, phân tích dữ liệu</li>
        <li><strong>Học sinh/Sinh viên</strong> – Hỗ trợ học tập, nghiên cứu với chi phí cực thấp</li>
        <li><strong>Agency/Marketing team</strong> – Cần nhiều API key cho nhiều dự án</li>
      </ul>

      <h2>Cách mua đơn giản nhất</h2>
      <p>Bạn chỉ cần:</p>
      <ol>
        <li>Liên hệ qua Zalo: <strong>0xxx xxx xxx</strong> (xem trang Mua hàng)</li>
        <li>Chuyển khoản 180K qua Momo hoặc ngân hàng</li>
        <li>Nhận API key qua Zalo trong vòng 5 phút</li>
        <li>Cài đặt và bắt đầu sử dụng ngay</li>
      </ol>
      <p><strong>Không cần thẻ Visa. Không cần VPN. Không cần tài khoản quốc tế. Chỉ cần 180K và Zalo.</strong></p>
    `,
  },
  {
    id: 10,
    slug: "tong-hop-cac-goi-gia-gpt-54-api-openclaw-2026",
    category: "ai-news",
    categoryLabel: "Tin tức AI",
    categoryColor: "bg-purple-100 text-purple-700",
    categoryBg: "bg-purple-50",
    title: "Tổng hợp các gói GPT-5.4 API OpenClaw 2026: Bảng giá chi tiết & so sánh",
    excerpt:
      "Bảng giá đầy đủ các gói API GPT-5.4 của OpenClaw VN năm 2026. Từ gói 180K cho đến gói Enterprise không giới hạn. Biết chính xác mình cần gói nào.",
    readTime: "5 phút",
    views: 3841,
    date: "22/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    content: `
      <h2>Tại sao cần biết bảng giá chi tiết?</h2>
      <p>Nhiều người mua API key nhưng không biết mình đang trả quá nhiều so với nhu cầu thực tế. Ngược lại, nhiều người mua gói rẻ nhưng lại thiếu capacity khi ứng dụng phát triển.</p>
      <p>Bài viết này giúp bạn <strong>chọn đúng gói</strong> cho nhu cầu của mình.</p>

      <h2>Bảng giá các gói GPT-5.4 API OpenClaw 2026</h2>
      <table>
        <tr><th>Gói</th><th>Giá/tháng</th><th>GPT-5.4 nano</th><th>GPT-5.4 mini</th><th>GPT-5.4 full</th><th>Codex-5.3</th></tr>
        <tr><td><strong>API Key</strong></td><td>180K VND</td><td>Không giới hạn</td><td>50K requests</td><td>5K requests</td><td>10K requests</td></tr>
        <tr><td><strong>Pro</strong></td><td>200K VND</td><td>Không giới hạn</td><td>200K requests</td><td>20K requests</td><td>50K requests</td></tr>
        <tr><td><strong>Business</strong></td><td>500K VND</td><td>Không giới hạn</td><td>Không giới hạn</td><td>100K requests</td><td>200K requests</td></tr>
        <tr><td><strong>Enterprise</strong></td><td>Liên hệ</td><td>Không giới hạn</td><td>Không giới hạn</td><td>Không giới hạn</td><td>Không giới hạn</td></tr>
      </table>

      <h2>Nên chọn gói nào?</h2>

      <h3>Gói API Key – 180K/tháng – Phù hợp: Cá nhân, học tập</h3>
      <p>Bạn mới bắt đầu, muốn trải nghiệm GPT-5.4 hoặc dùng cho nhu cầu cá nhân:</p>
      <ul>
        <li>Học sinh/sinh viên – Viết essay, dịch thuật, hỗ trợ học tập</li>
        <li>Freelancer – Viết content, dịch thuật cho 1-2 khách hàng</li>
        <li>Test ứng dụng – Thử nghiệm prototype trước khi scale</li>
      </ul>

      <h3>Gói Pro – 200K/tháng – Phù hợp: Developer, Shop nhỏ</h3>
      <p>Bạn đã có sản phẩm, cần AI cho production:</p>
      <ul>
        <li>Chatbot cho website – Tư vấn khách tự động 24/7</li>
        <li>App di động – Tích hợp AI vào ứng dụng</li>
        <li>Shop online – Tự động trả lời tin nhắn, đề xuất sản phẩm</li>
        <li>Agency – Phục vụ 3-5 dự án cùng lúc</li>
      </ul>

      <h3>Gói Business – 500K/tháng – Phù hợp: Doanh nghiệp, Team</h3>
      <p>Doanh nghiệp cần AI cho nhiều bộ phận, nhiều sản phẩm:</p>
      <ul>
        <li>Marketing team – Viết content, phân tích chiến dịch</li>
        <li>Customer service – Chatbot phục vụ hàng nghìn khách/ngày</li>
        <li>Product team – Tích hợp AI vào nhiều tính năng</li>
        <li>Data team – Phân tích dữ liệu, báo cáo tự động</li>
      </ul>

      <h2>So sánh với chi phí không dùng OpenClaw</h2>
      <p>Để so sánh công bằng, hãy xem chi phí thực tế khi dùng OpenAI trực tiếp:</p>
      <ul>
        <li><strong>Thẻ Visa quốc tế:</strong> ~800K-1.5M VND/năm (phí phát hành + duy trì)</li>
        <li><strong>GPT-5.4 API usage:</strong> ~$50-200/tháng tùy usage = 1.2M-5M VND/tháng</li>
        <li><strong>Tổng năm:</strong> ~15M-60M VND cho một ứng dụng vừa</li>
      </ul>
      <p>Với <strong>OpenClaw Pro (200K/tháng = 2.4M/năm)</strong>, bạn tiết kiệm được <strong>80-95% chi phí</strong>.</p>

      <h2>FAQ thường gặp</h2>
      <p><strong>Hỏi: Gói API Key 180K có đủ cho ứng dụng production không?</strong></p>
      <p>Trả: Đủ cho ứng dụng nhỏ, prototype, hoặc dùng cá nhân. Nếu ứng dụng phát triển, bạn có thể nâng cấp lên Pro hoặc Business bất kỳ lúc nào.</p>

      <p><strong>Hỏi: Có giới hạn số API key không?</strong></p>
      <p>Trả: Mỗi gói được cấp 1 API key chính. Bạn có thể yêu cầu thêm key cho các dự án khác nhau.</p>

      <p><strong>Hỏi: Nếu hết quota thì sao?</strong></p>
      <p>Trả: Bạn có thể mua thêm top-up hoặc nâng cấp gói. Không bị khóa tài khoản đột ngột.</p>
    `,
  },
  {
    id: 11,
    slug: "key-gpt-54-cho-shop-ban-hang-chatbot-tu-van-khach-hang",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "Key GPT-5.4 cho shop bán hàng: Chatbot tư vấn khách 24/7 chỉ với 180K/tháng",
    excerpt:
      "Bạn bán hàng online, mệt mỏi với việc trả lời tin nhắn lúc đêm khuya? GPT-5.4 API giá 180K/tháng có thể thay bạn tư vấn khách 24/7. Cách setup đơn giản không cần biết code.",
    readTime: "7 phút",
    views: 2956,
    date: "20/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    content: `
      <h2>Vấn đề của shop bán hàng online</h2>
      <p>Nếu bạn bán hàng trên Facebook, Zalo, hoặc website, chắc bạn đã gặp những tình huống này:</p>
      <ul>
        <li>Khách hỏi lúc 11 giờ đêm – Bạn đang ngủ</li>
        <li>Cùng một câu hỏi "còn hàng không?" được hỏi 50 lần/ngày</li>
        <li>Khách muốn biết size, màu, so sánh sản phẩm – Bạn phải tra rất lâu</li>
        <li>Bỏ lỡ khách vì không kịp trả lời</li>
        <li>Tuyển nhân viên tư vấn thì tốn thêm 5-10M/tháng</li>
      </ul>

      <h2>Giải pháp: Chatbot AI từ key GPT-5.4</h2>
      <p>Thay vì trả lời từng tin nhắn, để GPT-5.4 làm việc đó cho bạn. Chatbot AI có thể:</p>
      <ul>
        <li><strong>Trả lời 24/7</strong> – Không cần nhân viên ca đêm</li>
        <li><strong>Trả lời nhanh</strong> – Khách hỏi là có ngay, không để khách chờ</li>
        <li><strong>Trả lời chính xác</strong> – GPT-5.4 hiểu ngữ cảnh, không trả lời sai thông tin sản phẩm</li>
        <li><strong>Tư vấn sản phẩm</strong> – Hỏi nhu cầu, gợi ý sản phẩm phù hợp</li>
        <li><strong>Xử lý khiếu nại</strong> – Trả lời chính sách đổi trả, bảo hành</li>
      </ul>

      <h2>Chi phí cực kỳ rẻ</h2>
      <p>Với key GPT-5.4 giá <strong>180K/tháng</strong> từ OpenClaw VN:</p>
      <table>
        <tr><th>Tiêu chí</th><th>Tuyển nhân viên</th><th>GPT-5.4 Chatbot</th></tr>
        <tr><td>Lương/tháng</td><td>5-8M VND</td><td>180K VND</td></tr>
        <tr><td>Thời gian làm việc</td><td>8-10 giờ/ngày</td><td>24/7</td></tr>
        <tr><td>Số khách tư vấn/ngày</td><td>20-30</td><td>Không giới hạn</td></tr>
        <tr><td>Nghỉ phép, thôi việc</td><td>Có thể</td><td>Không bao giờ</td></tr>
        <tr><td>Tốc độ phản hồi</td><td>5-30 phút</td><td>Tức thì</td></tr>
        <tr><td>Chi phí 1 năm</td><td>60-100M</td><td><strong>~1.8M</strong></td></tr>
      </table>
      <p><strong>Tiết kiệm: ~60-100 triệu/năm</strong> so với tuyển nhân viên tư vấn.</p>

      <h2>Cách setup chatbot không cần biết code</h2>
      <p>Bạn có 2 lựa chọn đơn giản:</p>

      <h3>Option 1: Kết nối với Fanpage/Zalo (không cần code)</h3>
      <p>Nhiều nền tảng chatbot như Chatfuel, Manychat, hoặc giải pháp Việt Nam như Subiz, Base đã tích hợp OpenClaw API:</p>
      <ol>
        <li>Mua key GPT-5.4 tại OpenClaw VN (180K/tháng)</li>
        <li>Đăng ký tài khoản trên nền tảng chatbot (có gói miễn phí)</li>
        <li>Kết nối Fanpage/Zalo với nền tảng chatbot</li>
        <li>Cấu hình OpenClaw API key vào nền tảng</li>
        <li>Train chatbot với thông tin sản phẩm của bạn (chỉ cần copy/paste)</li>
        <li>Bật chatbot – Từ nay khách hỏi là có người trả lời!</li>
      </ol>

      <h3>Option 2: Chatbot trên website (cần 1 chút code hoặc nhờ developer)</h3>
      <p>Nếu bạn có website bán hàng riêng:</p>
      <pre><code>// Kết nối OpenClaw API với widget chat trên website
// Chỉ cần thay YOUR_API_KEY bằng key đã mua

const response = await fetch('https://api.openclaw.vn/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-5.4',
    messages: [
      { role: 'system', content: 'Bạn là nhân viên tư vấn cho shop thời trang ABC...' },
      { role: 'user', content: customerMessage }
    ]
  })
});</code></pre>

      <h2>Ví dụ kịch bản chatbot cho shop thời trang</h2>
      <p><strong>Khách:</strong> "Còn áo phông màu đen size L không?"</p>
      <p><strong>Chatbot (GPT-5.4):</strong> "Dạ chào anh/chị! Áo phông màu đen size L của bên em vẫn còn ạ. Giá là 299K, có 2 loại: cotton 100% và cotton pha. Anh/chị thường mặc size nào để em tư vấn chuẩn hơn ạ?"</p>
      <p><strong>Khách:</strong> "Tôi muốn đổi size vì mua nhầm"</p>
      <p><strong>Chatbot (GPT-5.4):</strong> "Dạ không sao ạ! Để đổi size, anh/chị vui lòng gửi ảnh sản phẩm và mã đơn hàng qua Zalo này. Bên em sẽ hỗ trợ đổi size trong vòng 24 giờ, khách hàng chỉ cần trả phí ship 15K cho chiều về ạ."</p>

      <h2>FAQ cho chủ shop</h2>
      <p><strong>Hỏi: Chatbot có trả lời sai thông tin sản phẩm không?</strong></p>
      <p>Trả: Bạn nên cung cấp thông tin sản phẩm cho chatbot (giá, size, màu, tồn kho). GPT-5.4 sẽ chỉ trả lời dựa trên thông tin bạn cung cấp. Nếu không biết, nó sẽ nói "em đang kiểm tra" thay vì bịa đặt.</p>

      <p><strong>Hỏi: Khách hàng có biết đang chat với AI không?</strong></p>
      <p>Trả: Bạn nên để chatbot xưng "em" như nhân viên thật. Khách hàng hiếm khi nhận ra. Nếu muốn minh bạch, có thể để tin đầu: "Dạ em là trợ lý AI của shop ABC ạ 😊"</p>

      <p><strong>Hỏi: 180K/tháng thì chatbot trả lời được bao nhiêu khách?</strong></p>
      <p>Trả: 180K/tháng đủ cho khoảng 3,000-5,000 câu hỏi từ khách. Nếu shop lớn hơn, nâng lên gói Pro (200K/tháng) là đủ.</p>
    `,
  },
  {
    id: 12,
    slug: "key-gpt-54-cho-giao-vien-sinh-vien-giang-vien",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "Key GPT-5.4 cho giáo viên, sinh viên, giảng viên: Công cụ hỗ trợ giảng dạy và học tập với chi phí học sinh",
    excerpt:
      "GPT-5.4 có thể giúp giáo viên soạn giáo án nhanh hơn, sinh viên viết bài tốt hơn, giảng viên nghiên cứu hiệu quả hơn. Tất cả với chi phí chỉ 180K/tháng – phù hợp với túi tiền sinh viên.",
    readTime: "8 phút",
    views: 2156,
    date: "18/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
    content: `
      <h2>Tại sao AI hữu ích cho giáo dục?</h2>
      <p>Không phải AI thay thế giáo viên, mà AI là "trợ lý" giúp công việc nhanh hơn, hiệu quả hơn. Giáo viên tiết kiệm thời gian, sinh viên học tốt hơn.</p>

      <h2>Cho giáo viên & giảng viên</h2>

      <h3>Soạn giáo án trong 10 phút</h3>
      <p>Thay vì ngồi viết giáo án 2-3 tiếng, chỉ cần:</p>
      <ul>
        <li>"Soạn giáo án 45 phút cho bài Tích phân từng phần, lớp 12, học sinh trung bình"</li>
        <li>"Tạo 10 câu hỏi trắc nghiệm về chủ đề Hóa hữu cơ lớp 11, mức độ khó trung bình"</li>
        <li>"Viết rubric đánh giá bài luận tiếng Anh B1 cho sinh viên năm nhất"</li>
      </ul>
      <p><strong>Tiết kiệm: 2-3 tiếng/giáo án × 5 giáo án/tuần = 10-15 tiếng/tuần</strong></p>

      <h3>Tạo đề kiểm tra đa dạng</h3>
      <p>GPT-5.4 có thể tạo:</p>
      <ul>
        <li>Đề trắc nghiệm với đáp án và giải thích</li>
        <li>Đề tự luận với tiêu chí chấm điểm</li>
        <li>Bài tập thực hành theo từng mức độ</li>
        <li>Ngân hàng câu hỏi để xoay đề</li>
      </ul>

      <h3>Hỗ trợ nghiên cứu khoa học</h3>
      <p>"Tóm tắt 5 xu hướng nghiên cứu mới nhất về STEM trong giáo dục phổ thông"</p>
      <p>"Gợi ý phương pháp nghiên cứu phù hợp cho đề tài về ứng dụng AI trong dạy học"</p>

      <h2>Cho sinh viên</h2>

      <h3>Viết luận văn, tiểu luận</h3>
      <p>GPT-5.4 KHÔNG viết thay bạn, nhưng có thể:</p>
      <ul>
        <li>"Gợi ý cấu trúc bài luận về tác động của mạng xã hội đến thanh thiếu niên"</li>
        <li>"Viết đoạn mở bài cho chủ đề: Thực trạng ô nhiễm môi trường tại Việt Nam"</li>
        <li>"Kiểm tra logic và luận điểm trong bài luận của tôi"</li>
        <li>"Dịch và paraphrasing một đoạn văn sang tiếng Anh học thuật"</li>
      </ul>

      <h3>Học ngoại ngữ</h3>
      <ul>
        <li>"Trả lời bằng tiếng Anh về chủ đề Climate Change, dùng từ vựng trình độ B2"</li>
        <li>"Giải thích nghĩa của idiom 'the ball is in your court' và cho ví dụ"</li>
        <li>"Sửa lỗi ngữ pháp trong đoạn văn sau và giải thích"</li>
        <li>"Dịch bài báo khoa học này sang tiếng Việt, giữ nguyên thuật ngữ"</li>
      </ul>

      <h3>Giải bài tập & ôn thi</h3>
      <p>"Giải thích cách giải bài toán xác suất này từng bước"</p>
      <p>"Tạo 20 câu ôn tập môn Kinh tế chính trị, có đáp án"</p>
      <p>"Đặt câu hỏi phỏng vấn cho chủ đề: Quyền con người trong luật quốc tế"</p>

      <h3>Nghiên cứu & đọc tài liệu</h3>
      <p>"Tóm tắt nội dung chính của bài báo này trong 5 câu"</p>
      <p>"So sánh 2 lý thuyết kinh tế: Keynes và Marx"</p>
      <p>"Tìm 5 nguồn tham khảo uy tín về Machine Learning trong y khoa"</p>

      <h2>Chi phí cho sinh viên</h2>
      <p>Với <strong>80K/tháng</strong>, sinh viên có:</p>
      <ul>
        <li>GPT-5.4 không giới hạn – Hỏi bao nhiêu tùy ý</li>
        <li>Codex-5.3 – Hỗ trợ code cho các môn lập trình</li>
        <li>Tất cả tính năng của bản Pro – Chỉ với giá Starter</li>
      </ul>
      <p>So với việc mua tài liệu, thuê gia sư (200-500K/buổi), <strong>80K/tháng là mức giá "sinh viên" nhất</strong> để tiếp cận AI.</p>

      <h2>Cách bắt đầu</h2>
      <ol>
        <li>Liên hệ Zalo để mua key (báo là sinh viên để được tư vấn gói phù hợp)</li>
        <li>Chuyển khoản 80K</li>
        <li>Nhận API key qua Zalo trong 5 phút</li>
        <li>Truy cập dashboard để bắt đầu sử dụng</li>
        <li>Có thể dùng trên điện thoại qua Zalo chatbot hoặc website</li>
      </ol>

      <h2>Lưu ý quan trọng</h2>
      <p><strong>AI là công cụ hỗ trợ, không phải thay thế học tập.</strong></p>
      <ul>
        <li>Dùng AI để hiểu bài, không phải để chép bài</li>
        <li>Luôn kiểm tra thông tin AI cung cấp</li>
        <li>Trích dẫn nguồn khi sử dụng thông tin từ AI</li>
        <li>Học cách đặt câu hỏi tốt – đây là kỹ năng quan trọng</li>
      </ul>
    `,
  },
  {
    id: 13,
    slug: "key-gpt-54-cho-marketing-content-creator",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "Key GPT-5.4 cho Marketing & Content Creator: Viết content viral với chi phí 80K/tháng",
    excerpt:
      "Marketer và content creator có thể dùng GPT-5.4 để viết caption, lên ý tưởng, phân tích data trong vài giây. Hướng dẫn chi tiết cách sử dụng GPT-5.4 cho công việc marketing hiệu quả nhất.",
    readTime: "9 phút",
    views: 3412,
    date: "15/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80",
    content: `
      <h2>AI đang thay đổi cách làm marketing như thế nào?</h2>
      <p>Những content creator, marketer giỏi nhất không phải người viết nhanh nhất – mà là người dùng AI giỏi nhất. Họ dùng GPT-5.4 để:</p>
      <ul>
        <li>Tạo 10 ý tưởng content trong 1 phút thay vì ngồi brainstorm 1 tiếng</li>
        <li>Viết 20 caption đa dạng để A/B test trong 10 phút</li>
        <li>Phân tích phản hồi khách hàng từ 500 bình luận chỉ trong 5 phút</li>
        <li>Tạo kịch bản quảng cáo cho nhiều nền tảng (Facebook, TikTok, Zalo)</li>
      </ul>

      <h2>Các prompt marketing hiệu quả với GPT-5.4</h2>

      <h3>1. Tạo ý tưởng content</h3>
      <pre><code>Viết 15 ý tưởng content cho Fanpage bán thời trang nam,
mỗi ý bao gồm: tiêu đề, mô tả ngắn 2-3 câu, hashtag gợi ý.
Phân chia theo các nhóm: giáo dục (30%), giải trí (30%), bán hàng (40%).
Tone giọng: trẻ trung, gần gũi, có personality.</code></pre>

      <h3>2. Viết caption đa dạng</h3>
      <pre><code>Viết 5 biến thể caption cho bài post bán váy cưới:
- Biến thể 1: Tone cảm xúc, storytelling về cô dâu
- Biến thể 2: Tone xa hoa, tập trung vào chất lượng
- Biến thể 3: Tone FOMO (sợ bỏ lỡ), giới hạn thời gian
- Biến thể 4: Tone thân thiện, review từ khách cũ
- Biến thể 5: Tone kể chuyện (behind the scenes)
Mỗi caption 150-200 từ, có CTA rõ ràng.</code></pre>

      <h3>3. Phân tích phản hồi khách</h3>
      <pre><code>Đây là 50 bình luận từ khách hàng về sản phẩm kem chống nắng của shop:
[bấm paste 50 bình luận vào đây]

Hãy phân tích:
1. 3 vấn đề khách hàng phản ánh nhiều nhất
2. 3 điều khách hàng thích nhất
3. 5 insight để cải thiện sản phẩm/dịch vụ
4. Gợi ý 5 cách phản hồi khách trên Fanpage</code></pre>

      <h3>4. Kịch bản quảng cáo</h3>
      <pre><code>Viết kịch bản quảng cáo Facebook 30 giây cho sản phẩm
máy xay sinh tố cao cấp, giá 1.5M:
- Hook (3 giây đầu): gây chú ý
- Problem (10 giây): vấn đề khi không có máy xay tốt
- Solution (10 giây): giới thiệu sản phẩm
- Proof (5 giây): testimonial hoặc stats
- CTA (2 giây): kêu gọi hành động
Format: [thời gian] - nội dung - hướng dẫn hình ảnh/video</code></pre>

      <h3>5. Chiến lược marketing</h3>
      <pre><code>Tôi bán giày Sneaker, ngân sách marketing 5M/tháng,
khách hàng mục tiêu: nam 18-30 tuổi, TP.HCM.
Phân tích và gợi ý:
1. Phân bổ ngân sách giữa Facebook, TikTok, Google
2. Content calendar cho 1 tháng (tần suất, loại content)
3. 3 chiến dịch flash sale đề xuất cho quý 2/2026
4. Cách retarget khách đã xem nhưng chưa mua</code></pre>

      <h2>So sánh: Tự viết vs Dùng GPT-5.4</h2>
      <table>
        <tr><th>Task</th><th>Tự viết</th><th>Dùng GPT-5.4</th><th>Tiết kiệm</th></tr>
        <tr><td>20 caption/tuần</td><td>3-4 tiếng</td><td>30-45 phút</td><td>~3 tiếng</td></tr>
        <tr><td>Phân tích 100 bình luận</td><td>1-2 tiếng</td><td>10 phút</td><td>~1.5 tiếng</td></tr>
        <tr><td>Lên ý tưởng content 1 tháng</td><td>2-3 tiếng</td><td>15 phút</td><td>~2.5 tiếng</td></tr>
        <tr><td>Viết email marketing</td><td>30-60 phút</td><td>5-10 phút</td><td>~30 phút</td></tr>
        <tr><td>Tổng/tuần</td><td>~10 tiếng</td><td>~2 tiếng</td><td>~8 tiếng</td></tr>
      </table>
      <p><strong>Tiết kiệm: 8 giờ/tuần × 4 tuần = 32 giờ/tháng = 4 ngày làm việc!</strong></p>

      <h2>Tối ưu chi phí cho team marketing</h2>
      <p>Một team marketing 3 người:</p>
      <ul>
        <li><strong>Tuyển thêm nhân viên content:</strong> 8-10M/tháng</li>
        <li><strong>Dùng GPT-5.4 (Business – 500K/tháng):</strong> Đủ cho cả team, không giới hạn requests</li>
        <li><strong>Tiết kiệm:</strong> ~8-10M/tháng</li>
      </ul>

      <h2>Các lỗi thường gặp khi dùng GPT cho marketing</h2>
      <p><strong>Lỗi 1:</strong> Copy-paste nguyên văn không chỉnh sửa</p>
      <p>→ LUÔN edit lại trước khi đăng. GPT viết nhanh nhưng chưa chắc đã phù hợp với brand voice của bạn.</p>

      <p><strong>Lỗi 2:</strong> Dùng prompt quá chung chung</p>
      <p>→ Càng chi tiết, kết quả càng tốt. Thay vì "viết caption", hãy nói "viết caption 200 từ, tone vui vẻ, có 2 emoji, CTA là link sản phẩm".</p>

      <p><strong>Lỗi 3:</strong> Không kiểm tra thông tin sản phẩm</p>
      <p>→ GPT có thể "bịa" thông tin giá, khuyến mãi. LUÔN verify trước khi đăng.</p>

      <h2>Bắt đầu với 80K/tháng</h2>
      <p>Với gói Starter 80K/tháng, bạn có đủ cho:</p>
      <ul>
        <li>1 content creator làm việc toàn thời gian</li>
        <li>~3,000-5,000 prompt/tháng</li>
        <li>Viết content, phân tích data, lên ý tưởng không giới hạn</li>
      </ul>
      <p>Nếu team lớn hơn (3-5 người), nâng lên gói Pro (200K/tháng) hoặc Business (500K/tháng).</p>
    `,
  },
  {
    id: 14,
    slug: "key-gpt-54-cho-freelancer-cong-so-tu-do-tai-chinh",
    category: "non-tech",
    categoryLabel: "Mọi ngành",
    categoryColor: "bg-amber-100 text-amber-700",
    categoryBg: "bg-amber-50",
    title: "Key GPT-5.4 cho Freelancer: Làm việc tự do nhưng thu nhập 'công sở' với 80K/tháng",
    excerpt:
      "Freelancer có thể dùng GPT-5.4 để nhận nhiều việc hơn, làm nhanh hơn, thu nhập cao hơn. Hướng dẫn cụ thể cách dùng AI để tăng gấp đôi, gấp ba năng suất freelance – chi phí chỉ 80K/tháng.",
    readTime: "7 phút",
    views: 2678,
    date: "12/03/2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    content: `
      <h2>Tại sao freelancer nên dùng GPT-5.4?</h2>
      <p>Freelancer được trả tiền theo kết quả. Làm càng nhiều việc trong thời gian ngắn = thu nhập càng cao. GPT-5.4 là "nhân viên ảo" giúp bạn:</p>
      <ul>
        <li>Viết nhanh hơn – Tiết kiệm 50% thời gian mỗi task</li>
        <li>Chất lượng đồng đều – Không bị ảnh hưởng bởi mood, fatigue</li>
        <li>Đa năng hơn – Nhận được nhiều loại job khác nhau</li>
        <li>Không cần assistant – Tự làm được công việc của 2-3 người</li>
      </ul>

      <h2>GPT-5.4 cho từng ngành freelance</h2>

      <h3>1. Content Writer / Copywriter</h3>
      <p><strong>Trước đây:</strong> Viết 1 bài 1000 từ = 3-4 tiếng. Mỗi ngày được 2-3 bài.</p>
      <p><strong>Với GPT-5.4:</strong></p>
      <ul>
        <li>Research outline: 5 phút</li>
        <li>Viết draft: 15-20 phút</li>
        <li>Edit và finalize: 10-15 phút</li>
        <li><strong>Tổng: 30-40 phút/bài → Mỗi ngày được 5-7 bài!</strong></li>
      </ul>
      <p><strong>Thu nhập:</strong> Từ 5-8 triệu/tháng → 15-25 triệu/tháng</p>

      <h3>2. Translator</h3>
      <p><strong>Trước đây:</strong> Dịch 1000 từ = 2-3 tiếng. Mỗi ngày được 3000-5000 từ.</p>
      <p><strong>Với GPT-5.4:</strong></p>
      <ul>
        <li>Dịch draft: 2-3 phút cho 1000 từ</li>
        <li>Review và chỉnh sửa: 30-45 phút cho 1000 từ</li>
        <li><strong>Tổng: 35-50 phút cho 1000 từ → Gấp 3-4 lần năng suất!</strong></li>
      </ul>
      <p><strong>Thu nhập:</strong> Từ 8-12 triệu/tháng → 25-40 triệu/tháng</p>

      <h3>3. Social Media Manager</h3>
      <p><strong>Trước đây:</strong> Quản lý 3-4 Fanpage = bận rộn cả ngày.</p>
      <p><strong>Với GPT-5.4:</strong></p>
      <ul>
        <li>Lên content calendar 1 tháng: 1 tiếng (thay vì 1 ngày)</li>
        <li>Viết caption: 2-3 phút/bài</li>
        <li>Phản hồi khách: Tự động hóa 80% câu hỏi thường gặp</li>
        <li>Viết báo cáo: 10 phút thay vì 2-3 tiếng</li>
      </ul>
      <p><strong>Thu nhập:</strong> Quản lý được 8-10 Fanpage cùng lúc (mỗi page 3-5M/tháng) = <strong>25-50 triệu/tháng</strong></p>

      <h3>4. Designer (có dùng AI hỗ trợ)</h3>
      <p><strong>Với GPT-5.4:</strong></p>
      <ul>
        <li>Brief với khách: Dùng AI để định hướng concept nhanh</li>
        <li>Viết mô tả (prompt) cho design AI: Tiết kiệm thời gian mockup</li>
        <li>Viết content đi kèm design: Không cần thuê copywriter riêng</li>
        <li>Phản hồi khách hàng: Nhanh chóng và chuyên nghiệp</li>
      </ul>

      <h3>5. Virtual Assistant / Admin Support</h3>
      <p><strong>Với GPT-5.4:</strong></p>
      <ul>
        <li>Soạn email, tài liệu: 5-10 phút thay vì 30-60 phút</li>
        <li>Tóm tắt cuộc họp: Tự động</li>
        <li>Lên lịch, reminder: Kết hợp với app quản lý</li>
        <li>Research thông tin: Nhanh gấp 5 lần</li>
      </ul>
      <p><strong>Thu nhập:</strong> Từ 10-15 triệu/tháng → 20-30 triệu/tháng</p>

      <h2>ROI (Return on Investment) của 80K/tháng</h2>
      <p>Với chi phí 80K/tháng cho GPT-5.4:</p>
      <ul>
        <li><strong>Content writer:</strong> Tiết kiệm 2-3 tiếng/ngày × 30 ngày = 60-90 tiếng/tháng
          <br/>→ Nếu rate 50K/giờ = <strong>3-4.5 triệu giá trị</strong></li>
        <li><strong>Translator:</strong> Năng suất tăng 3-4 lần
          <br/>→ Thu nhập tăng từ 8M → 25M = <strong>+17 triệu/tháng</strong></li>
        <li><strong>Social media manager:</strong> Quản lý được nhiều hơn
          <br/>→ Thu nhập tăng từ 12M → 30M = <strong>+18 triệu/tháng</strong></li>
      </ul>
      <p><strong>ROI: 80K đầu tư → Thu về 3-18 triệu mỗi tháng. Lợi nhuận gấp 40-200 lần!</strong></p>

      <h2>Prompt mẫu cho freelancer</h2>
      <pre><code>Role: Bạn là một content writer chuyên nghiệp với 5 năm kinh nghiệm.
Task: Viết bài blog 1000 từ cho ngành nội thất.
Audience: Chủ nhà 30-45 tuổi, quan tâm thiết kế hiện đại.
Tone: Thân thiện, chuyên nghiệp, có personality.
Requirements:
- 1 hook mạnh ở đầu bài
- 3-5 subheadings
- Mỗi đoạn 3-4 câu
- Include 2-3 ví dụ thực tế
- Kết thúc bằng CTA
Format: Markdown</code></pre>

      <h2>Tips để tối đa hóa giá trị</h2>
      <ol>
        <li><strong>Học cách viết prompt tốt:</strong> Prompt càng chi tiết, kết quả càng tốt. Đây là kỹ năng xứng đáng đầu tư thời gian học.</li>
        <li><strong>Không dùng nguyên kết quả:</strong> Luôn edit, bổ sung, cá nhân hóa trước khi deliver cho khách.</li>
        <li><strong>Build prompt library:</strong> Lưu lại những prompt tốt nhất cho từng loại job. Lần sau chỉ cần điều chỉnh.</li>
        <li><strong>Batch work:</strong> Viết 10 prompt cùng lúc, để GPT xử lý trong khi bạn làm việc khác.</li>
        <li><strong>Upsell với AI:</strong> Báo khách rằng bạn dùng AI để làm nhanh hơn → Giảm thời gian, có thể nhận thêm job khác.</li>
      </ol>

      <h2>Kết luận</h2>
      <p><strong>80K/tháng</strong> cho GPT-5.4 là khoản đầu tư rẻ nhất mà freelancer có thể làm. ROI thực tế có thể gấp <strong>40-200 lần</strong>. Nếu bạn đang freelance mà chưa dùng AI, bạn đang tự bỏ tiền vào túi khách hàng.</p>
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

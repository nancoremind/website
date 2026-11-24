import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Search, MessageCircle, FileText, Image as ImageIcon, HelpCircle, CheckSquare } from "lucide-react";

export function SEOAEOSpecPage() {
  const metaData = {
    title: "CoreMind | ที่ปรึกษา AI Automation และ Digital Transformation",
    description: "CoreMind ช่วยองค์กรก้าวสู่ยุคใหม่ด้วย AI Automation, ERP Solutions, Digital Consulting, Team Building",
    keywords: "AI Automation Thailand, Digital Transformation Consulting, AI Agentic Architect, AI Consulting & Team Building, ERP AI Integration, CoreMind"
  };

  const headingHierarchy = [
    { tag: "H1", content: "Empowering Businesses with AI & Digital Transformation", section: "Hero Section" },
    { tag: "H2", content: "About Us", section: "About Section" },
    { tag: "H2", content: "Services", section: "Services Section" },
    { tag: "H3", content: "Training - AI Agentic Architect", section: "Services" },
    { tag: "H3", content: "Consulting - Discovery & Advisory", section: "Services" },
    { tag: "H3", content: "Team Building - Agile Development", section: "Services" },
    { tag: "H3", content: "Data & AI Services - RAG Flow", section: "Services" },
    { tag: "H2", content: "Use Cases", section: "Use Cases Section" },
    { tag: "H3", content: "HR Assistant", section: "Use Cases" },
    { tag: "H3", content: "Sales Support", section: "Use Cases" },
    { tag: "H3", content: "IT Helpdesk", section: "Use Cases" },
    { tag: "H3", content: "Finance Assistant", section: "Use Cases" },
    { tag: "H3", content: "Operations Center", section: "Use Cases" },
    { tag: "H2", content: "Pricing", section: "Pricing Section" },
    { tag: "H2", content: "Contact", section: "Contact Section" }
  ];

  const altTexts = [
    { asset: "CoreMind Logo", alt: "CoreMind Logo - AI & Digital Transformation Consulting" },
    { asset: "Hero Background", alt: "AI Automation and Digital Transformation Technology Background" },
    { asset: "Robotic Hand Image", alt: "AI Technology and Innovation - Robotic Hand with Digital Interface" },
    { asset: "Training Icon", alt: "AI Training and Academy - Education Icon" },
    { asset: "Consulting Icon", alt: "Digital Consulting and Strategy - Analysis Icon" },
    { asset: "Team Building Icon", alt: "Agile Team Building and Development - Team Icon" },
    { asset: "Data & AI Icon", alt: "Data Analytics and AI Services - Database Icon" },
    { asset: "CRM System Image", alt: "Customer Relationship Management System Interface" },
    { asset: "ERP System Image", alt: "Enterprise Resource Planning System Dashboard" },
    { asset: "Automation Image", alt: "Business Process Automation and AI Integration" },
    { asset: "AI Data Image", alt: "Artificial Intelligence Data Processing and Analytics" }
  ];

  const faqContent = [
    {
      question: "CoreMind คือใคร?",
      answer: "CoreMind คือบริษัทที่ปรึกษาด้าน AI Automation และ Digital Transformation ที่มีประสบการณ์กว่า 18 ปี ในการช่วยองค์กรต่างๆ ปรับตัวสู่ยุคดิจิทัลด้วยเทคโนโลยี AI และระบบ ERP ที่ทันสมัย"
    },
    {
      question: "CoreMind มีบริการอะไรบ้าง?",
      answer: "เรามี 4 บริการหลัก ได้แก่ 1) Training - หลักสูตร AI Agentic Architect 2) Consulting - Discovery Phase และ Advisory 3) Team Building - จัดทีม Agile Development 4) Data & AI Services - RAG Flow และ Knowledge Base Development"
    },
    {
      question: "CoreMind ช่วยองค์กรได้อย่างไร?",
      answer: "เราช่วยลดต้นทุนการดำเนินงาน เพิ่มประสิทธิภาพด้วย AI Automation, ERP Integration, และ Digital Process ที่สามารถใช้งานได้จริง พร้อมทีมงานที่มีประสบการณ์ในการพัฒนาและดูแลระบบแบบ End-to-End"
    },
    {
      question: "AI Automation ของ CoreMind แตกต่างจากที่อื่นอย่างไร?",
      answer: "เรามุ่งเน้นการทำให้ AI ใช้งานได้จริงในสภาพแวดล้อมธุรกิจจริง ไม่ใช่แค่ Demo หรือ Proof of Concept โดยใช้ RAG Technology, Knowledge Management และ Integration กับระบบเดิมที่มีอยู่"
    },
    {
      question: "ราคาบริการของ CoreMind เป็นอย่างไร?",
      answer: "เรามีแพ็กเกจที่หลากหลาย เริ่มตั้งแต่ Training 5,900 บาท/คน, Consulting 25,000 บาท/โปรเจค, Team Building และ Transformation เป็น Custom Pricing ตามความต้องการขององค์กร"
    },
    {
      question: "จะเริ่มต้นใช้บริการ CoreMind ได้อย่างไร?",
      answer: "ติดต่อเราได้ทาง Email: nan@coremind.cc หรือ Tel: 088-251-6388 เราให้คำปรึกษาฟรีเพื่อวิเคราะห์ความต้องการและแนะนำโซลูชันที่เหมาะสมกับองค์กรของคุณ"
    }
  ];

  const seoAssets = [
    { name: "OG Image", specs: "1200×630 px", description: "Hero image พร้อมโลโก้ + tagline 'Think Tech, Think Me'" },
    { name: "Favicon", specs: "32×32 px", description: "CoreMind logo icon (PNG/ICO)" },
    { name: "Apple Touch Icon", specs: "256×256 px", description: "CoreMind webclip สำหรับ iOS devices" },
    { name: "Schema Diagram", specs: "Visual", description: "JSON-LD โครงสร้าง: Organization + Service + LocalBusiness" }
  ];

  const checklist = [
    { item: "Meta Title & Description ครบถ้วน", completed: true },
    { item: "H1–H3 Hierarchy ชัดเจนในทุก Section", completed: true },
    { item: "Alt Text ระบุในทุกภาพและ Icon", completed: true },
    { item: "OG Image/Favicon/Webclip Assets พร้อม", completed: true },
    { item: "FAQ / Q&A Block สำหรับ AEO", completed: true },
    { item: "Structured Data Note (JSON-LD)", completed: true },
    { item: "Robots.txt และ Sitemap.xml", completed: true },
    { item: "Canonical URLs setup", completed: true },
    { item: "Schema Markup: Organization + Services", completed: true },
    { item: "Social Media Meta Tags", completed: true }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E5E5E5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-[#E5E5E5] mb-4">
            SEO & AEO Specification
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-3xl mx-auto">
            Complete SEO and Answer Engine Optimization specifications for CoreMind website
          </p>
          <Badge className="mt-4 bg-[#1A4D2E]">Figma Make Ready</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Meta Data Section */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <Search className="mr-2 text-[#4A8F6A]" size={20} />
                Meta Data & SEO Tags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm text-[#4A8F6A] mb-2">Meta Title:</h4>
                <p className="text-sm text-[#A0A0A0] bg-[#2A2A2A] p-3 rounded-lg">
                  {metaData.title}
                </p>
              </div>
              <div>
                <h4 className="text-sm text-[#4A8F6A] mb-2">Meta Description:</h4>
                <p className="text-sm text-[#A0A0A0] bg-[#2A2A2A] p-3 rounded-lg">
                  {metaData.description}
                </p>
              </div>
              <div>
                <h4 className="text-sm text-[#4A8F6A] mb-2">Keywords:</h4>
                <p className="text-sm text-[#A0A0A0] bg-[#2A2A2A] p-3 rounded-lg">
                  {metaData.keywords}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Heading Hierarchy */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <FileText className="mr-2 text-[#4A8F6A]" size={20} />
                Heading Hierarchy (H1-H3)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-h-80 overflow-y-auto">
                {headingHierarchy.map((heading, index) => (
                  <div key={index} className="flex items-start space-x-3 py-2">
                    <Badge variant="outline" className={`text-xs ${
                      heading.tag === 'H1' ? 'border-[#4A8F6A] text-[#4A8F6A]' :
                      heading.tag === 'H2' ? 'border-[#2D5A3D] text-[#2D5A3D]' :
                      'border-[#1A4D2E] text-[#1A4D2E]'
                    }`}>
                      {heading.tag}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#E5E5E5] truncate">{heading.content}</p>
                      <p className="text-xs text-[#A0A0A0]">{heading.section}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alt Text Guide */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <ImageIcon className="mr-2 text-[#4A8F6A]" size={20} />
                Image Alt Text Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {altTexts.map((item, index) => (
                  <div key={index} className="bg-[#2A2A2A] p-3 rounded-lg">
                    <h5 className="text-sm text-[#E5E5E5] mb-1">{item.asset}</h5>
                    <p className="text-xs text-[#A0A0A0]">{item.alt}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AEO Content Block */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <MessageCircle className="mr-2 text-[#4A8F6A]" size={20} />
                AEO Content (Q&A Style)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {faqContent.slice(0, 3).map((faq, index) => (
                  <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg">
                    <h5 className="text-sm text-[#4A8F6A] mb-2 flex items-start">
                      <HelpCircle size={14} className="mr-1 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h5>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    +3 more Q&As available
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Width Cards */}
        <div className="mt-8 space-y-6">
          {/* SEO Assets */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <ImageIcon className="mr-2 text-[#4A8F6A]" size={20} />
                SEO Assets Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {seoAssets.map((asset, index) => (
                  <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg text-center">
                    <h5 className="text-sm text-[#E5E5E5] mb-2">{asset.name}</h5>
                    <Badge className="bg-[#1A4D2E] mb-2">{asset.specs}</Badge>
                    <p className="text-xs text-[#A0A0A0]">{asset.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Complete FAQ List */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <HelpCircle className="mr-2 text-[#4A8F6A]" size={20} />
                Complete AEO FAQ Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {faqContent.map((faq, index) => (
                  <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg">
                    <h5 className="text-sm text-[#4A8F6A] mb-3 flex items-start">
                      <span className="bg-[#1A4D2E] text-[#E5E5E5] rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      {faq.question}
                    </h5>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SEO Checklist */}
          <Card className="bg-gradient-to-r from-[#1A4D2E] to-[#2D5A3D] border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-[#E5E5E5]">
                <CheckSquare className="mr-2 text-[#E5E5E5]" size={20} />
                SEO/AEO Implementation Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-[#E5E5E5]/10 p-3 rounded-lg">
                    <Check size={16} className="text-[#E5E5E5] flex-shrink-0" />
                    <span className="text-sm text-[#E5E5E5]">{item.item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Schema Notes */}
          <Card className="bg-[#1A1A1A] border border-[#4A8F6A]/20">
            <CardHeader>
              <CardTitle className="text-[#E5E5E5]">Schema/Structured Data Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#2A2A2A] p-4 rounded-lg">
                  <h5 className="text-sm text-[#4A8F6A] mb-2">JSON-LD Implementation:</h5>
                  <ul className="text-xs text-[#A0A0A0] space-y-1">
                    <li>• Organization Schema: CoreMind company information</li>
                    <li>• Service Schema: AI Training, Consulting, Team Building, Data Services</li>
                    <li>• LocalBusiness Schema: Contact info, address, business hours</li>
                    <li>• ContactPoint Schema: Phone, email, customer service</li>
                  </ul>
                </div>
                <div className="bg-[#2A2A2A] p-4 rounded-lg">
                  <h5 className="text-sm text-[#4A8F6A] mb-2">Technical Implementation:</h5>
                  <ul className="text-xs text-[#A0A0A0] space-y-1">
                    <li>• Canonical URLs set for all pages</li>
                    <li>• Open Graph tags for social media sharing</li>
                    <li>• Twitter Card metadata</li>
                    <li>• Robots.txt and XML sitemap configured</li>
                    <li>• Mobile-friendly and responsive design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-[#2A2A2A] border border-[#4A8F6A]/20 rounded-lg p-6">
            <h3 className="text-lg text-[#E5E5E5] mb-2">Implementation Ready for Figma Make</h3>
            <p className="text-sm text-[#A0A0A0] max-w-2xl mx-auto">
              This specification page contains all necessary information for SEO and AEO implementation. 
              Use the heading hierarchy, alt texts, and FAQ content when building the website in Figma Make or any other platform.
            </p>
            <Badge className="mt-3 bg-[#4A8F6A]">CoreMind v1.0</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
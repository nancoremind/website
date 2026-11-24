import { Card, CardContent } from "./ui/card";
import { Users, TrendingUp, Headphones, Calculator, Settings } from "lucide-react";

export function UseCasesSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const useCases = [
    {
      icon: Users,
      title: "HR Assistant",
      description: "AI ช่วยงาน HR ในการคัดกรอง Resume, จัดการข้อมูลพนักงาน และตอบคำถามด้านนโยบาย",
      benefits: ["ลดเวลาคัดกรอง Resume 80%", "ตอบคำถามพนักงานแบบ 24/7", "จัดการข้อมูลอัตโนมัติ"]
    },
    {
      icon: TrendingUp,
      title: "Sales Support",
      description: "ระบบ AI ช่วยวิเคราะห์ลูกค้า สร้าง Lead และให้คำแนะนำกลยุทธ์การขาย",
      benefits: ["เพิ่ม Conversion Rate 35%", "วิเคราะห์ Customer Behavior", "Automate Follow-up Process"]
    },
    {
      icon: Headphones,
      title: "IT Helpdesk",
      description: "AI Chatbot ที่ช่วยแก้ปัญหา IT ทั่วไป และส่งต่อ Ticket ที่ซับซ้อนให้ทีมเทคนิค",
      benefits: ["แก้ปัญหาทันที 70%", "ลดภาระงานทีม IT", "Available 24/7 Support"]
    },
    {
      icon: Calculator,
      title: "Finance Assistant",
      description: "ระบบ AI ช่วยงานการเงิน ตรวจสอบใบเสร็จ คำนวณงบประมาณ และสร้างรายงานทางการเงิน",
      benefits: ["ลดข้อผิดพลาด 90%", "ประมวลผลเร็วขึ้น 10 เท่า", "Real-time Financial Insights"]
    },
    {
      icon: Settings,
      title: "Operations Center",
      description: "AI Dashboard สำหรับติดตามและควบคุมการดำเนินงานแบบ Real-time",
      benefits: ["Real-time Monitoring", "Predictive Maintenance", "Process Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            Use Cases
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            AI Solutions ที่ช่วยยกระดับประสิทธิภาพในทุกแผนกขององค์กร
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-[#1A1A1A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="text-[#E5E5E5]" size={24} />
                  </div>
                  <h3 className="text-lg text-[#E5E5E5]">{useCase.title}</h3>
                </div>
                
                <p className="text-[#A0A0A0] mb-6 leading-relaxed text-sm">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm text-[#4A8F6A] mb-3">ประโยชน์ที่ได้รับ:</h4>
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-[#A0A0A0]">
                      <div className="w-1.5 h-1.5 bg-[#4A8F6A] rounded-full mr-2 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] rounded-2xl p-8 text-[#E5E5E5]">
            <h3 className="text-2xl md:text-3xl mb-4">พร้อมที่จะเริ่มต้นแล้วหรือยัง?</h3>
            <p className="text-lg mb-6 opacity-90">
              ปรึกษาผู้เชี่ยวชาญของเราเพื่อหา AI Solution ที่เหมาะกับองค์กรของคุณ
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] px-8 py-3 rounded-xl transition-colors duration-300"
            >
              เริ่มต้นวันนี้
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Star } from "lucide-react";

export function PricingSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const packages = [
    {
      name: "Training",
      subtitle: "AI Agentic Architect",
      price: "3,900",
      unit: "฿/Person",
      description: "หลักสูตรเข้มข้นสำหรับการสร้างผู้เชี่ยวชาญ AI",
      features: [
        "หลักสูตร 16 ชั่วโมง",
        "Hands-on Workshop",
        "Materials & Tools",
        "Certificate",
        "1 เดือน Support"
      ],
      popular: false,
      color: "from-[#4A8F6A] to-[#2D5A3D]"
    },
    {
      name: "Consulting",
      subtitle: "Discovery Phase",
      price: "25,000",
      unit: "฿/Project",
      description: "วิเคราะห์ความต้องการและวางแผนการพัฒนา",
      features: [
        "Business Analysis",
        "Requirement Gathering",
        "Solution Design",
        "Technology Roadmap",
        "Project Planning"
      ],
      popular: true,
      color: "from-[#1A4D2E] to-[#2D5A3D]"
    },
    {
      name: "Team Building",
      subtitle: "Agile Development",
      price: "Custom",
      unit: "Pricing",
      description: "ทีมงานคุณภาพสูงสำหรับพัฒนาโซลูชัน",
      features: [
        "Product Owner (PO)",
        "Business Analyst (BA)",
        "Solution Architect (SA)",
        "Dev & QA Team",
        "Agile Methodology"
      ],
      popular: false,
      color: "from-[#2D5A3D] to-[#4A8F6A]"
    },
    {
      name: "Transformation",
      subtitle: "End-to-End Solution",
      price: "Custom",
      unit: "Package",
      description: "โซลูชันครบวงจรสำหรับการเปลี่ยนผ่านดิจิทัล",
      features: [
        "Complete AI Integration",
        "System Implementation",
        "Data Migration",
        "Training & Support",
        "Go-Live & Maintenance"
      ],
      popular: false,
      color: "from-[#4A8F6A] to-[#1A4D2E]"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            Pricing
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            เลือกแพ็กเกจที่เหมาะสมกับความต้องการและงบประมาณขององค์กรของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative bg-[#2A2A2A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-[#4A8F6A]' : ''}`}>
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-[#4A8F6A] text-[#E5E5E5] px-3 py-1 rounded-full text-xs flex items-center">
                  <Star size={12} className="mr-1" />
                  ยอดนิยม
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`bg-gradient-to-r ${pkg.color} p-4 rounded-xl -m-6 mb-4`}>
                  <CardTitle className="text-lg text-[#E5E5E5]">{pkg.name}</CardTitle>
                  <p className="text-sm text-[#E5E5E5]/80">{pkg.subtitle}</p>
                </div>
                
                <div className="text-center py-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl text-[#E5E5E5]">{pkg.price}</span>
                    <span className="text-sm text-[#A0A0A0] ml-1">{pkg.unit}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#A0A0A0] mb-6 text-center">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#A0A0A0]">
                      <Check size={16} className="text-[#4A8F6A] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${pkg.popular 
                    ? 'bg-[#4A8F6A] hover:bg-[#2D5A3D] text-[#E5E5E5]' 
                    : 'bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#E5E5E5]'
                  } transition-colors duration-300 rounded-xl`}
                >
                  {pkg.price === "Custom" ? "ติดต่อเรา" : "เริ่มต้น"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-[#2A2A2A] border border-[#4A8F6A]/20 rounded-2xl p-8">
            <h3 className="text-xl text-[#E5E5E5] mb-4">ต้องการปรึกษาแพ็กเกจที่เหมาะสม?</h3>
            <p className="text-[#A0A0A0] mb-6">
              ทีมงานของเราพร้อมให้คำปรึกษาเพื่อหาโซลูชันที่ตอบโจทย์ความต้องการของคุณอย่างแท้จริง
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[#1A4D2E] hover:bg-[#2D5A3D] text-[#E5E5E5] px-8 py-3 rounded-xl">
                นัดหมายปรึกษาฟรี
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-[#4A8F6A] text-[#4A8F6A] hover:bg-[#4A8F6A] hover:text-[#E5E5E5] px-8 py-3 rounded-xl">
                ดาวน์โหลดข้อมูลเพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
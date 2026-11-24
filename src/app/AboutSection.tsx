import { Card, CardContent } from "./ui/card";
import { CheckCircle, Eye, Target, Lightbulb } from "lucide-react";
import roboticHandImage from "figma:asset/dc553bf31af60fe815475917e020dd44a1aee61d.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            แก่นกลางที่เร่งการปรับปรุง ปฏิวัติ และวิวัฒน์ ขับเคลื่อนด้วยคุณค่า นวัตกรรม การบ่มเพาะ และการมุ่งสู่อนาคต
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Vision */}
            <Card className="bg-[#2A2A2A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4">
                    <Eye className="text-[#E5E5E5]" size={24} />
                  </div>
                  <h3 className="text-xl text-[#E5E5E5]">วิสัยทัศน์</h3>
                </div>
                <p className="text-[#A0A0A0] leading-relaxed">
                  ช่วยองค์กรนำ AI และ Digital Transformation ไปใช้จริง เกิดผลลัพธ์จริง
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-[#2A2A2A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4">
                    <Target className="text-[#E5E5E5]" size={24} />
                  </div>
                  <h3 className="text-xl text-[#E5E5E5]">พันธกิจ</h3>
                </div>
                <p className="text-[#A0A0A0] leading-relaxed">
                  ทำให้ AI และ Automation ใช้งานง่าย ใช้ได้จริง และพร้อมต่อธุรกิจ
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={roboticHandImage} 
                alt="AI Technology and Innovation - Robotic Hand with Digital Interface"
                className="w-full h-auto rounded-2xl shadow-2xl animate-gentle-pulse"
              />
              
              {/* Twinkling light points around the image */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4A8F6A] rounded-full animate-twinkle-slow opacity-70"></div>
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#1A4D2E] rounded-full animate-twinkle-medium opacity-60"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#2D5A3D] rounded-full animate-twinkle-fast opacity-80"></div>
              <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-[#4A8F6A] rounded-full animate-twinkle-very-slow opacity-50"></div>
              <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-[#1A4D2E] rounded-full animate-twinkle-medium opacity-60"></div>
              <div className="absolute bottom-1/2 right-1/6 w-1 h-1 bg-[#4A8F6A] rounded-full animate-twinkle-fast opacity-70"></div>
            </div>
            {/* Background Glow Effect with pulsing */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A4D2E] to-[#4A8F6A] opacity-20 blur-3xl transform scale-110 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Strengths */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl text-[#E5E5E5] mb-8">จุดแข็งของเรา</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="text-[#E5E5E5]" size={32} />
            </div>
            <h4 className="text-lg text-[#E5E5E5] mb-3">ประสบการณ์ 18+ ปี</h4>
            <p className="text-[#A0A0A0]">
              ความเชี่ยวชาญที่สั่งสมมายาวนานในการพัฒนาและปรับใช้เทคโนโลยีขั้นสูง
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="text-[#E5E5E5]" size={32} />
            </div>
            <h4 className="text-lg text-[#E5E5E5] mb-3">เชี่ยวชาญทั้ง AI และ ERP</h4>
            <p className="text-[#A0A0A0]">
              ความรู้ลึกในทั้งระบบ AI ที่ทันสมัยและระบบ ERP ที่มีประสิทธิภาพ
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="text-[#E5E5E5]" size={32} />
            </div>
            <h4 className="text-lg text-[#E5E5E5] mb-3">End-to-End Solution</h4>
            <p className="text-[#A0A0A0]">
              บริการครบวงจรตั้งแต่เก็บ Requirement จนถึง Go-Live และ Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
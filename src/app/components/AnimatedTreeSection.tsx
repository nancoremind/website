import { Card, CardContent } from "./ui/card";
import { Eye, Target } from "lucide-react";
import treeImage from "figma:asset/a2d5402890b94bc96e70036331aa7fa4ff0ffc50.png";

export function AnimatedTreeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#4A8F6A] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#1A4D2E] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            แก่นกลางที่เร่งการปรับปรุง ปฏิวัติ และวิวัฒน์
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-4xl mx-auto leading-relaxed">
            ขับเคลื่อนด้วยคุณค่า นวัตกรรม การบ่มเพาะ และการมุ่งสู่อนาคต
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Vision & Mission Cards */}
          <div className="space-y-6">
            <Card className="bg-[#2A2A2A]/50 shadow-lg border border-[#4A8F6A]/30 rounded-2xl overflow-hidden backdrop-blur-sm group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-500 hover:border-[#4A8F6A]/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="text-[#E5E5E5]" size={28} />
                  </div>
                  <h3 className="text-2xl text-[#E5E5E5]">วิสัยทัศน์</h3>
                </div>
                <p className="text-[#A0A0A0] leading-relaxed text-lg">
                  ช่วยองค์กรนำ AI และ Digital Transformation ไปใช้จริง เกิดผลลัพธ์จริง และพร้อมต่อธุรกิจ
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2A2A2A]/50 shadow-lg border border-[#4A8F6A]/30 rounded-2xl overflow-hidden backdrop-blur-sm group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-500 hover:border-[#4A8F6A]/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="text-[#E5E5E5]" size={28} />
                  </div>
                  <h3 className="text-2xl text-[#E5E5E5]">พันธกิจ</h3>
                </div>
                <p className="text-[#A0A0A0] leading-relaxed text-lg">
                  ทำให้ AI และ Automation ใช้งานง่าย ใช้ได้จริง และพร้อมต่อธุรกิจในทุกรูปแบบ
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Animated Tree */}
          <div className="relative flex items-center justify-center">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1A4D2E] via-[#4A8F6A] to-[#2D5A3D] animate-spin-slow opacity-20 blur-2xl scale-110"></div>
            
            {/* Middle Glow Ring */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-[#4A8F6A] via-[#1A4D2E] to-[#2D5A3D] animate-spin-reverse opacity-30 blur-xl"></div>
            
            {/* Pulsing Light Effects */}
            <div className="absolute inset-8 rounded-full bg-[#4A8F6A] animate-pulse opacity-10"></div>
            <div className="absolute inset-12 rounded-full bg-[#1A4D2E] animate-pulse delay-500 opacity-15"></div>
            
            {/* Main Tree Container */}
            <div className="relative z-10 group cursor-pointer">
              {/* Tree Image with Rotation */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <img
                  src={treeImage}
                  alt="CoreMind Growth Tree - Innovation and Technology"
                  className="w-full h-full object-contain transform animate-spin-slow group-hover:animate-spin-fast transition-all duration-1000 filter drop-shadow-2xl"
                />
                
                {/* Sparkling Light Effects */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4A8F6A] rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#1A4D2E] rounded-full animate-ping delay-300 opacity-60"></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#2D5A3D] rounded-full animate-ping delay-700 opacity-80"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-[#4A8F6A] rounded-full animate-ping delay-1000 opacity-50"></div>
                
                {/* Floating Light Orbs */}
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-gradient-to-r from-[#4A8F6A] to-transparent rounded-full animate-float opacity-70"></div>
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-gradient-to-l from-[#1A4D2E] to-transparent rounded-full animate-float delay-500 opacity-60"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-[#2D5A3D] to-transparent rounded-full animate-float delay-1000 opacity-80"></div>
              </div>
              
              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 rounded-full border-2 border-[#4A8F6A] opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-full border border-[#1A4D2E] opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 delay-100"></div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl text-[#4A8F6A] italic">
            "Think Tech, Think Me"
          </p>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto">
            การเติบโตและพัฒนาที่ไม่หยุดนิ่ง เพื่อสร้างอนาคตที่ดีกว่าด้วยเทคโนโลยี
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-10px) translateX(10px);
            opacity: 0.9;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-fast {
          animation: spin-fast 5s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
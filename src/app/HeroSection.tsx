import { Button } from "./ui/button";
import { ArrowRight, Bot, Cpu, Zap } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-[#1A4D2E] via-[#2D5A3D] to-[#4A8F6A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Bot size={120} className="text-[#E5E5E5] animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <Cpu size={80} className="text-[#E5E5E5] animate-pulse delay-1000" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
          <Zap size={100} className="text-[#E5E5E5] animate-pulse delay-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#E5E5E5] mb-6 leading-tight">
            Empowering Businesses with 
            <span className="block text-[#0F0F0F]">AI & Digital Transformation</span>
          </h1>

          {/* Meta Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#E5E5E5]/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            CoreMind ช่วยองค์กรก้าวสู่ยุคใหม่ด้วย AI Automation, ERP Solutions และ Digital Consulting พร้อมบริการ Training, Consulting, Team Building
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              นัดหมายปรึกษาฟรี
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-2 border-[#E5E5E5] text-[#E5E5E5] hover:bg-[#E5E5E5] hover:text-[#1A4D2E] px-8 py-6 text-lg rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              เริ่มต้นวันนี้
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl text-[#0F0F0F] mb-2">18+</div>
              <div className="text-[#E5E5E5]/80">ปีประสบการณ์</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-[#0F0F0F] mb-2">100+</div>
              <div className="text-[#E5E5E5]/80">โปรเจคสำเร็จ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-[#0F0F0F] mb-2">24/7</div>
              <div className="text-[#E5E5E5]/80">การสนับสนุน</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
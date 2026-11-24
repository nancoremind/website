import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aiRobotImage from "figma:asset/e6d469abd942c6abe7b9ea02c23de701c2090276.png";
import codingWorkspaceImage from "figma:asset/3c50a93b07caf28355f55b837b31a17fa7b856f6.png";

export function TechShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: aiRobotImage,
      title: "AI & Human Collaboration",
      description: "เทคโนโลยี AI ที่ทำงานร่วมกับมนุษย์เพื่อสร้างสรรค์อนาคตที่ดีกว่า"
    },
    {
      image: codingWorkspaceImage,
      title: "Development Excellence",
      description: "การพัฒนาซอฟต์แวร์และระบบที่มีคุณภาพสูงด้วยเครื่องมือที่ทันสมัย"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            เทคโนโลยีที่เราเชี่ยวชาญ
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            ค้นพบเทคโนโลยีและโซลูชันที่ CoreMind นำมาใช้เพื่อยกระดับองค์กรของคุณ
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative group">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#E5E5E5] mb-4 transform translate-y-4 opacity-0 animate-slideUp">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed transform translate-y-4 opacity-0 animate-slideUp delay-200">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1A1A1A]/80 hover:bg-[#2A2A2A]/90 text-[#E5E5E5] p-3 rounded-full backdrop-blur-sm border border-[#4A8F6A]/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1A1A1A]/80 hover:bg-[#2A2A2A]/90 text-[#E5E5E5] p-3 rounded-full backdrop-blur-sm border border-[#4A8F6A]/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#4A8F6A] scale-125'
                    : 'bg-[#E5E5E5]/40 hover:bg-[#E5E5E5]/60'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E5E5E5]/20">
            <div 
              className="h-full bg-gradient-to-r from-[#1A4D2E] to-[#4A8F6A] transition-all duration-300 ease-linear"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-[#1A4D2E] to-[#2D5A3D] p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-[#E5E5E5] rounded-full"></div>
            </div>
            <h4 className="text-lg text-[#E5E5E5] mb-2">AI-Powered Solutions</h4>
            <p className="text-[#A0A0A0] text-sm">
              ระบบ AI ที่ทันสมัยและใช้งานได้จริง
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-[#2D5A3D] to-[#4A8F6A] p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-[#E5E5E5] rounded-full"></div>
            </div>
            <h4 className="text-lg text-[#E5E5E5] mb-2">Expert Team</h4>
            <p className="text-[#A0A0A0] text-sm">
              ทีมผู้เชี่ยวชาญด้านเทคโนโลยีระดับสูง
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-[#4A8F6A] to-[#1A4D2E] p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-[#E5E5E5] rounded-full"></div>
            </div>
            <h4 className="text-lg text-[#E5E5E5] mb-2">Quality Assurance</h4>
            <p className="text-[#A0A0A0] text-sm">
              มาตรฐานการพัฒนาที่สูงและเชื่อถือได้
            </p>
          </div>
        </div>
      </div>


    </section>
  );
}
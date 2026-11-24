import treeImage from "figma:asset/11ac1cd669f9093a68ca78f0362b2fcf14f869a3.png";

export function GlowingTreeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            แก่นกลางแห่งนวัตกรรม
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            ขับเคลื่อนด้วยเทคโนโลยีและความคิดสร้างสรรค์ เพื่อสร้างอนาคตที่ดีกว่า
          </p>
        </div>

        {/* Tree Container */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Background Glow Effects - Slow Pulsing */}
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-[#1A4D2E]/20 via-[#4A8F6A]/30 to-[#2D5A3D]/20 animate-slow-pulse blur-2xl"></div>
            <div className="absolute inset-0 -m-12 rounded-full bg-gradient-to-r from-[#4A8F6A]/15 via-[#1A4D2E]/25 to-[#4A8F6A]/15 animate-slow-pulse-delayed blur-3xl"></div>
            
            {/* Main Tree Image */}
            <div className="relative z-10 w-96 h-96 md:w-[500px] md:h-[500px] flex items-center justify-center">
              <img
                src={treeImage}
                alt="CoreMind Innovation Tree"
                className="w-full h-full object-contain animate-gentle-glow filter drop-shadow-2xl"
              />
              
              {/* Subtle Light Points around the tree */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#4A8F6A] rounded-full animate-twinkle opacity-60"></div>
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#1A4D2E] rounded-full animate-twinkle-delayed opacity-70"></div>
              <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#2D5A3D] rounded-full animate-twinkle-slow opacity-50"></div>
              <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-[#4A8F6A] rounded-full animate-twinkle-very-slow opacity-40"></div>
              
              {/* Larger ambient light orbs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#4A8F6A] to-transparent rounded-full animate-float-gentle opacity-30"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-[#1A4D2E] to-transparent rounded-full animate-float-gentle-delayed opacity-25"></div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl text-[#4A8F6A] italic animate-gentle-fade">
            "Think Tech, Think Me"
          </p>
          <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto animate-gentle-fade-delayed">
            การเติบโตที่ไม่หยุดนิ่ง ด้วยแสงแห่งนวัตกรรม
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes gentle-glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(74, 143, 106, 0.3)) drop-shadow(0 0 20px rgba(26, 77, 46, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(74, 143, 106, 0.5)) drop-shadow(0 0 40px rgba(26, 77, 46, 0.3));
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.6;
          }
        }
        
        @keyframes gentle-fade {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 4s ease-in-out infinite;
        }
        
        .animate-slow-pulse-delayed {
          animation: slow-pulse 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-gentle-glow {
          animation: gentle-glow 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-twinkle-delayed {
          animation: twinkle 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-twinkle-slow {
          animation: twinkle 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-twinkle-very-slow {
          animation: twinkle 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        .animate-float-gentle-delayed {
          animation: float-gentle 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-gentle-fade {
          animation: gentle-fade 5s ease-in-out infinite;
        }
        
        .animate-gentle-fade-delayed {
          animation: gentle-fade 6s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
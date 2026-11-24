import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "คุณสมชาย ใจดี",
      position: "CTO",
      company: "TechCorp Thailand",
      avatar: "https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU3NzAwNDQzfDA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
      quote: "CoreMind ช่วยให้เราสามารถนำ AI มาใช้ในองค์กรได้อย่างมีประสิทธิภาพ ทีมงานมีความเชี่ยวชาญสูงและให้การสนับสนุนที่ดีมาก"
    },
    {
      name: "คุณวรรณดี เก่งงาน",
      position: "HR Director",
      company: "SmartBiz Solutions",
      avatar: "https://images.unsplash.com/photo-1554727242-741c14fa561c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc1Nzc0ODA4N3ww&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
      quote: "ระบบ HR Assistant ที่พัฒนาให้ช่วยลดภาระงานของทีมได้มากถึง 70% และยังทำงานได้อย่างแม่นยำอีกด้วย"
    },
    {
      name: "คุณธนากร ก้าวหน้า",
      position: "Managing Director",
      company: "Future Enterprise",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTc3NDgwODd8MA&ixlib=rb-4.1.0&q=80&w=400",
      rating: 5,
      quote: "การลงทุนใน Digital Transformation กับ CoreMind เป็นการตัดสินใจที่ดีที่สุด ROI ที่ได้เกินความคาดหมาย"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1C1C1C] mb-6">
            เสียงจากลูกค้า
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            ความประทับใจและผลลัพธ์จริงจากลูกค้าที่เชื่อมั่นในบริการของเรา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#9BEBA0] to-[#36A06F] p-3 rounded-full">
                    <Quote className="text-white" size={20} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-[#1C1C1C]">{testimonial.name}</h4>
                    <p className="text-sm text-[#36A06F]">{testimonial.position}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-[#36A06F] mb-2">98%</div>
            <div className="text-gray-600">ความพึงพอใจ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-[#36A06F] mb-2">150+</div>
            <div className="text-gray-600">ลูกค้าที่เชื่อมั่น</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-[#36A06F] mb-2">300+</div>
            <div className="text-gray-600">โปรเจคสำเร็จ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl text-[#36A06F] mb-2">24/7</div>
            <div className="text-gray-600">การสนับสนุน</div>
          </div>
        </div>
      </div>
    </section>
  );
}
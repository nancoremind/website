import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { GraduationCap, Search, Users, Database, BookOpen, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CourseModal } from "./CourseModal";
import { coursesData } from "./coursesData";
import crmImage from "figma:asset/012d6abc44bf5e1977c04bddbfccbe3cfb6bc959.png";
import erpImage from "figma:asset/6829baacb8ca8ada140be3386e2589dc5ea645d8.png";
import automationImage from "figma:asset/edfa8085bb637be816463ba397091f29237de3cf.png";
import aiDataImage from "figma:asset/7f65f240ebd9245d51c29bd134f204df163053b7.png";

export function ServicesSection() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (courseKey: string) => {
    setSelectedCourse(courseKey);
    setIsModalOpen(true);
  };

  const services = [
    {
      icon: GraduationCap,
      title: "Training",
      subtitle: "CoreMind Academy",
      description: "อบรมเชิงลึกเพื่อสร้างผู้เชี่ยวชาญด้าน AI และ Automation ที่สามารถนำไปประยุกต์ใช้ในองค์กรได้จริง พร้อมเครื่องมือทันสมัยอย่าง Google AI Studio และ AI Figma Make",
      features: [
        "AI Fundamentals & Advanced Concepts",
        "Google AI Studio & Prompt Engineering", 
        "AI Product Design with Figma Make",
        "Hands-on Workshop กับเครื่องมือจริง",
        "Case Study จากโปรเจคจริง",
        "Certificate Program"
      ],
      image: automationImage,
      courses: [
        { key: "aiAgenticArchitect", name: "AI Agentic Architect" },
        { key: "generativeAI", name: "Generative AI for Enterprise" },
        { key: "dataMind", name: "Data-to-Decision Training" },
        { key: "aiSolutions", name: "AI Solutions Implementation" },
        { key: "aiProjectManager", name: "AI Project Manager Program" },
        { key: "googleAIStudio", name: "Google AI Studio Training" },
        { key: "aiFigmaMake", name: "AI Product Design with Figma" }
      ]
    },
    {
      icon: Search,
      title: "Consulting",
      subtitle: "Discovery & Advisory",
      description: "ให้คำปรึกษาเชิงลึกในการวิเคราะห์ความต้องการ วางแผนการเปลี่ยนแปลง และออกแบบโซลูชันที่เหมาะสม",
      features: [
        "Discovery Phase & Requirement Gathering",
        "Business Process Analysis", 
        "Digital Transformation Roadmap",
        "Technology Architecture Design"
      ],
      image: crmImage,
      courses: []
    },
    {
      icon: Users,
      title: "Team Building",
      subtitle: "Agile Development Team",
      description: "จัดทีมงานคุณภาพสูงแบบ Agile เพื่อพัฒนาและนำโซลูชันไปใช้งานได้อย่างมีประสิทธิภาพ",
      features: [
        "Product Owner (PO)",
        "Business Analyst (BA)",
        "Solution Architect (SA)", 
        "Development & QA Team"
      ],
      image: erpImage,
      courses: []
    },
    {
      icon: Database,
      title: "Data & AI Services",
      subtitle: "RAG Flow & Knowledge Base",
      description: "พัฒนาระบบ AI ที่ครบครันด้วย RAG Technology, Knowledge Management และ AI Integration รวมถึงการใช้ Google AI Studio สำหรับ Prototyping",
      features: [
        "RAG Flow Implementation",
        "Knowledge Base Development",
        "AI Model Integration with Google AI Studio", 
        "Data Pipeline & Analytics",
        "AI Prototype Development"
      ],
      image: aiDataImage,
      courses: []
    }
  ];

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
    <>
      <section id="services" className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
              Services
            </h2>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
              บริการครบวงจรสำหรับการเปลี่ยนผ่านสู่ยุคดิจิทัลด้วย AI และ Automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#1A1A1A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-[#4A8F6A]/20 transition-all duration-300 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-[#E5E5E5]" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#E5E5E5]">{service.title}</CardTitle>
                      <p className="text-sm text-[#4A8F6A]">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#A0A0A0]">
                        <div className="w-2 h-2 bg-[#4A8F6A] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Course Buttons - Only show for Training service */}
                  {service.courses.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-[#4A8F6A]/20">
                      <div className="flex items-center text-sm text-[#4A8F6A] mb-3">
                        <BookOpen size={16} className="mr-2" />
                        หลักสูตรที่เปิดสอน
                      </div>
                      {service.courses.map((course, courseIndex) => (
                        <Button
                          key={courseIndex}
                          variant="outline"
                          onClick={() => handleCourseClick(course.key)}
                          className="w-full justify-between bg-transparent border-[#4A8F6A]/30 text-[#E5E5E5] hover:bg-[#4A8F6A]/10 hover:border-[#4A8F6A] transition-all duration-300"
                        >
                          <span className="text-sm">{course.name}</span>
                          <ChevronRight size={16} />
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Contact Button for non-training services */}
                  {service.courses.length === 0 && (
                    <div className="pt-4 border-t border-[#4A8F6A]/20">
                      <Button
                        onClick={scrollToContact}
                        className="w-full bg-[#1A4D2E] hover:bg-[#2D5A3D] text-[#E5E5E5] transition-colors duration-300"
                      >
                        สอบถามรายละเอียด
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Training Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] rounded-2xl p-8 text-[#E5E5E5]">
              <h3 className="text-2xl md:text-3xl mb-4">CoreMind Academy</h3>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                สร้างผู้เชี่ยวชาญ AI ยุคใหม่ ผ่านหลักสูตร Generative AI, Agentic AI, Google AI Studio และ AI Product Design ที่ออกแบบให้ใช้ได้จริงในองค์กร
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                <Button
                  onClick={() => handleCourseClick("aiAgenticArchitect")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">AI Agentic Architect</div>
                  <div className="text-xs opacity-80">No-Code AI Agent</div>
                </Button>
                <Button
                  onClick={() => handleCourseClick("generativeAI")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">Generative AI</div>
                  <div className="text-xs opacity-80">LLM & Automation</div>
                </Button>
                <Button
                  onClick={() => handleCourseClick("dataMind")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">Data-to-Decision</div>
                  <div className="text-xs opacity-80">DataMind Framework</div>
                </Button>
                <Button
                  onClick={() => handleCourseClick("aiSolutions")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">AI Solutions</div>
                  <div className="text-xs opacity-80">Production Ready</div>
                </Button>
                <Button
                  onClick={() => handleCourseClick("aiProjectManager")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">AI Project Manager</div>
                  <div className="text-xs opacity-80">Professional PM</div>
                </Button>
                <Button
                  onClick={() => handleCourseClick("googleAIStudio")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">Google AI Studio</div>
                  <div className="text-xs opacity-80">Prompt Engineering</div>
                </Button>
                <Button
                  onClick={() => handleCourseClick("aiFigmaMake")}
                  className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] p-4 rounded-xl transition-colors duration-300 h-auto flex flex-col items-start text-left"
                >
                  <div className="text-sm font-medium mb-1">AI Figma Make</div>
                  <div className="text-xs opacity-80">AI-Powered Design</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modal */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse ? coursesData[selectedCourse as keyof typeof coursesData] : null}
      />
    </>
  );
}
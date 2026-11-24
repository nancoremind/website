import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, Award, ChevronRight } from "lucide-react";

interface CourseModule {
  title: string;
  description: string;
  duration: string;
}

interface CourseDetails {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  participants: string;
  price: string;
  modules: CourseModule[];
  benefits: string[];
  tools: string[];
}

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseDetails | null;
}

export function CourseModal({ isOpen, onClose, course }: CourseModalProps) {
  if (!course) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1A1A1A] border border-[#4A8F6A]/20 text-[#E5E5E5]">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl md:text-3xl text-[#E5E5E5] mb-2">
            {course.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-[#4A8F6A] mb-4">
            {course.subtitle}
          </DialogDescription>
          <p className="text-[#A0A0A0] leading-relaxed">{course.description}</p>
        </DialogHeader>

        <div className="space-y-8">
          {/* Course Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Clock className="mx-auto mb-2 text-[#4A8F6A]" size={20} />
              <div className="text-sm text-[#A0A0A0]">ระยะเวลา</div>
              <div className="text-[#E5E5E5]">{course.duration}</div>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Award className="mx-auto mb-2 text-[#4A8F6A]" size={20} />
              <div className="text-sm text-[#A0A0A0]">ระดับ</div>
              <div className="text-[#E5E5E5]">{course.level}</div>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Users className="mx-auto mb-2 text-[#4A8F6A]" size={20} />
              <div className="text-sm text-[#A0A0A0]">ผู้เข้าร่วม</div>
              <div className="text-[#E5E5E5]">{course.participants}</div>
            </div>
            <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] rounded-xl p-4 text-center">
              <div className="text-sm text-[#E5E5E5]/80">ราคา</div>
              <div className="text-lg text-[#E5E5E5]">{course.price}</div>
            </div>
          </div>

          {/* Course Modules */}
          <div>
            <h3 className="text-xl text-[#E5E5E5] mb-4 flex items-center">
              <ChevronRight className="mr-2 text-[#4A8F6A]" size={20} />
              หลักสูตรและเนื้อหา
            </h3>
            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-xl p-6 border border-[#4A8F6A]/10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg text-[#E5E5E5]">{module.title}</h4>
                    <Badge variant="outline" className="border-[#4A8F6A] text-[#4A8F6A] bg-transparent">
                      {module.duration}
                    </Badge>
                  </div>
                  <p className="text-[#A0A0A0] leading-relaxed">{module.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl text-[#E5E5E5] mb-4 flex items-center">
              <ChevronRight className="mr-2 text-[#4A8F6A]" size={20} />
              ประโยชน์ที่ได้รับ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-[#A0A0A0]">
                  <div className="w-2 h-2 bg-[#4A8F6A] rounded-full mr-3 flex-shrink-0"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl text-[#E5E5E5] mb-4 flex items-center">
              <ChevronRight className="mr-2 text-[#4A8F6A]" size={20} />
              เครื่องมือที่ใช้
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((tool, index) => (
                <Badge key={index} className="bg-[#2A2A2A] text-[#E5E5E5] border border-[#4A8F6A]/20 hover:bg-[#4A8F6A]/10">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] rounded-xl p-6 text-center">
            <h3 className="text-xl text-[#E5E5E5] mb-3">พร้อมเริ่มต้นแล้วหรือยัง?</h3>
            <p className="text-[#E5E5E5]/80 mb-4">ติดต่อเราเพื่อสอบถามรายละเอียดเพิ่มเติมและจองที่นั่ง</p>
            <Button
              onClick={scrollToContact}
              className="bg-[#0F0F0F] hover:bg-[#1A1A1A] text-[#E5E5E5] px-8 py-3 rounded-xl transition-colors duration-300"
            >
              สอบถามรายละเอียด
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
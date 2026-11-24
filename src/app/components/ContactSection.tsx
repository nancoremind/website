import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("กรุณากรอกข้อมูลที่จำเป็น (ชื่อ-นามสกุล, อีเมล, และข้อความ)");
      return;
    }
    
    // Create email content with form data (similar to quick message format)
    const subject = `ข้อความจาก ${formData.name} - ${formData.company || 'ไม่ระบุบริษัท'}`;
    const body = `สวัสดีครับ/ค่ะ,

ต้องการสอบถามข้อมูลบริการ CoreMind

รายละเอียดผู้ติดต่อ:
ชื่อ-นามสกุล: ${formData.name}
อีเมล: ${formData.email}
บริษัท/องค์กร: ${formData.company || 'ไม่ระบุ'}

ข้อความ/ความต้องการ:
${formData.message}

---
ส่งจากเว็บไซต์ CoreMind (coremind.cc)`;

    // Create mailto link
    const mailtoLink = `mailto:nan@coremind.cc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1000);
    
    // Show success message
    alert("กำลังเปิดโปรแกรมอีเมลของคุณ... กรุณาส่งข้อความที่เตรียมไว้ให้แล้ว");
  };

  // Quick email function
  const handleQuickEmail = () => {
    const subject = "สอบถามข้อมูลบริการ CoreMind";
    const body = `สวัสดีครับ/ค่ะ,

สนใจสอบถามเกี่ยวกับบริการของ CoreMind 

---
ส่งจากเว็บไซต์ CoreMind (coremind.cc)`;

    const mailtoLink = `mailto:nan@coremind.cc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E5E5E5] mb-6">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            พร้อมที่จะเริ่มต้นการเปลี่ยนผ่านสู่ยุคดิจิทัลแล้วหรือยัง? ติดต่อเราวันนี้
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[#2A2A2A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] text-[#E5E5E5]">
              <CardTitle className="text-xl">ส่งข้อความถึงเรา</CardTitle>
              <p className="text-[#E5E5E5]/80 text-sm">กรอกข้อมูลด้านล่างและเราจะติดต่อกลับโดยเร็วที่สุด</p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#E5E5E5] mb-2">
                    ชื่อ-นามสกุล *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-[#1A1A1A] border-[#4A8F6A]/30 text-[#E5E5E5] placeholder:text-[#A0A0A0] focus:border-[#4A8F6A] focus:ring-[#4A8F6A]"
                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#E5E5E5] mb-2">
                    อีเมล *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-[#1A1A1A] border-[#4A8F6A]/30 text-[#E5E5E5] placeholder:text-[#A0A0A0] focus:border-[#4A8F6A] focus:ring-[#4A8F6A]"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-[#E5E5E5] mb-2">
                    บริษัท/องค์กร
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-[#1A1A1A] border-[#4A8F6A]/30 text-[#E5E5E5] placeholder:text-[#A0A0A0] focus:border-[#4A8F6A] focus:ring-[#4A8F6A]"
                    placeholder="ชื่อบริษัทหรือองค์กร"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#E5E5E5] mb-2">
                    ข้อความ *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-xl bg-[#1A1A1A] border-[#4A8F6A]/30 text-[#E5E5E5] placeholder:text-[#A0A0A0] focus:border-[#4A8F6A] focus:ring-[#4A8F6A] resize-none"
                    placeholder="กรุณาระบุรายละเอียดความต้องการ หรือคำถามที่ต้องการสอบถาม"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1A4D2E] hover:bg-[#2D5A3D] text-[#E5E5E5] py-3 rounded-xl transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  ส่งข้อความ
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-[#2A2A2A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl text-[#E5E5E5] mb-6">ข้อมูลการติดต่อ</h3>
                
                {/* Quick Email Button */}
                <div className="mb-6">
                  <Button
                    onClick={handleQuickEmail}
                    className="w-full bg-gradient-to-r from-[#4A8F6A] to-[#2D5A3D] hover:from-[#2D5A3D] hover:to-[#1A4D2E] text-[#E5E5E5] py-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#4A8F6A]/20"
                  >
                    <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                    </svg>
                    ส่งข้อความด่วน
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4 flex-shrink-0">
                      <Mail className="text-[#E5E5E5]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#E5E5E5] mb-1">อีเมล</h4>
                      <a href="mailto:nan@coremind.cc" className="text-[#4A8F6A] hover:underline">
                        nan@coremind.cc
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4 flex-shrink-0">
                      <Phone className="text-[#E5E5E5]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#E5E5E5] mb-1">โทรศัพท์</h4>
                      <a href="tel:0882516388" className="text-[#4A8F6A] hover:underline">
                        088-251-6388
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] p-3 rounded-xl mr-4 flex-shrink-0">
                      <MapPin className="text-[#E5E5E5]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#E5E5E5] mb-1">ที่อยู่</h4>
                      <p className="text-[#A0A0A0]">ลำพูน, ประเทศไทย</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-[#2A2A2A] shadow-lg border border-[#4A8F6A]/20 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl text-[#E5E5E5] mb-6">ติดตามเราได้ที่</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.facebook.com/nan.atchareeya"
                    className="flex items-center p-4 bg-[#1A1A1A] text-[#E5E5E5] rounded-xl hover:bg-[#1A4D2E] hover:text-[#E5E5E5] transition-all duration-300 group"
                  >
                    <Facebook className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="text-sm">Facebook</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/nanatchareeya"
                    className="flex items-center p-4 bg-[#1A1A1A] text-[#E5E5E5] rounded-xl hover:bg-[#1A4D2E] hover:text-[#E5E5E5] transition-all duration-300 group"
                  >
                    <Instagram className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="text-sm">Instagram</span>
                  </a>
                  
                  <a
                    href="https://www.tiktok.com/@nanatchareeya"
                    className="flex items-center p-4 bg-[#1A1A1A] text-[#E5E5E5] rounded-xl hover:bg-[#1A4D2E] hover:text-[#E5E5E5] transition-all duration-300 group"
                  >
                    <svg className="mr-3 group-hover:scale-110 transition-transform duration-300" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.84v2.44a4.83 4.83 0 01-3.77 4.25A4.83 4.83 0 015.44 11v2.44a4.83 4.83 0 013.77 4.25V22h2.84v-4.31a4.83 4.83 0 013.77-4.25A4.83 4.83 0 0119.59 9V6.69z"/>
                    </svg>
                    <span className="text-sm">TikTok</span>
                  </a>
                  
                  <a
                    href="https://line.me/ti/p/kamaret111"
                    className="flex items-center p-4 bg-[#1A1A1A] text-[#E5E5E5] rounded-xl hover:bg-[#1A4D2E] hover:text-[#E5E5E5] transition-all duration-300 group"
                  >
                    <MessageCircle className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="text-sm">Line</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gradient-to-r from-[#2D5A3D] to-[#1A4D2E] text-[#E5E5E5] shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">เวลาทำการ</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>จันทร์ - ศุกร์</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เสาร์ - อาทิตย์</span>
                    <span>นัดหมายล่วงหน้า</span>
                  </div>
                  <div className="mt-4 text-xs opacity-90">
                    * สำหรับกรณีเร่งด่วน สามารถติดต่อได้ตลอด 24 ชั่วโมง
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
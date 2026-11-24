import { Mail, Phone, Linkedin, Facebook, MessageCircle, Instagram } from "lucide-react";
import logoImage from "figma:asset/b823a89d8afe77c7c285af0c1375ea27d8ba3812.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "บริการ", href: "#services" },
    { name: "แพ็กเกจ", href: "#pricing" },
    { name: "ติดต่อ", href: "#contact" }
  ];

  const services = [
    { name: "AI Training", href: "#services" },
    { name: "Digital Consulting", href: "#services" },
    { name: "Team Building", href: "#services" },
    { name: "Data & AI Services", href: "#services" }
  ];

  return (
    <footer className="bg-[#0F0F0F] text-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="CoreMind Logo" 
                className="h-10 w-10 brightness-0 invert"
              />
              <div>
                <h3 className="text-xl text-[#E5E5E5] tracking-tight">CoreMind</h3>
                <p className="text-sm text-[#A0A0A0] -mt-1">Think Tech, Think Me</p>
              </div>
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              แก่นกลางที่เร่งการปรับปรุง ปฏิวัติ และวิวัฒน์ 
              ขับเคลื่อนด้วยคุณค่า นวัตกรรม การบ่มเพาะ และการมุ่งสู่อนาคต
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/nan.atchareeya" 
                className="bg-[#2A2A2A] hover:bg-[#1A4D2E] p-2 rounded-lg transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/nanatchareeya" 
                className="bg-[#2A2A2A] hover:bg-[#1A4D2E] p-2 rounded-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@nanatchareeya" 
                className="bg-[#2A2A2A] hover:bg-[#1A4D2E] p-2 rounded-lg transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.84v2.44a4.83 4.83 0 01-3.77 4.25A4.83 4.83 0 015.44 11v2.44a4.83 4.83 0 013.77 4.25V22h2.84v-4.31a4.83 4.83 0 013.77-4.25A4.83 4.83 0 0119.59 9V6.69z"/>
                </svg>
              </a>
              <a 
                href="https://line.me/ti/p/kamaret111" 
                className="bg-[#2A2A2A] hover:bg-[#1A4D2E] p-2 rounded-lg transition-colors duration-300"
                aria-label="Line OA"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6">เมนูหลัก</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#A0A0A0] hover:text-[#4A8F6A] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">บริการของเรา</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-[#A0A0A0] hover:text-[#4A8F6A] text-sm transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-6">ติดต่อเรา</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-[#4A8F6A] mr-3 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-sm text-[#A0A0A0]">อีเมล</p>
                  <a 
                    href="mailto:nan@coremind.cc" 
                    className="text-[#E5E5E5] hover:text-[#4A8F6A] text-sm transition-colors duration-300"
                  >
                    nan@coremind.cc
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-[#4A8F6A] mr-3 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-sm text-[#A0A0A0]">โทรศัพท์</p>
                  <a 
                    href="tel:0882516388" 
                    className="text-[#E5E5E5] hover:text-[#4A8F6A] text-sm transition-colors duration-300"
                  >
                    088-251-6388
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="text-[#4A8F6A] mr-3 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-sm text-[#A0A0A0]">ที่อยู่</p>
                  <p className="text-[#E5E5E5] text-sm">ลำพูน, ประเทศไทย</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A8F6A]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-[#A0A0A0] mb-4 md:mb-0">
              © CoreMind Co., Ltd. 2025
            </div>
            <div className="flex items-center space-x-6 text-sm text-[#A0A0A0]">
              <a href="#" className="hover:text-[#4A8F6A] transition-colors duration-300">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="hover:text-[#4A8F6A] transition-colors duration-300">
                ข้อกำหนดการใช้งาน
              </a>
              <a href="#" className="hover:text-[#4A8F6A] transition-colors duration-300">
                คุกกี้
              </a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="text-[#4A8F6A] text-sm italic">
            "Think Tech, Think Me" - เวลาใครคิดถึงเทคโนโลยี ต้องนึกถึงเราเป็นที่แรก
          </p>
        </div>
      </div>
    </footer>
  );
}
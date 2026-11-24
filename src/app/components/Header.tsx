import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "figma:asset/b823a89d8afe77c7c285af0c1375ea27d8ba3812.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "บริการ", href: "#services" },
    { name: "แพ็กเกจ", href: "#pricing" },
    { name: "ติดต่อ", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0F0F0F] backdrop-blur-sm border-b border-[#4A8F6A]/30 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="CoreMind Logo" 
              className="h-10 w-10 brightness-0 invert"
            />
            <div>
              <div className="text-xl text-[#E5E5E5] tracking-tight drop-shadow-sm">CoreMind</div>
              <p className="text-xs text-[#E5E5E5]/90 -mt-1 drop-shadow-sm">Think Tech, Think Me</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#E5E5E5]/90 hover:text-[#E5E5E5] hover:drop-shadow-sm transition-all duration-200 text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#E5E5E5]/90 hover:text-[#E5E5E5] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E5E5E5]/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#E5E5E5]/90 hover:text-[#E5E5E5] hover:drop-shadow-sm transition-all duration-200 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
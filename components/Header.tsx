"use client";

import { useState, useEffect } from "react";
import { MotionDiv } from "./MotionDiv";
import { Smartphone, LayoutGrid, Users, HelpCircle, Menu, X} from "lucide-react";
export const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#services", icon: <LayoutGrid className="w-4 h-4" /> },
    { name: "Cómo funciona", href: "#how-it-works", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Profesionales", href: "#pro", icon: <Users className="w-4 h-4" /> },
    { name: "FAQ", href: "#faq", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
      <header
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-full ${
              isScrolled ? "glass-card py-3 px-6 shadow-premium" : "bg-transparent py-5 px-6"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <Smartphone className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-text-dark tracking-tight">MultiPe</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-text-muted hover:text-primary font-medium transition-colors flex items-center space-x-1"
                >
                  {link.name}
                </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/app">
              <button className="text-text-dark font-medium hover:text-primary transition-colors cursor-pointer px-4">
                Iniciar Sesión
              </button>
            </a>

            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer">
              Registrarse
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
              className="md:hidden text-text-dark p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <MotionDiv
                className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl p-6 shadow-premium md:hidden"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-text-dark text-lg font-medium p-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                ))}
                <hr className="border-gray-100" />
                <div className="flex flex-col space-y-3 pt-2">
                  <button className="w-full text-center py-3 font-medium text-text-dark">Iniciar Sesión</button>
                  <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg">Descargar App</button>
                </div>
              </div>
            </MotionDiv>
        )}
      </header>
  );
};

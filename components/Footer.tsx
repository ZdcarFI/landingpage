"use client";

import { Smartphone, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="/" className="flex items-center space-x-2">
                <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Smartphone className="text-white w-6 h-6" />
                </span>
                <span className="text-2xl font-bold text-text-dark tracking-tight">MultiPe</span>
              </a>
              <p className="text-text-muted leading-relaxed">
                La plataforma líder para conectar con profesionales de confianza en tu ciudad. Calidad y seguridad garantizadas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-text-dark mb-6">Compañía</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Sobre nosotros</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Carreras</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Prensa</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text-dark mb-6">Soporte</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Centro de ayuda</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Seguridad</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Términos de servicio</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors cursor-pointer">Privacidad</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text-dark mb-6">Contáctanos</h4>
              <ul className="space-y-4 text-text-muted">
                <li>soporte@MultiPe.com</li>
                <li>Av. Innovación 123, Tech City</li>
                <li>+57 (123) 456-7890</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
            <p>© {new Date().getFullYear()} MultiPe. Todos los derechos reservados.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">Términos</a>
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors cursor-pointer">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
  );
};

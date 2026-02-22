"use client";

import { MotionDiv, staggerContainer, fadeInUp } from "./MotionDiv";
import { Apple, PlayCircle, Star, ShieldCheck, Clock } from "lucide-react";

export const Hero = () => {
  return (
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
              className="flex flex-col space-y-8"
              variants={staggerContainer}
          >
            <MotionDiv variants={fadeInUp}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide uppercase">
              ✨ El futuro de los servicios a domicilio
            </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-text-dark leading-[1.1] mb-6 tracking-tight">
                ¿Problemas en casa? <br />
                <span className="text-primary italic">MultiPe</span> lo resuelve.
              </h1>
              <p className="text-xl text-text-muted leading-relaxed max-w-lg mb-4">
                Encuentra plomeros, electricistas, niñeras y más, calificados y verificados. La solución que necesitas, a un tap de distancia.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-3 bg-text-dark bg-black text-white px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105 cursor-pointer">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-70 leading-none">Descargar en</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 border-2 border-gray-200 hover:border-primary px-8 py-4 rounded-2xl transition-all hover:scale-105 cursor-pointer bg-white shadow-lg">
                <PlayCircle className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-text-muted leading-none">Disponible en</p>
                  <p className="text-lg font-bold text-text-dark leading-none">Google Play</p>
                </div>
              </button>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                      <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? "from-primary/40 to-primary" : "from-secondary/40 to-secondary"}`} />
                    </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm font-semibold text-text-dark">+10,000 usuarios confían</p>
              </div>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
              className="relative"
              variants={fadeInUp}
          >
            {/* Mockup Simulation */}
            <div className="relative z-10 w-full max-w-[320px] mx-auto aspect-[9/19] bg-text-dark rounded-[3rem] border-[8px] border-text-dark shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 bg-text-dark flex justify-center items-center">
                <div className="w-20 h-4 bg-black rounded-full" />
              </div>
              <div className="w-full h-full bg-background-light p-4 pt-10">
                <div className="w-full h-32 bg-primary/20 rounded-2xl mb-4 animate-pulse" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="aspect-square bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex flex-col items-center justify-center">
                      <ShieldCheck className="text-primary w-6 h-6 mb-1" />
                      <div className="h-2 w-10 bg-gray-100 rounded" />
                    </div>
                    <div className="aspect-square bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex flex-col items-center justify-center">
                      <Clock className="text-secondary w-6 h-6 mb-1" />
                      <div className="h-2 w-10 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating cards */}
            <MotionDiv
                className="absolute top-1/4 -right-10 md:-right-20 glass-card p-4 rounded-2xl shadow-premium z-20 max-w-[180px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <ShieldCheck className="text-white w-4 h-4" />
                </div>
                <span className="text-[12px] font-bold text-text-dark">Profesional Verificado</span>
              </div>
              <p className="text-[10px] text-text-muted">Juan Pérez acaba de ser asignado a tu solicitud.</p>
            </MotionDiv>

            <MotionDiv
                className="absolute bottom-1/4 -left-10 md:-left-20 glass-card p-4 rounded-2xl shadow-premium z-20 max-w-[180px]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Star className="text-white w-4 h-4 fill-current" />
                </div>
                <span className="text-[12px] font-bold text-text-dark">Excelente Servicio</span>
              </div>
              <p className="text-[10px] text-text-muted">"Increíble rapidez y atención de primera."</p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>
  );
};

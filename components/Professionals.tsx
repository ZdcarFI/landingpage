"use client";

import { MotionDiv, fadeInUp } from "./MotionDiv";
import { Briefcase, DollarSign, CalendarCheck } from "lucide-react";

export const Professionals = () => {
  return (
      <section id="pro" className="py-24 max-w-7xl mx-auto px-6">
        <MotionDiv
            className="bg-primary rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl"
            variants={fadeInUp}
        >
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                ¿Eres un profesional? <br />
                Aumenta tus ingresos con MultiPe.
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl">
                Únete a la mayor red de servicios a domicilio. Tú eliges cuándo trabajar, nosotros te enviamos a los clientes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Más trabajo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Pagos seguros</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Tu propio horario</span>
                </div>
              </div>

              <button className="bg-white text-primary hover:bg-white/90 font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:scale-105 cursor-pointer">
                Empezar ahora →
              </button>
            </div>

            <div className="flex-1 flex justify-center">
              {/* Visual representation of a Pro card */}
              <MotionDiv
                  className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex flex-col items-center text-center max-w-[300px]"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="w-24 h-24 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-3xl">P</div>
                </div>
                <h4 className="text-xl font-bold mb-1">Perfiles Pro</h4>
                <p className="text-white/60 text-sm mb-4">Gana insignias por tu excelente trabajo.</p>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Briefcase key={i} className="w-3 h-3 fill-current mx-0.5" />)}
                  </div>
                  <span className="text-[12px] font-bold text-white">Top Rated</span>
                </div>
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </section>
  );
};

"use client";

import { MotionDiv, staggerContainer, fadeInUp } from "./MotionDiv";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Martínez",
    role: "Madre de familia",
    text: "Conseguir una niñera de confianza solía tomarnos días. Con MultiPe, encontramos a la mejor en menos de una hora. El sistema de calificaciones da mucha tranquilidad.",
    stars: 5,
    avatar: "bg-primary/20"
  },
  {
    name: "Carlos Ruiz",
    role: "Diseñador Senior",
    text: "El electricista que vino fue súper profesional y resolvió todo rápido. El app es muy fluida y el proceso de pago es totalmente seguro. ¡Recomendadísimo!",
    stars: 5,
    avatar: "bg-secondary/20"
  },
  {
    name: "Elena Gómez",
    role: "Emprendedora",
    text: "Tengo un perro muy inquieto y el cuidador que contacté fue increíble. MultiPe es mi app favorita para cualquier emergencia en casa o cuidado de mi mascota.",
    stars: 5,
    avatar: "bg-indigo-200"
  }
];

export const Testimonials = () => {
  return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <MotionDiv
              className="text-center mb-16"
              variants={fadeInUp}
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Testimonios</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4 tracking-tight">
              Lo que dicen nuestros <br />
              <span className="text-primary italic">usuarios felices</span>.
            </h2>
          </MotionDiv>

          <MotionDiv
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
          >
            {testimonials.map((item, index) => (
                <MotionDiv
                    key={index}
                    className="relative p-10 bg-background-light rounded-[2.5rem] border border-gray-50 flex flex-col items-start"
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                >
                  <Quote className="text-primary/20 w-12 h-12 absolute top-8 right-8" />

                  <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                    {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-text-dark text-lg italic leading-relaxed mb-8 relative z-10">
                    &#34;{item.text}&#34;
                  </p>

                  <div className="flex items-center space-x-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full ${item.avatar} overflow-hidden flex items-center justify-center font-bold text-primary`}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-text-dark leading-none pb-1">{item.name}</p>
                      <p className="text-sm text-text-muted">{item.role}</p>
                    </div>
                  </div>
                </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>
  );
};

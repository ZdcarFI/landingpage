"use client";

import { MotionDiv, staggerContainer, fadeInUp } from "./MotionDiv";
import { Search, UserCheck, CheckCircle2, Star, Shield, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Busca el servicio",
    subtitle: "Miles de profesionales cerca de ti",
    description:
        "Plomeros, electricistas, niñeras, técnicos y más. Encuentra exactamente lo que necesitas en segundos.",
    icon: <Search className="w-8 h-8" />,
    tag: "Rápido y fácil",
    tagIcon: <Zap className="w-3 h-3" />,
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
    glow: "rgba(59,130,246,0.35)",
    light: "#dbeafe",
    textAccent: "#1e40af",
  },
  {
    number: "02",
    title: "Elige al profesional",
    subtitle: "Verificados y con reseñas reales",
    description:
        "Revisa calificaciones, fotos del trabajo y opiniones de vecinos de tu zona. Cero sorpresas.",
    icon: <UserCheck className="w-8 h-8" />,
    tag: "100% verificado",
    tagIcon: <Shield className="w-3 h-3" />,
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    glow: "rgba(16,185,129,0.35)",
    light: "#d1fae5",
    textAccent: "#047857",
  },
  {
    number: "03",
    title: "¡Problema resuelto!",
    subtitle: "Paga seguro, sin efectivo",
    description:
        "Agenda la visita, paga con total seguridad y califica el servicio. Así de simple, así de confiable.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    tag: "Garantizado",
    tagIcon: <Star className="w-3 h-3" />,
    gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
    glow: "rgba(99,102,241,0.35)",
    light: "#e0e7ff",
    textAccent: "#4338ca",
  },
];

const stats = [
  { value: "+50K", label: "Usuarios activos" },
  { value: "4.9★", label: "Calificación promedio" },
  { value: "+200", label: "Servicios disponibles" },
  { value: "24/7", label: "Soporte disponible" },
];

export const HowItWorks = () => {
  return (
      <section
          id="how-it-works"
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 60%, #f9fafb 100%)",
            padding: "7rem 0 6rem",
          }}
      >
        {/* Decorative background blobs */}
        <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
            radial-gradient(ellipse 60% 40% at 10% 0%, rgba(59,130,246,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 90% 100%, rgba(16,185,129,0.07) 0%, transparent 70%)
          `,
            }}
        />

        {/* Grid dot texture */}
        <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #1f2937 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
        />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* HERO HEADER */}
          <MotionDiv className="text-center mb-6" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 mb-6">
            <span
                className="flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #dbeafe, #bfdbfe)",
                  color: "#1e40af",
                }}
            >
              <Zap className="w-3 h-3" />
              La forma más rápida de encontrar ayuda
            </span>
            </div>

            <h2
                className="font-extrabold tracking-tight leading-[1.1] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", color: "#1f2937" }}
            >
              Contratar un profesional{" "}
              <br className="hidden md:block" />
              <span
              style={{ color: "#3b82f6" }}
              >
              nunca fue tan fácil
            </span>
            </h2>

            <p
                className="text-lg max-w-xl mx-auto leading-relaxed mb-2"
                style={{ color: "#6b7280" }}
            >
              Miles de usuarios ya confían en{" "}
              <strong style={{ color: "#3b82f6" }}>MultiPe</strong> para resolver
              sus problemas del hogar en minutos, no días.
            </p>

          </MotionDiv>

          {/* STATS BAR */}
          <MotionDiv
              className="flex flex-wrap justify-center gap-3 mb-20"
              variants={fadeInUp}
          >
            {stats.map((s, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center px-6 py-3 rounded-2xl"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    }}
                >
              <span className="text-xl font-black" style={{ color: "#1f2937" }}>
                {s.value}
              </span>
                  <span className="text-xs" style={{ color: "#9ca3af" }}>
                {s.label}
              </span>
                </div>
            ))}
          </MotionDiv>

          {/* STEPS */}
          <MotionDiv
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
              variants={staggerContainer}
          >
            {steps.map((step, index) => (
                <MotionDiv key={index} className="group relative" variants={fadeInUp}>
                  {/* Arrow connector desktop */}
                  {index < steps.length - 1 && (
                      <div
                          className="hidden md:flex absolute top-12 -right-6 z-10 items-center justify-center w-12 h-12 rounded-full"
                          aria-hidden="true"
                          style={{
                            background: "#ffffff",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                          }}
                      >
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path
                              d="M5 12h14M13 6l6 6-6 6"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                  )}

                  <div
                      className="relative flex flex-col h-full rounded-[2rem] overflow-hidden transition-all duration-500"
                      style={{
                        background: "#ffffff",
                        border: "1.5px solid #e5e7eb",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = "translateY(-8px)";
                        el.style.boxShadow = `0 24px 48px -8px ${step.glow}, 0 8px 20px rgba(0,0,0,0.06)`;
                        el.style.borderColor = step.textAccent;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                        el.style.borderColor = "#e5e7eb";
                      }}
                  >
                    {/* Top gradient bar */}
                    <div className="h-1.5 w-full" style={{ background: step.gradient }} />

                    <div className="p-8 flex flex-col flex-1">
                      {/* Tag + number */}
                      <div className="flex items-center justify-between mb-6">
                    <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: step.light, color: step.textAccent }}
                    >
                      {step.tagIcon}
                      {step.tag}
                    </span>
                        <span
                            className="text-5xl font-black leading-none select-none"
                            style={{
                              color: "transparent",
                              WebkitTextStroke: `2px ${step.light}`,
                            }}
                        >
                      {step.number}
                    </span>
                      </div>

                      {/* Icon */}
                      <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110"
                          style={{ background: step.gradient }}
                      >
                        {step.icon}
                      </div>

                      {/* Text */}
                      <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: "#1f2937" }}
                      >
                        {step.title}
                      </h3>
                      <p
                          className="text-sm font-semibold mb-3"
                          style={{ color: step.textAccent }}
                      >
                        {step.subtitle}
                      </p>
                      <p
                          className="text-[0.93rem] leading-relaxed flex-1"
                          style={{ color: "#6b7280" }}
                      >
                        {step.description}
                      </p>

                      {/* Hover CTA hint */}
                      <div
                          className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "#3b82f6" }}
                      >
                        <span>Ver cómo funciona</span>
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                          <path
                              d="M5 12h14M13 6l6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>
  );
};
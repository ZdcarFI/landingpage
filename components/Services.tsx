"use client";

import { MotionDiv, staggerContainer, fadeInUp } from "./MotionDiv";
import { Paintbrush, Sparkles, Wrench, Zap, Heart, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Pintor",
    description: "Preparación de superficies y aplicación de pintura en paredes y techos.",
    icon: Paintbrush,
    attachment: "https://cdn3d.iconscout.com/3d/premium/thumb/pintor-de-paredes-3d-icon-png-download-9873739.png",
    color: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50",
    stats: "+150 proyectos",
    featured: true
  },
  {
    title: "Limpieza de Hogar",
    description: "Limpieza profunda de casas, departamentos y oficinas. Lavado y desinfección.",
    icon: Sparkles,
    attachment: "https://cdn3d.iconscout.com/3d/premium/thumb/trabajadores-de-limpieza-3d-icon-png-download-4171885.png",
    color: "from-purple-400 to-purple-600",
    bgLight: "bg-purple-50",
    stats: "+300 hogares",
    featured: false
  },
  {
    title: "Plomería",
    description: "Reparación de fugas, destape de cañerías e instalación de grifería.",
    icon: Wrench,
    attachment: "https://cdn3d.iconscout.com/3d/premium/thumb/plomero-con-llave-inglesa-y-juego-de-herramientas-3d-icon-png-download-12283016.png",
    color: "from-cyan-400 to-cyan-600",
    bgLight: "bg-cyan-50",
    stats: "+200 reparaciones",
    featured: true
  },
  {
    title: "Electricista",
    description: "Instalaciones eléctricas, reparaciones y mantenimiento en hogares y oficinas.",
    icon: Zap,
    attachment: "https://static.vecteezy.com/system/resources/thumbnails/049/770/046/small/a-3d-rendered-electrician-in-orange-overalls-testing-voltage-on-an-electrical-panel-using-a-multimeter-ensuring-system-functionality-png.png",
    color: "from-yellow-400 to-yellow-600",
    bgLight: "bg-yellow-50",
    stats: "+120 servicios",
    featured: false
  },
  {
    title: "Niñera Profesional",
    description: "Cuidado seguro y confiable para bebés y niños, por horas o tiempo completo.",
    icon: Heart,
    attachment: "https://cdni.iconscout.com/illustration/premium/thumb/ninera-con-ninos-illustration-svg-download-png-5606465.png",
    color: "from-pink-400 to-pink-600",
    bgLight: "bg-pink-50",
    stats: "+80 familias",
    featured: true
  }
];

export const Services = () => {
  return (
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <MotionDiv
              className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8"
              variants={fadeInUp}
          >
            <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Nuestros Servicios
            </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark mb-6 tracking-tight leading-[1.1]">
                Profesionales que
                <span className="relative ml-3">
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  transforman
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-0 rounded-full"></span>
              </span>
                <br />tu hogar
              </h2>
              <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
                De tareas simples a proyectos complejos, tenemos al profesional indicado para ti.
                <span className="block mt-2 text-primary/70">+500 servicios realizados con éxito</span>
              </p>
            </div>

            <button className="group flex items-center space-x-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
              <a href="/app"><span>Ver todos los servicios</span></a>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </MotionDiv>

          {/* Grid de Servicios Premium */}
          <MotionDiv
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
              variants={staggerContainer}
          >
            {services.map((service, index) => (
                <MotionDiv
                    key={index}
                    className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                >
                  {/* Efecto de gradiente en hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Contenido Principal */}
                  <div className="relative p-8">
                    {/* Header con Icono y Stats */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${service.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-semibold text-text-muted bg-gray-100 px-4 py-2 rounded-full">
                    {service.stats}
                  </span>
                    </div>

                    {/* Título y Descripción */}
                    <h3 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-muted mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags de características */}
                    <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-medium bg-gray-100 text-text-muted px-3 py-1.5 rounded-full">
                    Profesionales certificados
                  </span>
                      <span className="text-xs font-medium bg-gray-100 text-text-muted px-3 py-1.5 rounded-full">
                    Presupuesto sin costo
                  </span>
                    </div>

                    {/* Imagen 3D Atractiva */}
                    <div className="relative h-48 -mx-2 -mb-8 mt-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                      <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                        <Image
                            src={service.attachment}
                            alt={service.title}
                            fill
                            className="object-contain object-bottom drop-shadow-2xl"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>

                    {/* Botón de acción flotante en hover */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="bg-primary text-white p-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all">
                        <a href="/app">ir </a>
                      </button>
                    </div>
                  </div>

                  {/* Barra de color inferior */}
                  <div className={`h-1 w-full bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </MotionDiv>
            ))}
          </MotionDiv>

          {/* Sección de Confianza */}
          <MotionDiv
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-3xl shadow-sm border border-gray-100"
              variants={fadeInUp}
          >
            {[
              { label: "Profesionales verificados", value: "+200" },
              { label: "Servicios completados", value: "+1500" },
              { label: "Clientes satisfechos", value: "98%" },
              { label: "Cobertura nacional", value: "24/7" }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
            ))}
          </MotionDiv>
        </div>
      </section>
  );
};
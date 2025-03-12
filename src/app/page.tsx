"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/backlive.mp4"
          autoPlay
          loop
          muted
        />

        {/* Capa de oscurecimiento */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Contenido principal */}
        <div
          className="cardp relative z-10 w-full max-w-xl p-6 pt-12 bg-white/30 border-2 border-white rounded-lg 
                        shadow-lg backdrop-blur-md dark:bg-gray-800/30 text-center
                        drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
        >
          {/* Imagen de perfil */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="w-20 h-20 rounded-full ring-4 ring-white"
              src="/perfil.jpg"
              alt="Perfil"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Título */}
          <h5 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Benjamin Sequeida
          </h5>

          {/* Descripción */}
          <p className="font-normal mb-6 text-gray-700 dark:text-gray-300">
            Soy desarrollador web full-stack y analista programador con
            experiencia en la creación y optimización de aplicaciones. Me
            apasiona resolver problemas, optimizar procesos y crear soluciones
            eficientes. 🚀
          </p>

          {/* Línea y título */}
          <div className="flex items-center w-full gap-2">
            <div className="flex-1 border-t border-gray-500"></div>
            <h1 className="whitespace-nowrap text-lg font-bold">Contáctame</h1>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          {/* Botones */}
          <div className="space-y-4 mt-5 text-center">
            <Button href="https://github.com/Eridev-Bs" icon="/github.svg" text="Github" />
            <Button href="https://tuportafolio.com" icon="/portf.svg" text="Portafolio" />
            <Button href="mailto:benjaminsequeida95@gmail.com" icon="/mail.svg" text="Mail" />
            <Button href="file:///C:/Users/work/Downloads/benjamin%20sequeida.pdf" icon="pdf.svg" text="CV" />
          </div>

          {/* Línea final */}
          <div className="flex items-center w-full gap-2 mt-5">
            <div className="flex-1 border-t border-gray-500"></div>
            <h1 className="whitespace-nowrap text-lg font-bold">Creado por Benjamin Sequeida</h1>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>
          <div className="flex items-center justify-center gap-10 mt-5">
            <button onClick={() => window.open("https://www.instagram.com/eride_ben/", "_blank")}>
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="invert hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" />
            </button>
            <button onClick={() => window.open("https://www.linkedin.com/in/benjamin-sequeida-477b57205/", "_blank")}>
              <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} className="invert hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" />
            </button>
            <button onClick={() => window.open("https://x.com/ErideTHK", "_blank")}>
              <Image src="/x.svg" alt="x" width={24} height={24} className="invert hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* Componente reutilizable para los botones */
const Button = ({ href, icon, text }: { href: string; icon: string; text: string }) => (
  <button
    onClick={() => window.open(href, "_blank")}
    className="relative w-full text-center flex items-center justify-center gap-2 p-3 rounded-lg text-white 
               shadow-[inset_0_4px_8px_rgba(255,255,255,0.2)] transition-all
               hover:shadow-[0_0_18px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
  >
    <Image src={icon} alt={text} width={24} height={24} className="invert" />
    {text}
  </button>
);

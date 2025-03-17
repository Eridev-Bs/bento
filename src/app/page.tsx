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
          className="relative z-10 w-[95%] max-w-xl p-6 pt-12 bg-white/30 border-2 border-white rounded-lg 
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
          <p className="font-normal mb-6 text-gray-700 dark:text-gray-300 hidden sm:block">
            Soy desarrollador web full-stack y analista programador con
            experiencia en la creación y optimización de aplicaciones. Me
            apasiona resolver problemas, optimizar procesos y crear soluciones
            eficientes. 🚀
          </p>
          <p className="font-normal mb-6 text-gray-700 dark:text-gray-300 sm:hidden">
            Desarrollador web full-stack. 🚀
          </p>

          {/* Línea y título */}
          <div className="flex items-center w-full gap-2">
            <div className="flex-1 border-t border-gray-500"></div>
            <h1 className="whitespace-nowrap text-lg font-bold">Contáctame</h1>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          {/* Botones */}
          <div className="space-y-4 mt-5 text-center">
            <Button
              href="https://github.com/Eridev-Bs"
              icon="/github.svg"
              text="Github"
            />
            <Button
              href="https://portfolio-snowy-kappa-50.vercel.app/"
              icon="/portf.svg"
              text="Portafolio"
            />
            <Button
              href="mailto:benjaminsequeida95@gmail.com"
              icon="/mail.svg"
              text="Mail"
            />
            <Button href="/benjamin_sequeida.pdf" icon="/pdf.svg" text="CV" />
          </div>

          {/* Línea final */}
          <div className="flex items-center w-full gap-2 mt-5">
            <div className="flex-1 border-t border-gray-500"></div>
            <h1 className="whitespace-nowrap text-lg font-bold">
              Creado por Benjamin Sequeida
            </h1>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <SocialButton
              href="https://www.instagram.com/eride_ben/"
              src="/instagram.svg"
              alt="Instagram"
            />
            <SocialButton
              href="https://www.linkedin.com/in/benjamin-sequeida-477b57205/"
              src="/linkedin.svg"
              alt="LinkedIn"
            />
            <SocialButton href="https://x.com/ErideTHK" src="/x.svg" alt="X" />
          </div>
        </div>
      </div>
    </>
  );
}

/* Componente reutilizable para los botones */
const Button = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: string;
  text: string;
}) => (
  <button
    onClick={() => window.open(href, "_blank")}
    className="w-full flex items-center justify-center gap-2 p-3 rounded-lg text-black dark:text-white 
               shadow-[inset_0_4px_8px_rgba(255,255,255,0.2)] transition-all
               hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-105"
  >
    <Image
      src={icon}
      alt={text}
      width={24}
      height={24}
      className="invert-0 dark:invert"
    />
    {text}
  </button>
);

/* Componente reutilizable para los íconos de redes sociales */
const SocialButton = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
  <button onClick={() => window.open(href, "_blank")}>
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="invert-0 dark:invert hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all hover:scale-110"
    />
  </button>
);

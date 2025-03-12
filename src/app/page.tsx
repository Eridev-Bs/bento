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
                        drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="w-20 h-20 rounded-full ring-4 ring-white"
              src="/perfil.jpg"
              alt="Bordered avatar"
              width={80}
              height={80}
            />
          </div>

          <div>
            <h5 className="mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Benjamin Sequeida
            </h5>
          </div>
          <p className="font-normal mb-10 text-gray-700 dark:text-gray-300">
            Soy desarrollador web full-stack y analista programador con
            experiencia en la creación y optimización de aplicaciones. Me
            apasiona resolver problemas, optimizar procesos y crear soluciones
            eficientes. 🚀
          </p>
          <div className="flex items-center w-full gap-2">
            <p className="h-[2px] bg-gray-500 flex-1"></p>
            <h1 className="whitespace-nowrap text-lg font-bold">Redes</h1>
            <p className="h-[2px] bg-gray-500 flex-1"></p>
          </div>
          {/*agregar redes sociales*/}
        </div>
      </div>
    </>
  );
}

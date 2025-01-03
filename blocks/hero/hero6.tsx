import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MoveRight } from "lucide-react";

export const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const titles = useMemo(() => ["new product", "best possibilities"], []);
  const slides = useMemo(
    () => [
      "https://dummyimage.com/400x400/000/fff.png", // Dummy image 1
      "https://primeraintervencion.com.ar/wp-content/uploads/2023/08/re-asociados-servicios-seguridad-higiene-industrial-2.jpg", // Dummy image 2
    ],
    []
  );

  useEffect(() => {
    const titleIntervalId = setInterval(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 3000); // Change title every 3 seconds

    const slideIntervalId = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(titleIntervalId);
      clearInterval(slideIntervalId);
    };
  }, [titles.length, slides.length]);

  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between h-screen md:h-[740px] bg-gray-900 text-white">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-[url('https://www.revistagente.com/wp-content/uploads/2023/10/young-male-practicing-cpr-first-aid-on-mannequin-in-the-presence-of-people-scaled-1.jpg')] bg-cover bg-center opacity-5 bg-blue-500/50"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 md:w-7/12 md:max-w-[700px] md:ml-10 md:mt-20 ">
{/*          
           <img
            src="/logo-hor-220px.png"
            alt="Imagen de un joven practicando RCP en un maniqu  en presencia de personas"
            className="h-[80px] max-w-[420px] object-cover rounded-md mr-6"
          />   */}
          <h1 className="text-5xl font-bold">Consultora en <br /> Prevención  de Riesgos</h1>
         
      <p className="mt-6 mb-6 text-base max-w-90 text-gray-400">
          Nuestra empresa se especializa en ofrecer soluciones integrales
          para la <br />gestión de riesgos, garantizando la protección y el desarrollo estratégico<br /> de su organización.
        </p>
        <a
          href="https://wa.me/5491166333100?text=Hola, necesito informaci n sobre los cursos de capacitaci n"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 mb-6 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <MoveRight className="w-5 h-5 mr-2" /> WhatsApp
        </a>

        <h2 className="text-base font-bold mt-2 mb-4">Próximas Capacitaciones</h2>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-1/2">
            <CalendarIcon className="w-6 h-6 mb-2 text-gray-400" />
            <h3 className="text-xl font-semibold mb-2">Evento 1</h3>
            <p className="text-gray-400 mb-4">Date: 28 November 2021</p>
            <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
              Más Info&nbsp; <MoveRight className="w-4 h-4 inline" />
            </Button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-1/2">
            <CalendarIcon className="w-6 h-6 mb-2 text-gray-400" />
            <h3 className="text-xl font-semibold mb-2">Evento 2</h3>
            <p className="text-gray-400 mb-4">Date: 30 November 2021</p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded w-full border border-white border-opacity-20">
              Más Info&nbsp; <MoveRight className="w-4 h-4 inline" />
            </Button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative z-10 md:w-5/12 flex items-start md:mx-10 md:my-20">
        <div className="relative w-full aspect-[4/4] max-w-[760px] rounded-lg shadow-lg overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


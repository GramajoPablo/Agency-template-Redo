import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";




const CourseCard = () => {
  const [open, setOpen] = useState(true);

  const courses = [
    {
      title: "Primeros Socorros",
      description:
        "Este curso enseña primeros auxilios, evaluación de la escena, respuesta a lesiones, RCP y manejo de fracturas, heridas y quemaduras.",
      image: "/Primeros-Socorros.jpg",
      url: "https://www.youtube.com/watch?v=lQkTq4x9_8M",
    },
    {
      title: "Reanimación Cardiopulmonar y uso del DEA",
      description:
        "Este curso cubre técnicas de reanimación cardiopulmonar y el uso correcto del desfibrilador externo automático (DEA).",
      image: "/Reanimación Cardiopulmonar y uso del DEA.jpg",
      url: "https://www.youtube.com/watch?v=7Wuq4Gk5j1U",
    },
    {
      title: "Formación de Brigadistas",
      description:
        "Capacitación integral para la formación de brigadistas de emergencia, enfocándose en prevención, control y mitigación de riesgos.",
      image: "/Formación de Brigadistas .jpeg",
      url: "https://www.youtube.com/watch?v=H2j3C6u9qXw",
    },
    {
      title: "Extinción de Incendios",
      description:
        "Curso especializado en técnicas y estrategias para la extinción efectiva de incendios en diversos escenarios.",
      image: "/Extinción de Incendios.jpeg",
      url: "https://www.youtube.com/watch?v=Jq4OvK8lP7I",
    },
  ];

  return (
    <section className="flex flex-col justify-center antialiased    min-h-screen p-4 max-w-[1336px] mx-auto">
      <div className="flex gap-4 flex-col items-start mb-12">
        {/* <div>
          <Badge>Platform</Badge>
        </div> */}
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-normal max-w-xl font-bold text-black text-left">
            Nuestros Cursos
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-black text-left">
            Cada curso brinda herramientas y habilidades para enfrentar situaciones de emergencia y peligro.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="w-full mb-4">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
              <a className="block focus:outline-none focus-visible:ring-2" href={course.url}>
                <figure className="relative h-0 pb-[70%] overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={course.image}
                    alt="Course"
                    layout="fill"
                    priority
                  />
                </figure>
              </a>
              <div className="flex-grow flex flex-col p-5">
                <div className="flex-grow">
                  <header className="mb-3">
                    <a className="block focus:outline-none focus-visible:ring-2" href={course.url}>
                      <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                        {course.title}
                      </h3>
                    </a>
                  </header>
                  <div className="mb-8">
                    <p>{course.description}</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <a
                    className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                    href={course.url}
                  >
                    Ver más
                  </a>
                  <a
                    className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-blue-950 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                    href={course.url}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCard;


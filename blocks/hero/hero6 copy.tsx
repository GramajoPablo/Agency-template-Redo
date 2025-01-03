import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["new product", "best possibilities"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titles.length]);

  return (
    <section className="flex flex-col md:flex-row items-start justify-between p-8 h-screen md:h-[718px] bg-gray-900 text-white md:py-10">
       
          <div className="md:w-3/4 md:max-w-[700px]">
            <h1 className="text-4xl font-bold mb-4">
              Discover <span className="text-spektr-cyan-50">{titles[titleNumber]}</span>
            </h1>
            <p className="mb-6">
              Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Next Events</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md w-1/2 md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Event 1</h3>
                <p className="text-gray-400 mb-4">Date: 28 November 2021</p>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  More Info <MoveRight className="w-4 h-4 inline" />
                </Button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-md w-1/2 md:w-auto">
                <h3 className="text-xl font-semibold mb-2">Event 2</h3>
                <p className="text-gray-400 mb-4">Date: 30 November 2021</p>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  More Info <MoveRight className="w-4 h-4 inline" />
                </Button>
              </div>
            </div>
          </div>

      <div className="md:w-1/4 flex items-start">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/conference-speaker.jpg"
          alt="Conference Speaker"
          className="max-w-[470px] max-h-full w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>



  );
};

export default HeroSection;


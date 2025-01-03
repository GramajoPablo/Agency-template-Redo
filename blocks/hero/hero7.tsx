import { ArrowUpRight } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2A3B2A] overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        {/* Title Section */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">THE DIGITAL INNOVATION STUDIO,</span>{" "}
            <span className="text-gray-400">WHERE CREATIVITY MEETS TECHNOLOGY</span>
          </h1>
        </div>

        {/* Stats Card - Absolute positioned on lg screens */}
        <div className="relative z-10 lg:absolute lg:right-20 lg:top-[20%] max-w-md w-full mt-12 lg:mt-0">
          <div className="bg-[#FFFF40] p-8 rounded-3xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">AGENCY TOTAL GOALS</h2>
              <p className="text-gray-700">A future-focused digital studio</p>
            </div>

            <div className="space-y-8">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-bold">94+</span>
                  <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-gray-700 mt-2">Project Completed</p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-bold">85%</span>
                  <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-gray-700 mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-12 lg:mt-32 relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/hero-img.png"
            alt="Modern workspace with people working on computers"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}


import Image from "next/image";
import React from "react";
import Profile from "@/public/images/my-photo.png";
import ProjectImage from "@/public/images/krea.png";
import AnimatedText from "../animations/typeWriter";
import ServiceCardsDemo from "../services";

export const Home: React.FC = () => {
  return (
    <div className="  md:p-6">
      <section className="relative  ">
        {/* Background code snippets */}
        <div className="absolute inset-0 opacity-10 text-gray-400 font-mono text-sm pointer-events-none select-none">
          <div className="absolute top-8 left-8">&lt;/html&gt;</div>
          <div className="absolute top-16 left-12">&lt;body&gt;</div>
          <div className="absolute top-24 left-16">&lt;h1/&gt;</div>
          <div className="absolute bottom-32 right-24">&lt;/h1&gt;</div>
        </div>

        <div className="container mx-auto px-6 lg:px-8  flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-5xl lg:text-5xl 2xl:text-7xl font-bold text-white leading-tight">
                  Hello
                  <br />
                  I&apos;m <span className="text-teal-400">Onyedikachi Emmanel</span>,
                  <br />
                  Web developer
                </h1>
                <p className="text-gray-300 text-lg font-mono">
                  full stack developer
                </p>
                <div className="text-teal-400">
                  <AnimatedText />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 font-medium">
                  View my CV
                </button>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 underline transition-colors duration-300"
                >
                  Booking
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 bg-linear-to-l from-teal-500/20 to-transparent rounded-full blur-3xl"></div>

                {/* Profile image placeholder */}
                <div className="relative aspect-square bg-lineaer-to-br from-gray-700 to-gray-800 rounded-full overflow-hidden">
                  <Image
                    src={Profile}
                    alt="Clark - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating tech icons */}
                <div className="absolute top-12 -right-4 w-16 h-16 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-gray-700">
                  <span className="text-2xl">🐍</span>
                </div>

                <div className="absolute top-1/3 -left-4 w-20 h-20 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-gray-700">
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#DD0031" />
                    <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#C3002F" />
                  </svg>
                </div>

                <div className="absolute bottom-1/4 -right-6 w-20 h-20 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-gray-700">
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="#68A063"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.3L19.5 8.25V15.75L12 19.7L4.5 15.75V8.25L12 4.3Z" />
                    <text
                      x="7"
                      y="16"
                      fontSize="10"
                      fill="#68A063"
                      fontFamily="monospace"
                    >
                      JS
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
      <section>
      <ServiceCardsDemo />
      </section>
      <h1 className="text-center text-white font-bold md:text-3xl mt-6 italic">
        Project Contributions
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
        <Image src={ProjectImage} alt="image" className="" />
        <Image src={ProjectImage} alt="image" className="" />
        <Image src={ProjectImage} alt="image" className="" />
        <Image src={ProjectImage} alt="image" className="" />
      </div>
      <h1 className="text-center text-white font-bold md:text-3xl mt-6 italic">
        Recommendations
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="border shadow-lg text-white p-3 rounded-lg text-center">
          <h2 className="font-bold py-5">Computer Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos
            laudantium id cumque expedita, ipsa itaque ipsam, nemo ratione ab ad
            laboriosam facilis assumenda illum. Repellat molestias aperiam
            adipisci id!
          </p>
        </div>
        <div className="border shadow-lg text-white p-3 rounded-lg text-center">
          <h2 className="font-bold py-5">Computer Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos
            laudantium id cumque expedita, ipsa itaque ipsam, nemo ratione ab ad
            laboriosam facilis assumenda illum. Repellat molestias aperiam
            adipisci id!
          </p>
        </div>
        <div className="border shadow-lg text-white p-3 rounded-lg text-center">
          <h2 className="font-bold py-5">Computer Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos
            laudantium id cumque expedita, ipsa itaque ipsam, nemo ratione ab ad
            laboriosam facilis assumenda illum. Repellat molestias aperiam
            adipisci id!
          </p>
        </div>
        <div className="border shadow-lg text-white p-3 rounded-lg text-center">
          <h2 className="font-bold py-5">Computer Technician</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos
            laudantium id cumque expedita, ipsa itaque ipsam, nemo ratione ab ad
            laboriosam facilis assumenda illum. Repellat molestias aperiam
            adipisci id!
          </p>
        </div>
      </div>
    </div>
  );
};

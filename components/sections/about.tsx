import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 p-4 sm:p-6 lg:p-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <header
          className="mb-16 opacity-0"
          style={{ animation: "fadeInUp 0.8s ease forwards" }}
        >
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-2 tracking-tight">
            My Journey
          </h1>
          <p className="text-xl text-gray-500 font-light italic">
            From curiosity to code
          </p>
        </header>

 
        <section
          className="bg-teal-400/2 backdrop-blur-sm rounded-3xl p-6 md:p-12 mb-8 border border-teal-400/10 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.2s",
          }}
        >
          <h2 className="text-2xl font-semibold text-teal-400 mb-6 flex items-center gap-3">
            <span
              className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.6)]"
            />
            The Beginning
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            My journey into tech started in 2017, after my senior secondary school. I had zero knowledge of computers or programming at the time. I originally wanted to study Medicine or any medical-related course, but unfortunately, I had a D7 in Biology. I think that was when my mindset started to shift. I needed to do something else that aligned with my WAEC results.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I can’t really remember who suggested it to my mom, but someone told her I should go and learn a skill. I told my mom I wanted to learn phone repairs. We were already doing research and even visited a phone repair shop to register. Then a man from my village came around. I don’t know what conversation he had with my mom, but he told her I should learn computer repair instead. My mom agreed, and that was it. We decided to try that out, and the search for where I would learn it began.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            We went to Nsukka town, which wasn’t far from my place. We went straight to Ogige Market. There was a computer and phone repair line there at the time, before it was moved. We met a man who had a shop and some apprentices learning repairs. He told us it would cost 45k to learn. After that, we went to another shop and met the man who eventually taught me the work. The place was called MicroSpeed Ltd. He told us it was 40k.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Accommodation became a problem, but he offered me a place to stay in his home. That was how everything started. I began learning and fell in love with computers. I completely forgot about anything medical.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Later on, I applied for JAMB and got into school as a Computer Science student. That was where I met Okechukwu Somto Stanley, who was the NACOS president at the time. One day, he called for students who were interested in learning programming. I attended, and it has been a ride since then.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Today, I’m proud to call myself a software developer. And honestly, the journey is more than this story.
          </p>
        </section>

    
        <div
          className="bg-teal-400/5 border-l-4 border-teal-400 rounded-xl p-8 my-8 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.4s",
          }}
        >
          <p className="text-xl text-gray-300 italic leading-relaxed">
            &quot;The best way to predict the future is to create it. And I
            realized I wanted to be part of building that future.&quot;
          </p>
        </div>

        <section
          className="bg-teal-400/2 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-teal-400/10 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-teal-400 flex items-center gap-3">
              <span
                className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.6)]"
              />
              Where I Am Now
            </h2>
            <a
              href="https://osmaxin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 border border-teal-400/20 text-sm font-medium transition-all w-fit"
            >
              <span>Visit osmaxin.com</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="mb-6">
            <a
              href="https://osmaxin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/logo inline-flex items-center gap-4 bg-white/95 hover:bg-white rounded-2xl px-5 py-3 shadow-lg shadow-teal-400/5 transition-all hover:scale-[1.02] border border-white/20"
            >
              <Image
                src="/images/osmaxin-logo.png"
                alt="Osmaxin Developers"
                width={160}
                height={52}
                className="h-8 w-auto object-contain"
              />
              <span className="text-xs text-gray-700 font-semibold flex items-center gap-1 group-hover/logo:text-teal-600 transition-colors border-l border-gray-200 pl-3">
                osmaxin.com
                <ExternalLink size={12} />
              </span>
            </a>
          </div>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I currently work with{" "}
            <a
              href="https://osmaxin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 font-semibold hover:underline"
            >
              Osmaxin Developers
            </a>
            , a software agency where we build custom web and mobile apps that align
            with your business goals user-friendly, scalable, and built for growth.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            From concept to launch, our expert team turns ideas into digital realities
            with precision and care.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

import { TimelineItemProps } from "@/lib/types";
import React from "react";

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  delay,
}) => (
  <div
    className={`relative pl-8 mb-8 opacity-0 animate-fadeInUp ${delay}`}
    style={{
      animation: `fadeInUp 0.8s ease forwards`,
      animationDelay: delay,
    }}
  >
    <div
      className="absolute left-0 top-2 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.6)]"
    />
    <div className="absolute left-[5px] top-5 w-0.5 h-full bg-linear-to-b from-teal-400/50 to-transparent" />
    <h3 className="text-lg text-teal-400 font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

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

I can’t really remember who suggested it to my mom, but someone told her I should go and learn a skill. 

<p className="text-lg text-gray-300 mb-6 mt-6 leading-relaxed">I told my mom I wanted to learn phone repairs. We were already doing research and even visited a phone repair shop to register. Then a man from my village came around. I don’t know what conversation he had with my mom, but he told her I should learn computer repair instead. My mom agreed, and that was it. We decided to try that out, and the search for where I would learn it began.

We went to Nsukka town, which wasn’t far from my place. We went straight to Ogige Market.</p> There was a computer and phone repair line there at the time, before it was moved. We met a man who had a shop and some apprentices learning repairs. He told us it would cost 45k to learn. After that, we went to another shop and met the man who eventually taught me the work.

The place was called MicroSpeed Ltd. He told us it was 40k. 

<p className="text-lg text-gray-300 mb-6 leading-relaxed">Accommodation became a problem, but he offered me a place to stay in his home. That was how everything started. I began learning and fell in love with computers. I completely forgot about anything medical.


Later on, I applied for JAMB and got into school as a Computer Science student. </p>That was where I met Okechukwu Somto Stanley, who was the NACOS president at the time. One day, he called for students who were interested in learning programming. I attended, and it has been a ride since then.

Today, I’m proud to call myself a software developer.
And honestly, the journey is more than this story.
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
          className="bg-teal-400/2 backdrop-blur-sm rounded-3xl p-6 md:p-12 mb-8 border border-teal-400/10 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          <h2 className="text-2xl font-semibold text-teal-400 mb-8 flex items-center gap-3">
            <span
              className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.6)]"
            />
            The Learning Path
          </h2>

          <div className="space-y-0">
            <TimelineItem
              title="Self-Taught Beginnings"
              description="I dove into online tutorials, courses, and documentation. Late nights turned into early mornings as I debugged code, built small projects, and learned from every mistake. The tech community became my classroom, and every project was a new lesson."
              delay="0.8s"
            />

            <TimelineItem
              title="Building Real Things"
              description="Theory was important, but I wanted to create things people could use. I started building projects that solved real problems, no matter how small. Each project taught me something new about development, design, and most importantly, about myself as a developer."
              delay="1s"
            />

            <TimelineItem
              title="Continuous Growth"
              description="Tech never stops evolving, and neither do I. Every day is an opportunity to learn something new, whether it's a framework, a language, or a better way to solve a problem. The journey is ongoing, and that's what makes it exciting."
              delay="1.2s"
            />
          </div>
        </section>


        <section
          className="bg-teal-400/2 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-teal-400/10 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "1.4s",
          }}
        >
          <h2 className="text-2xl font-semibold text-teal-400 mb-6 flex items-center gap-3">
            <span
              className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.6)]"
            />
            Where I Am Now
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Today, I approach every project with the same{" "}
            <span className="text-teal-400 font-medium">
              curiosity and passion </span>   that got me started. I&apos;ve learned that being a developer
            isn&apos;t just about writing code it&apos;s about solving problems,
            collaborating with others, and constantly pushing yourself to learn
            and grow.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m excited about the future and eager to work on projects that
            challenge me, allow me to collaborate with talented people, and make
            a real impact. This is just the beginning of my story, and I
            can&apos;t wait to see where it goes next.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

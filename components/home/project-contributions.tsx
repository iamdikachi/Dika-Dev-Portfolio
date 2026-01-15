import { sampleProjects } from '@/data/projects';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ProjectContributions = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      if (!containerRef.current) return;
      setIsDragging(true);
      setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const x = e.touches[0].pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    const handleProjectClick = (e: React.MouseEvent, url: string) => {
      if (isDragging) {
        e.preventDefault();
        return;
      }
      window.open(url, "_blank");
    };
  return (
    <div>
      <h1 className="text-center mb-6 text-white font-bold md:text-3xl mt-6 italic">
        Project Contributions
      </h1>
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide 
        cursor-grab active:cursor-grabbing pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="grid grid-flow-col  gap-6">
          {sampleProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={(e) => handleProjectClick(e, project.url)}
              className={`
                  group relative overflow-hidden cursor-pointer
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  ${
                    index % 2 === 0
                      ? "rounded-2xl"
                      : "rounded-tr-[3rem] rounded-bl-[3rem]"
                  }
                `}
              style={{
                width: "280px",
                height: "200px",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-200 flex items-center">
                    View project
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 text-sm text-gray-500">
        <p>← Swipe or drag to see more →</p>
      </div>
    </div>
  );
}

export default ProjectContributions
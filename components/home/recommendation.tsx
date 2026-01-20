import { recommendations } from '@/data/recommendation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Recommendation = () => {
  return (
    <div className="py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-teal-400 font-bold md:text-3xl mt-6 italic"
      >
        Recommendations
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-500 mb-12 font-mono text-sm uppercase tracking-widest"
      >
        What colleagues and clients say about working with me
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-teal-400/2 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 relative border-l-4 border-teal-400"
          >
         
            <div className="absolute top-6 left-6 w-12 h-12 bg-teal-400/10 rounded-full flex items-center justify-center border border-teal-400/20">
              <svg
                className="w-6 h-6 text-teal-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

        
            <p className="text-gray-300 leading-relaxed mb-6 mt-12 italic">
              &quot;{rec.quote}&quot;
            </p>

   
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-teal-400/10">
              <div className="flex items-center gap-3">
                <Image
                  width={48}
                  height={48}
                  src={rec.avatar}
                  alt={rec.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-400/20 grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-teal-400">{rec.name}</h4>
                  <p className="text-sm text-gray-500">
                    {rec.title} at {rec.company}
                  </p>
                </div>
              </div>

              {rec.verified && (
                <div className="flex items-center gap-1 text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation

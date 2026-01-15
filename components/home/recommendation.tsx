import { recommendations } from '@/data/recommendation';
import Image from 'next/image';


const Recommendation = () => {
  return (
    <div>
      <h1 className="text-center text-white font-bold md:text-3xl mt-6 italic">
        Recommendations
      </h1>
      <p className="text-center text-gray-600 mb-12 ">
        What colleagues and clients say about working with me
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative border-l-4 border-red-500"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-gray-700 leading-relaxed mb-6 mt-8">
              &quot;{rec.quote}&quot;
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Image
                  width={10}
                  height={10}
                  src={rec.avatar}
                  alt={rec.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{rec.name}</h4>
                  <p className="text-sm text-gray-600">
                    {rec.title} at {rec.company}
                  </p>
                </div>
              </div>

              {rec.verified && (
                <div className="flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1 rounded-full">
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
                  <span className="text-xs font-medium">Verified</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation
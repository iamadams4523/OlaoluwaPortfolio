import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectData } from '../information';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div id="projects" className="w-[90%] mt-[3rem] mx-auto mb-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-purple-600 font-bold font-[poppins] mb-6">
          My Recent Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="h-[22rem] perspective cursor-pointer"
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700 preserve-3d"
                animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden border border-gray-500 p-3 rounded-2xl bg-purple-600">
                  <div className="w-full h-[50%]">
                    <img
                      src={project.image}
                      alt="Project"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-white font-light font-[poppins] text-[12px]">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-white text-center font-bold font-[poppins] text-[14px]">
                      {project.name}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 border border-purple-500 p-3 rounded-2xl bg-purple-100 text-purple-900">
                  <div className="flex flex-col h-full text-[13px] font-[poppins]">
                    <h2 className="font-bold mb-2 text-center underline">
                      Contributions
                    </h2>
                    <ul className="list-disc list-inside overflow-y-auto pr-2">
                      {project.contributions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center underline mt-4 text-purple-700"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

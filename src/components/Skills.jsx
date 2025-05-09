import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { skillIcons } from '../information';
import { certifations } from '../information';

const getInitial = (direction) => {
  switch (direction) {
    case 'from-top':
      return { y: -30, opacity: 0 };
    case 'from-bottom':
      return { y: 30, opacity: 0 };
    case 'from-left':
      return { x: -30, opacity: 0 };
    case 'from-right':
      return { x: 30, opacity: 0 };
    default:
      return { opacity: 0 };
  }
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1 });
    } else {
      controls.start((custom) => getInitial(custom));
    }
  }, [inView, controls]);

  return (
    <>
      <div
        id="skills"
        ref={ref}
        className="max-w-5xl mt-[3rem] mb-[2rem] mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-[poppins] text-purple-700 font-semibold mb-6 text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-9 justify-items-center">
          {skillIcons.map((item, index) => (
            <motion.div
              key={index}
              custom={item.animation}
              initial={getInitial(item.animation)}
              animate={controls}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
              title={item.label}
              className="w-14 h-14 flex flex-col items-center justify-center"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-8 h-8 object-contain"
              />
              <p className="text-[11px] font-light font-[poppins]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-2xl font-[poppins] text-purple-700 font-semibold mt-6 mb-6 text-center">
        Certifications
      </div>
      <div className="flex flex-col gap-6 shadow-md">
        {certifations.map((certifation, index) => (
          <div className="flex flex-col justify-center items-center p-2 border border-gray-200 max-w-5xl mx-auto h-[22rem] lg:h-[20rem] rounded-2xl lg:flex-row lg:gap-2">
            <img
              className="w-[100%] h-full sm:w-[65%] lg:w-[50%] "
              src={certifation.certificateImg}
              alt="Certificate image"
              key={index}
            />
            <div>
              <p className="text-[16px] font-Bold">
                {certifation.certifateName}
              </p>
              <p className="text-[16px] font-light">
                {certifation.certifateDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

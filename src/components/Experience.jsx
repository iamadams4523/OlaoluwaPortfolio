import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { experienceData } from '../information';

// Timeline Item
const TimelineItem = ({ item, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();

  const isLeft = item.motion === 'left';

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: isLeft ? -100 : 100 });
    }
  }, [inView, controls, isLeft]);

  return (
    <div
      ref={ref}
      className={`
        mb-10 flex w-full relative 
        ${isLeft ? 'justify-end pr-[1rem]' : 'justify-start pr-[1rem]'}
        max-[465px]:justify-center max-[465px]:px-0
      `}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        animate={controls}
        transition={{ duration: 0.6, delay }}
        className="hover:bg-purple-600 hover:text-white p-4 rounded-xl shadow-lg w-[460px] max-[465px}:w-full max-[465px]:px-4"
      >
        <h1 className="font-[poppins] font-bold text-[20px]">
          {item.company}: {item.location}
        </h1>
        <h2 className="font-[poppins] font-semibold text-[15px]">
          {item.jobTitle}
        </h2>
        <h3 className="font-[poppins] font-semibold text-[13px]">
          {item.date}
        </h3>
        <ul className="text-[13px] font-[poppins] list-disc pl-4">
          {item.contributions.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

// Experience Section
const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full flex flex-col items-center mt-10 pb-4"
    >
      <h1 className="text-4xl text-purple-600 font-bold font-[poppins] mb-10">
        Experience
      </h1>

      <div className="relative w-[90%] max-[465px]:w-[90%]">
        {/* Center Line for Desktop */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600 max-[1200px]:hidden" />

        {experienceData.map((item, index) => (
          <TimelineItem key={index} item={item} delay={0.1 * (index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

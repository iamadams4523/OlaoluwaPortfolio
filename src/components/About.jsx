import { Typewriter } from 'react-simple-typewriter';
import { MdOutlineMail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import ProfileImg from '/src/assets/ola.png';

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full p-3 flex flex-col mt-1 lg:h-[75vh] lg:flex-row"
      >
        <div className="w-full mt-1 lg:mt-[4rem] lg:w-[40%]">
          <p className="font-[poppins] font-light text-[12px] lg:text-[16px]">
            Hello Welcome 👋
          </p>
          <h1 className="font-bold font-[poppins] text-2xl mt-3 lg:text-4xl">
            FullStack Cloud Engineer
          </h1>

          <h1 className="mt-1.5 font-semibold font-[poppins] text-xl text-purple-500 lg:text-2xl">
            <Typewriter
              words={[
                'Frontend Developer',
                'Backend Developer',
                'Cloud Architect',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#contact"
              className="p-1.5 text-[12px] bg-purple-600 rounded-[8px] font-[poppins] font-[200] lg:text-[16px]"
            >
              Contact me
            </a>
            <a
              href="#skills"
              className="border-b-1 text-[12px] cursor-pointer font-[100] lg:text-[16px]"
            >
              see skills
            </a>
          </div>

          <div className="mt-8 ml-5 font-[poppins] text-[12px] lg:text-[16px]">
            I'm a full-stack engineer with 6+ years of experience and AWS Cloud
            Solutions Architect certification. I build scalable web applications
            across frontend, backend, and infrastructure using modern
            frameworks. I focus on solving real problems with clean, reliable
            code in cloud-based environments.
          </div>

          <div className="flex items-center mt-4 gap-[4rem]">
            <p className="text-[15px] font-semibold lg:text-[17px]">
              follow me
            </p>
            <div className="flex items-center gap-[2rem]">
              <a
                href="mailto:olaoluwanhs@gmail.com"
                className="text-gray-600 hover:text-black"
              >
                <MdOutlineMail />
              </a>
              <a
                href="https://github.com/olaoluwanhs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/olaoluwanhs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/newheavenstudi1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-6 lg:w-[40%]">
          <img
            src={ProfileImg}
            alt="profile picture"
            className="w-[80%] sm:w-[60%] md:w-[45%] lg:w-[65%] h-auto object-contain"
          />
        </div>
        <div className="w-full flex gap-4 justify-center mt-5 lg:w-[20%] lg:flex-col">
          <div className="flex flex-col">
            <h1 className="font-[poppins] font-bold text-2xl lg:text-4xl lg:text-end">
              6+
            </h1>
            <p className="font-[poppins] font-normal text-[13px] lg:text-[15px] lg:text-end">
              years making professional projects
            </p>
          </div>
          <div>
            <h1 className="font-[poppins] font-bold text-2xl lg:text-4xl lg:text-end">
              20+
            </h1>
            <p className="font-[poppins] font-normal text-[13px] lg:text-[15px] lg:text-end">
              completed projects
            </p>
          </div>
          <div>
            <h1 className="font-[poppins] font-bold text-2xl lg:text-4xl lg:text-end">
              95%
            </h1>
            <p className="font-[poppins] font-normal text-[13px] lg:text-[15px] lg:text-end">
              success rate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

import { motion } from "framer-motion";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["FrontEnd Developer","BackEnd Developer", "Competitive Programmer", "Python Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={` lg:leading-[98px] mt-2 font-black text-white  lg:text-[6.5vw] sm:text-[6.4vw] xs:text-[5.8vw] text-[4.8vw] text-white`}>
            Hi, I'm <span className={`lg:text-[6.5vw] sm:text-[6.4vw] xs:text-[5.8vw] text-[4.8vw] text-[#915EFF]`}>Nishant Bansal</span>
          </h1>
          <p className={`${styles.typeSubText} mt-2 `}>
          {text} <span className="text-white-100">
        <Cursor cursorStyle="|" />
      </span>
          </p>
         
        </div>
      </div>

      <ComputersCanvas />
      {/* xs means on extra small devices we will have bottom 10 */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], //it will move 24 px up and down
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Tilt } from "react-tilt";
// Responsible for tilt of card when we slides cursor over it
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450, //These are the tilt options that are provided to the card
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} //fadeIn(direction, type, delay (s), duration(s))
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio website! I am a passionate learner with a Good
        knowledge of HTML, CSS, JavaScript, React JS, Bootstrap, and Tailwind
        CSS. In addition to my front-end development skills, I am also
        proficient in backend web development using Node.js and MongoDB. I also
        have a strong background in competitive programming using C++. I am also
        proficient in C, Python, NumPy, Matplotlib, and Panda. I enjoy
        problem-solving and taking on new challenges, and I am always looking to
        expand my knowledge and skills. Whether you are looking for a developer
        for your next project or simply browsing my portfolio, I invite you to
        explore my work and get to know me better. Thank you for visiting my
        website, and I look forward to hearing from you!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
// SectionWrapper if we roll our function into this then all our component will have same animation applied

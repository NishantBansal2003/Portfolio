import React from "react";
import { motion } from "framer-motion";
import "../animations/index.scss";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {resume} from "../assets/index"
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] `}
      >
        <motion.div variants={textVariant()} className={`flex `}>
          <motion.div
            variants={textVariant()}
            className={`flex flex-col items-center justify-center w-full`}
          >
            <h2 className={styles.sectionHeadText}>Want to know more . . .</h2>
            <p className={styles.sectionSubText2}>
              You can find my comprehensive resume available for download. This
              document highlights my professional experience, education, skills,
              and achievements, providing a comprehensive overview of my
              qualifications. Feel free to download and review my resume to gain
              deeper insights into my background and capabilities. I look
              forward to the opportunity to discuss how my skills can contribute
              to your organization's success.
            </p>
            <button class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded mt-6">
              <a href={resume} target = "_blank" download>
                Download Resume
              </a>
            </button>
          </motion.div>
          <motion.div
            variants={textVariant()}
            className={` mt-40  ml-8 w-2/4 nonesm`}
          >
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faBootstrap} color="#8000ff" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

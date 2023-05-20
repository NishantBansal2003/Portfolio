import { logo, menu, close } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Footer = () => {
  const [overed1, setOver1] = useState(false);
  const [overed2, setOver2] = useState(false);
  const [overed3, setOver3] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center align-center items-center max-w-7xl mx-auto">
      <img
        src={logo}
        alt="logo"
        className="w-12 h-12 object-contain mb-2 cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      />
      <p className="text-white text-[18px] font-bold cursor-pointer flex ">
        Copyright © {new Date().getFullYear()} |
        <span className="text-[#915EFF] ml-1"> Nishant Bansal</span>
      </p>
      <div className="w-full flex flex-row justify-center align-center items-center max-w-7xl mx-auto">
        <FontAwesomeIcon
          icon={faTwitter}
          color={overed1 ? "#ffffff" : "#1D9BF0"}
          className="w-10 h-10  mt-3 cursor-pointer bg-[#ffffff] hover:bg-[#915EFF] rounded-full p-1"
          onMouseOver={() => setOver1(true)}
          onMouseLeave={() => setOver1(false)}
          onClick={() =>
            window.open(" https://twitter.com/Nishant282003", "_blank")
          }
        />

        <FontAwesomeIcon
          icon={faLinkedin}
          color={overed2 ? "#ffffff" : "#0a66c2"}
          className="w-10 h-10 ml-8 mt-3 cursor-pointer bg-[#ffffff] hover:bg-[#915EFF] rounded-full p-1"
          onMouseOver={() => setOver2(true)}
          onMouseLeave={() => setOver2(false)}
          onClick={() =>
            window.open(
              " https://www.linkedin.com/in/nishantbansal2003/",
              "_blank"
            )
          }
        />

        <FontAwesomeIcon
          icon={faGithub}
          color={overed3 ? "#ffffff" : "#000000"}
          className=" w-10 h-10 ml-8 mt-3 cursor-pointer  bg-[#ffffff] hover:bg-[#915EFF] rounded-full p-1"
          onMouseOver={() => setOver3(true)}
          onMouseLeave={() => setOver3(false)}
          onClick={() =>
            window.open(" https://github.com/NishantBansal2003", "_blank")
          }
        />
      </div>
    </div>
  );
};
export default Footer;

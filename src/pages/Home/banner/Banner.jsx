import "animate.css";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex justify-between flex-col md:flex-row pt-28 md:pt-0 gap-8 md:gap-0 h-screen w-full"
    >
      <div className="flex items-center ">
        <div className="flex flex-col items-center gap-3">
          <Link to="https://github.com/mahadi61" target="_blank">
            <FaGithubSquare className="text-[#8892b0] text-3xl" />
          </Link>
          <Link to="https://www.facebook.com/mthmahadi/" target="_blank">
            <FaFacebookSquare className="text-[#8892b0] text-3xl" />
          </Link>
          <Link to="https://www.linkedin.com/in/mahadihasan61/" target="_blank">
            <FaLinkedin className="text-[#8892b0] text-3xl" />
          </Link>
          <div className="border-white border-e-2 w-0 h-16"></div>
        </div>
        <div className="ps-3">
          <p className="text-xl text-[#39f4ed]">Hi, I am</p>
          <TypeAnimation
            sequence={[
              "Md",
              700,
              "Md Mahadi",
              700,
              "Md Mahadi Hasan",
              700,
              "Md Mahadi",
              700,
              "Md",
              700,
              "",
              700,
            ]}
            className="md:text-7xl text-3xl text-[#ccd6f6] font-bold mb-5"
            repeat={Infinity}
          />

          <h2 className="md:text-5xl text-xl text-[#8892b0] font-semibold mb-2 animate__animated animate__zoomIn">
            MERN Stack Developer
          </h2>
          <p className="text-[#8892b0]  mb-6">
            I am a skilled and passionate MERN Stack developer with one year
            experience.
          </p>
          <Link
            to="https://drive.google.com/uc?export=download&id=19mRHs80NEQ31x7j7iNmiE_2Y9SxvY9nz"
            className="text-white border-2 px-5 py-2  hover:bg-[#39f4ed] hover:text-black duration-300  border-[#39f4ed] font-semibold mt-4  "
          >
            Download Resume
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25}>
          <div className="bg-[#0000003a] rounded-2xl h-96 animate__animated  animate__zoomIn">
            <img
              src="/mahadi_icon.jpg"
              alt="Your Photo"
              className="object-cover h-full w-full opacity-90 "
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Banner;

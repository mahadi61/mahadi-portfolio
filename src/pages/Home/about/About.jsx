import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
AOS.init();

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="md:h-screen w-full pt-20">
      <h1 className="text-center text-[#ccd6f6] text-4xl font-bold mb-12">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between  gap-6 md:gap-0">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex items-center justify-center md:w-1/2"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="bg-[#0000003a]  rounded-2xl h-96">
              <img
                src="/mahadi2.jpg"
                alt="Your Photo"
                className="object-cover h-full w-full opacity-90"
              />
            </div>
          </Tilt>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex items-start md:w-1/2"
        >
          <div className="px-3 flex flex-col items-center md:items-start">
            <p className="text-[#8892b0]  text-xl mb-4">
              Hello there! I'm a web developer, and I'm very passionate and
              dedicated to my work. With 1+ years experience as a professional
              web developer. Currently I am studying CSE in city university.I
              love to acquirer skills and knowledge. I am hardworking person and
              also i am a first learner. I never give up in any station in my
              life. I also love to travel, reading books and watching movies.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              <Tilt tiltMaxAngleX={24} tiltMaxAngleY={24}>
                <div className="p-4 bg-[#0000003a] text-center ">
                  <h1 className="text-white font-bold text-2xl">
                    <CountUp end={1} duration={7} enableScrollSpy={true} />
                  </h1>
                  <p className="text-[#8892b0]">Years</p>
                  <p className="text-[#8892b0]">experience</p>
                </div>
              </Tilt>

              <Tilt tiltMaxAngleX={24} tiltMaxAngleY={24}>
                <div className="p-4 bg-[#0000003a] text-center">
                  <h1 className="text-white font-bold text-2xl">
                    <CountUp end={5} duration={5} enableScrollSpy={true} />
                  </h1>
                  <p className="text-[#8892b0]">Project</p>
                  <p className="text-[#8892b0]">Completed</p>
                </div>
              </Tilt>
              <Tilt tiltMaxAngleX={24} tiltMaxAngleY={24}>
                <div className="p-4 bg-[#0000003a] text-center">
                  <h1 className="text-white font-bold text-2xl">
                    <CountUp end={3} duration={5} enableScrollSpy={true} />
                  </h1>
                  <p className="text-[#8892b0]">Happy</p>
                  <p className="text-[#8892b0]">Client</p>
                </div>
              </Tilt>
            </div>
            <Link
              to="contact"
              className="text-white border-2 px-5 py-2  hover:bg-[#39f4ed] hover:text-black duration-300 border-[#39f4ed] font-semibold"
            >
              Contact With Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

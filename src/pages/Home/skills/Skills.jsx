import CountUp from "react-countup";
const Skills = () => {
  return (
    <div id="skills" className="md:mb-11 md:mt-11 md:h-screen py-10 md:py-20">
      <h1 className="text-center text-[#ccd6f6] text-4xl font-bold  mb-12">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-3 ">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className=" bg-[#0000003a] md:w-1/2 py-10 rounded-xl"
        >
          <h2 className="text-[#ccd6f6] text-center font-bold text-3xl">
            Frontend development
          </h2>
          <div className="w-9/12 flex flex-col gap-1 mx-auto my-4">
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">HTML</p>
                <p className="text-[#ccd6f6] text-xl ">
                  <CountUp end={95} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "95%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">CSS</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={90} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "90%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">JavaScript</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={85} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "85%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">Bootstrap</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={95} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "95%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">Tailwind</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={95} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "95%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">React</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={95} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "95%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">Next Js</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={70} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "70%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className=" bg-[#0000003a] md:w-1/2 py-10 rounded-xl"
        >
          <h2 className="text-[#ccd6f6] text-center font-bold text-3xl">
            Backend development
          </h2>
          <div className="w-9/12 flex flex-col gap-1  mx-auto my-4">
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">Node Js</p>
                <p className="text-[#ccd6f6] text-xl ">
                  <CountUp end={60} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "60%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">Express Js</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={85} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "85%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-[#ccd6f6] text-xl">MongoDB</p>
                <p className="text-[#ccd6f6] text-xl">
                  <CountUp end={80} duration={3} enableScrollSpy={true} />%
                </p>
              </div>
              <div style={{ width: "80%" }} className="h-1 bg-[#39f4ed]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

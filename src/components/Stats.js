import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      // onExit={() => {
      //   setCounterOn(false);
      // }}
    >
      <div className="grid xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 sm:px-0 md:px-20 gap-y-10 lg:px-40 xl:px-40 2xl:px-40 py-10 justify-evenly items-center">
        <div className="stat-box">
          <p className="stat-no">
            {counterOn && (
              <CountUp
                className="text-sky-500"
                start={0}
                end={23}
                duration={2}
                delay={0}
              ></CountUp>
            )}
            +
          </p>
          <p className="stat-txt">Years of Experience</p>
        </div>
        <div className="stat-box">
          <p className="stat-no">
            {counterOn && (
              <CountUp
                className="text-sky-500"
                start={0}
                end={500}
                duration={2}
                delay={0}
              ></CountUp>
            )}
          </p>
          <p className="stat-txt">Complete Projects</p>
        </div>
        <div className="stat-box">
          <p className="stat-no">
            {counterOn && (
              <CountUp
                className="text-sky-500"
                start={0}
                end={100}
                duration={2}
                delay={0}
              ></CountUp>
            )}
            +
          </p>
          <p className="stat-txt">Employees</p>
        </div>
        <div className="stat-box">
          <p className="stat-no">
            {counterOn && (
              <CountUp
                className="text-sky-500"
                start={0}
                end={300}
                duration={2}
                delay={0}
              ></CountUp>
            )}
            +
          </p>
          <p className="stat-txt">5 Star Rating</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};
export default Stats;

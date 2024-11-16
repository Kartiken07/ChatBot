
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Count = () => {
  const [counterOn, setCounterOn] = useState(false);

  const stats = [
    { value: 50000, label: "FOLLOWERS" },
    { value: 15000, label: "VIEWS" },
    { value: 450000, label: "EARNED" },
  ];

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="flex justify-center items-center h-[350px] bg-[url('https://cdn.prod.website-files.com/668f8a8a2e706f5af78990a3/668fed4847a97a5f4362dda5_Vector%20(15).png')] bg-center bg-cover mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center h-full w-full">
              <h2 className="text-green text-5xl md:text-7xl font-bold transform scale-y-130">
                {counterOn ? <CountUp start={0} end={stat.value} duration={2} /> : 0}
              </h2>
              <p className="text-orange-500 text-lg md:text-xl font-semibold uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Count;


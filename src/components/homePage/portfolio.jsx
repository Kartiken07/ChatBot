
import React from 'react';

const Portfolio = () => {
  return (
    <div className=" w-full  text-white  p-10">
      <div className="flex h-full sm:flex-col md:flex-row  justify-center">
        {/* Left large section for images/reels/video */}
        <div className="w-full h-[full] md:w-[600px] sm:w-[250px] sm:h-[400px] md:h-[700px] p-4">
          <div className="bg-white rounded-xl flex items-center justify-center h-full text-black transition-transform duration-300 hover:scale-105">
            images/reels/vid
          </div>
        </div>

        {/* Right section with portfolio text and smaller grid elements */}
        <div className="w-full lg:w-[600px] h-full p-4">
          <div className="flex justify-center items-center mb-10 mt-10 py-5 h-[25%]">
            {/* Portfolio Title */}
            <h1 className="text-4xl lg:text-8xl sm:text-3xl tracking-widest font-semibold text-center">
              Port<span className="text-green m-[4px]">folio</span>
            </h1>
          </div>

          {/* Grid layout for numbers and info sections */}
          <div className="h-[75%] w-full">
            <div className="flex h-[294px] justify-center gap-3 m-3">
              {/* Info section */}
              <div className="h-full bg-white p-4 w-5/6 rounded-xl flex items-center justify-center  transition-transform duration-300 hover:scale-105">
                Info/text/about us
              </div>

              {/* Numbers and image section */}
              <div className="flex flex-col gap-3 w-[250px]">
                <div className="bg-white p-4 rounded-xl flex items-center justify-center h-[50%] transition-transform duration-300 hover:scale-105">
                  numbers
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center justify-center h-[50%] transition-transform duration-300 hover:scale-105">
                  Image
                </div>
              </div>
            </div>

            {/* Additional numbers and image section */}
            <div className="flex justify-center gap-3 m-3 h-[150px]">
              <div className="bg-white p-4 rounded-xl flex items-center justify-center w-1/3 transition-transform duration-300 hover:scale-105">
                numbers
              </div>
              <div className="bg-white p-4 rounded-xl flex items-center justify-center w-1/3 transition-transform duration-300 hover:scale-105">
                Image
              </div>
              <div className="bg-white p-4 rounded-xl flex items-center justify-center w-1/3 transition-transform duration-300 hover:scale-105">
                numbers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



import React from 'react';
import MultiStepForm from './multiStepForm';
import LightCursor from '../cursorEffect';

const QuestionAsking = () => {
  return (
    <div>
      <LightCursor/>
    <div className=" w-full flex flex-col bg-elliptical-gradient font-serif">
      {/* Header */}
      <div className="grid grid-cols-2 h-[57px] max-w-full my-5 mx-0  md:mx-16  text-white items-center">
        <div className="flex flex-1 justify-start text-3xl font-extrabold items-start px-4">
          <a href="#">FOCS</a>
        </div>
        <div className="flex flex-1 justify-end items-end p-2 pt-3">
          <a className="w-28 text-white bg-gradient-to-r from-[#293737] to-[#283f41]  px-6 py-1 rounded-md shadow-lg">
            Sign In
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow sm:mx-16 mx-0 ">
        <div className="flex flex-col text-white justify-start items-start mx-4 border-b-2 pb-5 mt-5">
          <span className="text-2xl font-semibold">Lets</span>
          <span className="text-2xl font-semibold text-red-700">Get You Started</span>
          <br />
          <span className="font-sans text-xs pb-2">Follow Simple Steps To Complete The Form</span>
        </div>
        
        <div className="flex justify-center w-full overflow-hidden m-0">
          <MultiStepForm />
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuestionAsking;

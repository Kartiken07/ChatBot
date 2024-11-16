import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // State for project length and answers for each step
  const [selectedProjectLength, setSelectedProjectLength] = useState(null);
  const [stepAnswers, setStepAnswers] = useState(Array(totalSteps).fill(null));

  const handleNext = () => {
    if (currentStep < totalSteps && stepAnswers[currentStep - 1]) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    'About You',
    'Project Type',
    'Services',
    'Content Type',
    'Template',
    'Video Length  ',
  ];

  return (
    <div className="max-w-screen text-white flex flex-col items-center justify-center">
      <div className="max-w-2xl flex flex-col sm:flex-row">
        {/* Step Indicator */}
        <div className="flex flex-row sm:flex-row justify-center p-5 mx-5 mb-6 sm:border-r-2 border-b-2 sm:border-b-0">
  <div className="sm:flex grid grid-cols-3 sm:flex-col items-center gap-1 sm:gap-3  sm:pr-10 my-5 mx-0 sm:m-0 ">
    {steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center justify-around sm:mb-4 sm:flex-row sm:items-center">
        <div
          className={`text-sm font-medium text-center sm:text-left sm:p-2 
            ${currentStep > index + 1 ? 'text-white' : currentStep === index + 1 ? 'text-white' : 'text-gray-500'}`}
          style={{ marginRight: '10px' }} // Ensure equal distance from circle
        >
          {step}
        </div>
        <div
          className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full flex items-center justify-center sm:p-5 m-2 sm:m-0 
            ${currentStep >= index + 1 ? 'bg-[#00C774]' : 'bg-gray-600'}
            ${currentStep === index + 1 ? 'border-4 border-[#00C774]' : 'border-2 border-transparent'}`}
        >
          {/* Optional: You can add a number or icon inside the circle */}
          <span className="text-xs font-semibold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50" fill='white'>
<path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
</svg>
</span>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Form Content */}
        <div className="flex flex-col justify-center m-10 mt-2 sm:-mt-18 sm:ml-10  mb-20">
  <div className="px-3">
    <h2 className="text-base mt-3">Step {currentStep}/6</h2>
    <div className="w-full lg:w-[700px]">
      <div className="m-10 h-auto lg:h-[200px] w-full lg:w-[700px] mt-5 mb-0 ml-0">
        {currentStep === 1 && (
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-2">What Are You</h3>
            <div className="flex flex-wrap space-x-4 mb-4 mt-5 text-xs">
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${selectedProjectLength === 'Single' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setSelectedProjectLength('Single');
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[0] = 'Single';
                    return newAnswers;
                  });
                }}
              >
                Content Creator
              </button>
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2  ${selectedProjectLength === 'Recurring' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setSelectedProjectLength('Recurring');
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[0] = 'Recurring';
                    return newAnswers;
                  });
                }}
              >
                Business
              </button>
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${selectedProjectLength === 'Permanent' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setSelectedProjectLength('Permanent');
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[0] = 'Permanent';
                    return newAnswers;
                  });
                }}
              >
                Agency
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Other..."
                className="w-full lg:w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                onChange={(e) => {
                  setSelectedProjectLength(e.target.value);
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[0] = e.target.value;
                    return newAnswers;
                  });
                }}
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-2">Length of the Project</h3>
            <div className="flex flex-wrap space-x-4 mb-4 mt-5 text-xs">
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[1] === 'Single' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[1] = 'Single';
                    return newAnswers;
                  });
                }}
              >
                Single Video
              </button>
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[1] === 'Recurring' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[1] = 'Recurring';
                    return newAnswers;
                  });
                }}
              >
                Recurring Videos
              </button>
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[1] === 'Permanent' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[1] = 'Permanent';
                    return newAnswers;
                  });
                }}
              >
                Permanent Editor
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Other..."
                className="w-full lg:w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                onChange={(e) => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[1] = e.target.value;
                    return newAnswers;
                  });
                }}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-2">What service would you like us to do for you?</h3>
            <div className="flex flex-wrap space-x-4 mb-4 mt-5 text-xs">
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[2] === 'Video Editing' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[2] = 'Video Editing';
                    return newAnswers;
                  });
                }}
              >
                Video Editing
              </button>
              <button
               className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[2] === 'Thumbnail Editing' ? 'bg-Green-700' : 'bg-gray-700'}`}
               onClick={() => {
    setStepAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[2] = 'Thumbnail Editing';
      return newAnswers;
    });
  }}
>
  Thumbnail Editing
</button>

              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[2] === 'Video Editing and Thumbnail Design' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[2] = 'Video Editing and Thumbnail Design';
                    return newAnswers;
                  });
                }}
              >
                Video Editing and Thumbnail Design
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Other..."
                className="w-full sm:w-[400px] border-b-2 bg-transparent p-2 focus:outline-none"
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-2">What kind of content are we working on?</h3>
            <div className="flex flex-wrap space-x-4 mb-4 mt-5 text-xs">
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[3] === 'Market Content' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[3] = 'Market Content';
                    return newAnswers;
                  });
                }}
              >
                Market Content
              </button>
              <button
                className={`py-1 px-3 rounded-3xl border-2 my-2 ${stepAnswers[3] === 'Infotainment Content' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[3] = 'Infotainment Content';
                    return newAnswers;
                  });
                }}
              >
                Infotainment Content
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Other..."
                className="w-full lg:w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                onChange={(e) => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[3] = e.target.value;
                    return newAnswers;
                  });
                }}
              />
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-2">Choose Template</h3>
            <div className="flex flex-wrap space-x-4 mb-10 mt-5 text-xs rounded-lg">
              <div
                className={`bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md cursor-pointer transform my-2 ml-4 ${stepAnswers[4] === 'Template 1' ? 'scale-110' : ''}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[4] = 'Template 1';
                    return newAnswers;
                  });
                }}
              >
                <div className="h-36 w-36 bg-white rounded-xl"></div>
              </div>
              <div
                className={`bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md cursor-pointer transform my-2 ${stepAnswers[4] === 'Template 2' ? 'scale-110' : ''}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[4] = 'Template 2';
                    return newAnswers;
                  });
                }}
              >
                <div className="h-36 w-36 bg-white rounded-xl"></div>
              </div>
              <div
                className={`bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md cursor-pointer transform my-2 ${stepAnswers[4] === 'Template 3' ? 'scale-110' : ''}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[4] = 'Template 3';
                    return newAnswers;
                  });
                }}
              >
                <div className="h-36 w-36 bg-white rounded-xl"></div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-2">Length of the Project?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-[500px] mb-4 mt-5 text-xs">
              <button
                className={`py-1 px-3 w-full md:w-32 rounded-3xl border-2 ${stepAnswers[5] === 'Less than 30 sec' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[5] = 'Less than 30 sec';
                    return newAnswers;
                  });
                }}
              >
                Less than 30 sec
              </button>
              <button
                className={`py-1 px-3 w-full md:w-32 rounded-3xl border-2 ${stepAnswers[5] === '30 sec to 1 min' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[5] = '30 sec to 1 min';
                    return newAnswers;
                  });
                }}
              >
                30 sec to 1 min
              </button>
              <button
                className={`py-1 px-3 w-full md:w-32 rounded-3xl border-2 ${stepAnswers[5] === '1 min to 5 min' ? 'bg-Green-700' : 'bg-gray-700'}`}
                onClick={() => {
                  setStepAnswers((prev) => {
                    const newAnswers = [...prev];
                    newAnswers[5] = '1 min to 5 min';
                    return newAnswers;
                  });
                }}
              >
                1 min to 5 min
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

    <div className="flex justify-between w-full lg:w-[400px] mt-8">
      <div className="bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-lg p-[2px]">
        <button
          onClick={handleBack}
          className="bg-[#0e1919] text-xs px-9 h-8 rounded-lg"
          disabled={currentStep === 1}
        >
          Back
        </button>
      </div>
      <div className="bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-lg p-[2px]">
        {currentStep === totalSteps ? (
          <button
            onClick={() => alert('Signing in...')}
            className="bg-[#0e1919] text-xs px-9 h-8 rounded-lg"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`bg-[#0e1919] text-xs px-9 h-8 rounded-lg ${stepAnswers[currentStep - 1] ? 'bg-green-500' : 'bg-[#0e1919]'}`}
            disabled={!stepAnswers[currentStep - 1]}
          >
            Next
          </button>
        )}
      </div>
    </div>
  </div>
</div>


        
      </div>
    </div>
  );   
};

export default MultiStepForm;

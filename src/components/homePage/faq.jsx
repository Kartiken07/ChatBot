
import React, { useState, useRef } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-base font-bold leading-tight text-green sm:text-xs lg:text-lg pb-3">
              FAQ
            </h2>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, recusandae necessitatibus. Animi dicta soluta eum ullam eius! Ab, error.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {/* FAQ Item 1 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(0)} 
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  How to create an account?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 0 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 0 ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{' '}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{' '}
                    do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(1)} 
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  How can I make payment using Paypal?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 1 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 1 ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{' '}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{' '}
                    do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(2)} 
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  Can I cancel my plan?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 2 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 2 ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{' '}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{' '}
                    do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="transition-all duration-300 bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(3)} 
              >
                <span className="text-sm sm:text-lg font-semibold text-black">
                  How can I reach support?
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    activeIndex === 3 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 3 ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{' '}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{' '}
                    do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-300 text-base mt-9">
            Didn’t find the answer you are looking for?{' '}
            <a
              href="#"
              title=""
              className="font-medium text-green transition-all duration-200 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faq;


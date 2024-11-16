import React, { useState } from 'react';

const EditorInfo = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-emerald-800">
            <div className="flex justify-end px-4 pt-4">
                <button
                    className="inline-block text-gray-500 dark:text-gray-400 rounded-lg text-sm p-1 pb-0"
                    type="button"
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <svg
                        className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${isClicked ? 'text-yellow-400' : 'text-gray-200'}`}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        id="star"
                        viewBox="0 0 29 29"
                    >
                        <path d="m15.397 4.687 2.579 5.225a1 1 0 0 0 .753.547l5.766.838a1 1 0 0 1 .554 1.706l-4.173 4.067c-.236.23-.343.561-.288.885l.985 5.743a1 1 0 0 1-1.451 1.054l-5.158-2.712a1.002 1.002 0 0 0-.931 0l-5.158 2.712a1 1 0 0 1-1.451-1.054l.985-5.743a.999.999 0 0 0-.288-.885l-4.173-4.067a1 1 0 0 1 .554-1.706l5.766-.838a1 1 0 0 0 .753-.547L13.6 4.687c.37-.743 1.43-.743 1.797 0z"></path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center pb-6">
                <img
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full object-cover shadow-lg"
                    src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                    alt="Bonnie image"
                />
                <h5 className="mb-1 text-lg sm:text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Video Editor</span>
                <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 gap-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-700"
                    >
                        More Details
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Message
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EditorInfo;


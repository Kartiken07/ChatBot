import React from 'react'

const BarAnimation = () => {
  return (
        //   {/* Text Animation */}
       
        <div className="bg-green w-screen  p-4 flex items-center overflow-hidden h-28">
        {/* Wrapper for scrolling content */}
        <div className="animate whitespace-nowrap flex items-center">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="text-white text-5xl p-3 font-semibold whitespace-nowrap inline-flex items-center justify-center"
              >
                •  NEW SITE LAUNCHING SOON&nbsp;
              </div>
            ))}
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div
                key={i + 12} // Different key to avoid duplicate key warning
                className="text-white text-5xl p-3 font-semibold inline-flex items-center justify-center"
              >
                • NEW SITE LAUNCHING SOON&nbsp;
              </div>
            ))}
        </div>
      </div>
  
  )
}

export default BarAnimation
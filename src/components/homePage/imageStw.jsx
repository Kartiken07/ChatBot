
import React, { useState } from 'react';

const ImageSwitcher = () => {
  const items = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis ad ratione impedit at aliquam dolorum...',
      image: 'https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/6673bdaf54d5e1e027aeda0b_Banner-%20web%20app%20testing%20tool%20running%20test%20in%20a%20black%20background%20of%20the%20desktop.webp',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum commodi, unde atque facilis...',
      image: 'https://blogassets.airtel.in/wp-content/uploads/2024/04/Top-10-Video-Editing-Apps-for-PC-unsplash-1-002.jpg',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laudantium harum fugiat eos...',
      image: 'https://online.yatharthinstitution.com/assets/images/course/1640518212.jpg',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laudantium harum fugiat eos...',
      image: 'https://lwks.com/hubfs/Lightworks%20Site%20Assets/Images/the-lightworks-journey.webp',
    },
  ];

  const [imageSrc, setImageSrc] = useState(items[0].image); // Set the first image as the default

  const changeImage = (src) => {
    setImageSrc(src);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-16 min-h-screen p-5 md:p-10'>
      <div className='w-full max-w-[800px] flex justify-center'>
        <h1 className='text-white text-3xl md:text-5xl font-bold leading-relaxed text-center'>
          How it <span className='text-green'>Works</span>
        </h1>
      </div>

      <div className="w-full max-w-[1300px] flex flex-col md:flex-row gap-10 p-5 flex-1">
        {/* First Column: Spans */}
        <div className="flex flex-col flex-1 gap-5">
          {items.map((item, index) => (
            <div className='flex justify-center flex-1' key={index}>
              <span
                className="cursor-pointer bg-[#3C5557] hover:bg-green border-4 border-[#1D2B2C] p-4 rounded-xl w-full h-[120px] sm:h-[150px] md:h-[200px] flex items-center justify-center text-center text-sm md:text-base"
                onMouseEnter={() => changeImage(item.image)}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Second Column: Image with smooth transition */}
        <div className="flex-1 flex justify-center items-center relative overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt="Switchable"
            className={`rounded-xl h-full w-full object-cover transition-transform duration-1000 ease-in-out border-[#1D2B2C] border-4`} // Smooth transition for image
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSwitcher;

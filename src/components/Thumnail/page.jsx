'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './ImageSlider.css';

function ImageSlider() {
  const imgs = [
    { id: 0, value: "green.mp4", type: "video" },
    { id: 1, value: "purple.mp4", type: "video" },
    { id: 2, value: "yellow.mp4", type: "video" },
    { id: 3, value: "blue.mp4", type: "video" },
  ];
  const imgs2 = [
    { id: 0, value: "green.png" },
    { id: 1, value: "purple.png" },
    { id: 2, value: "yellow.png" },
    { id: 3, value: "blue.png" },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    setWordData(imgs[index]);
  };

  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    setWordData(imgs[index]);
  };

  const handlePrevious = () => {
    let index = val > 0 ? val - 1 : val;
    setVal(index);
    setWordData(imgs[index]);
  };
  

  return (
    <div>
      {/* <button className='btns' onClick={handlePrevious}>Previous</button> */}
      
      {wordData.type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          
          key={wordData.id}
        >
          <source src={wordData.value} type="video/mp4" />
        </video>
      ) : (
        <Image src={wordData.value} height="200" width="500" alt={`Slide ${wordData.id}`} />
      )}
      
      {/* <button className='btns' onClick={handleNext}>Next</button> */}
      
      <div className='w-9/12 m-auto flex justify-between'>
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i} onClick={() => handleClick(i)}>
            {data.type === 'video' ? (
              <video
                className={wordData.id === i ? "clicked" : ""}
                height="70"
                width="100"
                muted
                
                loop
                autoPlay
              >
                <source src={data.value} type="video/mp4" />
              </video>
            ) : (
              <Image
                className={wordData.id === i ? "clicked" : ""}
                src={data.value}
                height="70"
                width="100"
                alt={`Thumbnail ${i}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

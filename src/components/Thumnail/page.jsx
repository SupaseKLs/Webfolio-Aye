'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function ImageSlider() {
  const imgs = [
    { id: 0, value: "green.mp4", type: "video" },
    { id: 1, value: "purple.mp4", type: "video" },
    { id: 2, value: "yellow.mp4", type: "video" },
    { id: 3, value: "blue.mp4", type: "video" },
  ];

  const imgs2 = [
    { id: 0, value: "/green.png" },
    { id: 1, value: "/purple.png" },
    { id: 2, value: "/yellow.png" },
    { id: 3, value: "/blue.png" },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);
  const [isThumbnail, setIsThumbnail] = useState(true);

  const handleClick = (index) => {
    setVal(index);
    setWordData(imgs[index]);
    setIsThumbnail(false); 
  };

  const handleThumbnailClick = (index) => {
    handleClick(index);
    setIsThumbnail(true); 
  };

  return (
    <div className='m-auto'>
      {wordData.type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          controls={!isThumbnail} 
          style={{ width: '100%', height: 'auto' }}
        >
          <source src={wordData.value} type="video/mp4" />
        </video>
      ) : (
        <Image src={wordData.value} height="200" width="500" alt={`Slide ${wordData.id}`} />
      )}
      
      <div className='w-9/12 flex m-auto justify-between'>
        {imgs2.map((data, i) => (
          <div
            className="thumbnail"
            key={i}
            onClick={() => handleThumbnailClick(i)}
            style={{ cursor: 'pointer' }}
          >
            {wordData.id === i ? (
              <div className="thumbnail-selected">
                <Image
                  className="clicked"
                  src={data.value}
                  height="70"
                  width="100"
                  alt={`Thumbnail ${i}`}
                />
              </div>
            ) : (
              <Image
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

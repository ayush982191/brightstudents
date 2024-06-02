import React from 'react';

interface CardProps {
  text: string;
  imgSrc: string;
  no : string,
  aboveDescription ?: string,
  belowDescription ?: string,
  color : string

}

const Card: React.FC<CardProps> = ({ text, imgSrc , aboveDescription, belowDescription, no , color }) => {
  return (
    <div className="relative bg-white p-4 rounded-[2rem] shadow-lg text-center w-72 h-[25rem]">
      <img src={imgSrc} alt="Card" className="w-52 h-52 mx-auto mb-2" />
      <p>{aboveDescription}</p>
      <h3 className="text-lg font-bold mb-2 text-blue-500">{text}</h3>
      <p className=''>{belowDescription}</p>
     <p className={`p-1 text-white font-bold absolute bottom-5 left-0 rounded-r-lg bg-${color}-400`}>{no}</p>
    </div>
  );
};

export default Card;

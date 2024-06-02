import React from 'react';
import background from "../assets/background.png";
import prevArrow from "../assets/prevArrow.png";
import Card from './Card';
import cardImage1 from "../assets/cherry.png"; // replace with actual image paths
import cardImage2 from "../assets/heart.png"; // replace with actual image paths
import cardImage3 from "../assets/combinecherryheart.png"; // replace with actual image paths
import { Link } from 'react-router-dom';

interface ShowCardsProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  button: string; 
}

const ShowCards: React.FC<ShowCardsProps> = ({ setPage, button }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <button
        // onClick={() => setPage(prev => Math.max(prev - 1, 1))}
        className="absolute top-4 left-4 bg-transparent"
      >
        <img src={prevArrow} alt="Previous" className="w-12 h-12" />
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex space-x-8 gap-5 flex-wrap">
          <div className=" text-center">
            <Card imgSrc={cardImage1} text="Select a pink card. It has images." no="01" color="yellow"   belowDescription="It has Images" />
            </div>
          <div className=" text-center">
           <Card imgSrc={cardImage2} text="Select a blue card. It has alphabets." no="02" color="orange"   belowDescription="It has aphabets" />
            </div>
          <div className=" text-center">
           <Card imgSrc={cardImage3} text="If they're same, It's a match! otherwise retry :(" no="03" color="green" aboveDescription="If they are same"  belowDescription="It has Images" />
            </div>
        </div>
        <button
          
          className="absolute bottom-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-8 rounded-full"
        >
            <Link to={"/game"}>{button}</Link>
          
        </button>
      </div>
    </div>
  );
};

export default ShowCards;

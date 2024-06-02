import  { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import heartcard from "../assets/blueHeartCard.png";

interface FruitInterface {
  firstLetter: string;
  isRedCardFlipped: boolean;
  hideCard: boolean;
  isFlipped: boolean;
}

const BlueAlphabetCard = ({ hideCard, firstLetter, isRedCardFlipped, isFlipped }: FruitInterface) => {
  const [flipped, setFlipped] = useState(false);

  function flipCard() {
    if (isRedCardFlipped) setFlipped((prev) => !prev);
  }

  useEffect(() => {
    setFlipped(false);
  }, [hideCard]);

  useEffect(() => {
    setFlipped(isFlipped);
  }, [isFlipped]);

  return (
    <div className="flex justify-center items-center h-full">
      <ReactCardFlip flipDirection="horizontal" isFlipped={flipped}>
        <div onClick={flipCard} className="h-52 w-52 rounded-lg flex justify-center items-center">
          <img src={heartcard} className="h-40 w-40 object-contain" alt="Blue Heart" />
        </div>
        <div onClick={flipCard} className="h-40 w-32 bg-white rounded-lg flex justify-center items-center">
          <h1 className="text-4xl font-bold text-green-500">{firstLetter}</h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default BlueAlphabetCard;

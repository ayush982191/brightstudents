 import ReactCardFlip from "react-card-flip";
import redHeart from "../assets/redHeartCard.png";

interface FruitInterface {
  fruit: string;
  isFlipped: boolean; 
}

const RedFruitCard = ({ fruit, isFlipped }: FruitInterface) => {
  return (
    <div className="flex justify-center items-center h-full">
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className="h-52 w-52  rounded-lg  flex justify-center items-center">
          <img src={redHeart} className="h-40 w-40 object-contain" alt="Red Heart" />
        </div>
        <div className="h-40 w-32 bg-yellow-50  rounded-lg  flex justify-center items-center">
          <img src={fruit} className="h-20 w-20 object-contain" alt="Fruit" />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default RedFruitCard;

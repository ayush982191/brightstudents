import { useState } from "react";
import RedFruitCard from "../components/RedFruitCard";
import BlueAlphabetCard from "../components/BlueAlphabetCard";
import background from "../assets/background.png";
import SameCard from "../components/SameCard";
import DifferentCard from "../components/DifferentCard";
import apple from "../assets/fruidCardImages/apple.png";
import pineapple from "../assets/fruidCardImages/pineapple.png";
import guava from "../assets/fruidCardImages/guava.png"
import jackfruit from "../assets/fruidCardImages/jackfruit.png";
import watermelon from "../assets/fruidCardImages/watermelon.png"
import orange from "../assets/fruidCardImages/orange.png"
import { useNavigate } from "react-router-dom";
import WinnnerCard from "../components/WinnnerCard";

const MainGame = () => {
  const FruitCards = ["apple", "guava", "pineapple", "orange", "watermelon", "jackfruit"];
  const [filterFruitCard, setFilterFruitCard] = useState(FruitCards);
  const [redCardIndex, setRedCardIndex] = useState<number | null>(null);
  const [blueCardIndex, setBlueCardIndex] = useState<number | null>(null);
  const [hideCard, setHideCard] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  let [fruitImageArray,setFruitIMageArray] = useState<string[]>([apple,guava,pineapple,orange,watermelon,jackfruit]);
  const [fruitImage,setFruitImage] = useState<string | undefined>();
  const [blueCardText,setBlueCrdText] = useState<string | null>(null);
  const [moveLeft,setMoveLeft] = useState<number>(6);
  const navigate = useNavigate();

  const handleRedCardFlip = (idx: number) => {
    setRedCardIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  const handleBlueCardFlip = (idx: number) => {
    setBlueCardIndex((prevIndex) => (prevIndex === idx ? null : idx));
    if (redCardIndex === idx) {
      setHideCard(idx);
      setFruitImage(fruitImageArray[idx]);
      setBlueCrdText(filterFruitCard[idx])
      if(filterFruitCard.length==1){
         setMessage("winner");
         setTimeout(() => {
          navigate("/")
          
         }, 3000);

      }else{
        setMessage("same");

        setTimeout(() => {
          setFilterFruitCard((prevCards) => prevCards.filter((_, index) => index !== idx));
          // FruitCards = FruitCards.filter((_,index)=>index != idx)
          setFruitIMageArray((prevCards) => prevCards.filter((_, index) => index !== idx))
          setRedCardIndex(null);
          setBlueCardIndex(null);
          setHideCard(null);
          setMessage(null);
          if(filterFruitCard.length ==1) navigate("/")
  
        }, 2000);
      }
     

    } else {
      
      if(moveLeft == 1){
        setMessage("different");
      
        setTimeout(() => {
        navigate("/")
      }, 4000);
        
      }else 
      setMoveLeft(moveLeft-1);

      // setMessage("different");
      // setTimeout(() => {
      //   setMessage(null);
      // }, 2000);
    }
  };
  // console.log("filter fruit card=",filterFruitCard)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={background} className="absolute inset-0 w-full h-full object-cover z-[-1]" alt="background" />
      <div className="relative flex gap-20 items-center justify-center h-full">
        <div className="grid grid-cols-3 gap-5">
          {filterFruitCard.map((_, idx) => (
            <div key={idx} onClick={() => handleRedCardFlip(idx)}>
              <RedFruitCard fruit={fruitImageArray[idx]} isFlipped={redCardIndex === idx} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {filterFruitCard.map((card, idx) => (
            <div key={idx} onClick={() => handleBlueCardFlip(idx)}>
              <BlueAlphabetCard hideCard={hideCard === idx} firstLetter={card.slice(0, 1)} isRedCardFlipped={redCardIndex === idx} isFlipped={blueCardIndex === idx} />
            </div>
          ))}
        </div>
      </div>
       <div className="absolute top-0 left-0" >
       {message === "same" && <SameCard imgsrc={fruitImage} word={blueCardText} />}
      {message === "different" && <DifferentCard />}
      {
        message === "winner" && <WinnnerCard/>
      }
       </div>
       <div className="bg-blue-400 p-2 rounded-md border-4 border-white  absolute right-10 top-10 " >
        <span className="text-white font-semibold" >Wrong Moves Left: {moveLeft} </span>
       </div>
    </div>
  );
};

export default MainGame;

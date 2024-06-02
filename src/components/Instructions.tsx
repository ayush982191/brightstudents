import React from 'react';
import bgImg from "../assets/background.png";
import smilingMonkey from "../assets/smilingMonkey.png";
import prevArrow from "../assets/prevArrow.png";

interface InstructionsProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    text: string;
    button: string;
    page : number
}

const Instructions: React.FC<InstructionsProps> = ({page, setPage, text, button }) => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <button
                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                className="absolute top-4 left-4 bg-transparent"
            >
                { page >1 && <img src={prevArrow} alt="Previous" className="w-12 h-12" /> }
            </button>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="relative">
                    <img src={smilingMonkey} alt="Smiling Monkey" className="w-64 mb-4" />
                    <div className="absolute  bottom-52 right-0   bg-white p-4 rounded-lg shadow-lg transform translate-x-12 -translate-y-12">
                        <p className="text-lg font-bold text-blue-400 min-w-60 mb-2">{text}</p>
                    </div>
                </div>
                <button 
                    onClick={() => setPage(prev => prev + 1)} 
                    className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-8 rounded-full"
                >
                    {button}
                </button>
            </div>
        </div>
    );
}

export default Instructions;

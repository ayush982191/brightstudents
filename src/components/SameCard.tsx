import React from 'react';

interface SameCardInterface {
    imgsrc: string | undefined;
    word: string | null ;
}

const SameCard = ({ imgsrc, word }: SameCardInterface) => {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-gray-800 bg-opacity-60 backdrop-blur-sm">
            <div className="relative flex items-center justify-center p-10 rounded-lg shadow-lg bg-white">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold mb-4 text-orange-600">It's a match!</h1>
                    <div className="flex space-x-4">
                        <div className="bg-pink-200 p-4 rounded-lg shadow-md">
                            <img src={imgsrc} alt="" className="h-40 w-28 object-contain" />
                        </div>
                        <div className="bg-orange-200 w-[9rem] p-4 rounded-lg flex items-center justify-center shadow-md">
                            <p className="text-2xl font-bold text-green-600 mt-2">{word?.slice(0,1)}</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 mt-4">Fruit name is :<span className='font-semibold text-green-500' >{word}</span> </p>
                </div>
            </div>
        </div>
    );
}

export default SameCard;

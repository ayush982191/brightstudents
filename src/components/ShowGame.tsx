import  { useState } from 'react'
import Instructions from './Instructions';
import ShowCards from './ShowCards';

const ShowGame = () => {
    const [page,setPage] = useState<number>(1);
  return (
    <div>
        {
            page == 1 && <Instructions page={page} setPage={setPage} text={"Welcome Kiddo!"} button={"START"} />
        }
        {
          page==2 && <Instructions page={page} setPage={setPage} text={"Hi , I am Mizo ! and I love bananas "} button={"NEXT"}  />
        }
        {
          page == 3 && <Instructions page={page} setPage={setPage} text={"Can you help me get some ? "} button={"YES"} />
        }
        {
          page ==4 && <ShowCards setPage={setPage} button={"PLAY"}/>
        }
        {/* {
          page ==5 && 
        } */}


    </div>
  )
}

export default ShowGame

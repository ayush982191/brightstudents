 
function WinnnerCard() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white h-[50vh] w-[50vw] flex flex-col justify-center items-center rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-red-400 mb-4 text-center">
          Hurray, You are winner
        </h1>
      </div>
    </div>
  )
}

export default WinnnerCard

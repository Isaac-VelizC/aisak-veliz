function Card({ id, emoji, heading, detail }) {
  return (
    <div
      key={id}
      className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative h-64 bg-colorLigthSecondary dark:bg-colorDarkSecondary rounded-xl
     mt-8 shadow-md hover:scale-105"
    >
      <div className="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
      <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
      <div className="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
      <div className="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
      <div className="w-full h-full shadow-xl p-3 shadow-colorLigthFour dark:shadow-colorDarkFour rounded-xl flex-col gap-2 flex justify-center
      text-colorDarkSecondary dark:text-colorLigthSecondary ">
        <span className="text-4xl transition duration-300">{emoji}</span>
        <span className="font-bold text-xl">{heading}</span>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default Card;

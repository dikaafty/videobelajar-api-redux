const Body = ({ children }) => {
  return (
    <div 
      className="flex-grow bg-[#FFFDF3] py-7 px-5 sm:py-16 sm:px-30 flex flex-col justify-center 
      items-center gap-6 sm:gap-16">
        {children}
    </div>
  );
}

export default Body;
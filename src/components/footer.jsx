const Footer = ({ children }) => {
  return (
    <div 
      className="w-full bg-white border-t-[1px] border-t-[#3A35411F] p-5 sm:py-15 sm:px-30
      flex flex-col gap-4 sm:gap-5">
        {children}
    </div>
  );
}

export default Footer;
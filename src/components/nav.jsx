const Nav = ({ navText, navList = [] }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <p 
        className="font-dm-sans font-bold text-base leading-[1.4] tracking-[0.2px] text-[#222325]
        max-sm:flex max-sm:justify-between max-sm:gap-3 max-sm:after:content-['>'] 
        max-sm:after:text-[#3A35418A]">
          {navText}
      </p>

      <div className="hidden sm:flex sm:flex-col sm:gap-[13px]">
        {
          navList.length !== 0 && navList.map((nav) => (
            <p key={id++} className="font-dm-sans font-medium text-base leading-[1.4] tracking-[0.2px] 
            text-[#333333AD] cursor-pointer select-none hover:underline">
              {nav}
            </p>
          ))
        }
      </div>
    </div>
  );
}

export default Nav;
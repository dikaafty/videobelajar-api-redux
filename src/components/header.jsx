import videobelajarLogo from "../assets/images/videobelajar-logo.png";
import dehazeIcon from "../assets/images/dehaze-icon.png";
import avatar from "../assets/images/avatar.png";

const Header = () => {
  return (
    <div className="bg-white h-fit border-t-[1px] border-b-[1px] border-[#3A35411F] py-4 px-6 
      z-[1] headerWithShadow flex justify-between items-center gap-9 sm:border-t-0 sm:py-3 sm:px-30
      max-sm:shadow-[0_0_1px_#3E434A4F,_4px_8px_12px_#3E434A26]">
      <div className="flex-grow flex justify-between items-center">
        <img 
          src={videobelajarLogo} 
          alt="videobelajar logo" 
          className="w-38 h-10.5 sm:w-[237px] sm:h-14" 
        />

        <button className="h-fit bg-transparent text-[#333333AD] border-none font-dm-sans font-[500]
          text-base leading-[1.4] tracking-[0.2px] align-middle cursor-pointer hidden md:block">
          Kategori
        </button>

        <img 
          src={dehazeIcon} 
          alt="dehaze icon" 
          className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer flex md:hidden" 
        />
      </div>

      <img 
        src={avatar} 
        alt="avatar image" 
        className="w-11 h-11 rounded-[10px] hidden md:block" 
      />
    </div>
  );
}

export default Header;
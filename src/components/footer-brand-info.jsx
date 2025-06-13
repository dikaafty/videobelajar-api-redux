import videobelajarLogo from "../assets/images/videobelajar-logo.png";

const FooterBrandInfo = () => {
  return (
    <div className="w-full sm:w-[354px] flex flex-col gap-4">
      <img 
        src={videobelajarLogo} 
        alt="videobelajar logo" 
        className="w-42.5 h-9 sm:w-51 sm:h-14"
      />

      <div className="text-[#222325] flex flex-col gap-2 sm:gap-3">
        <p 
          className="font-dm-sans font-bold text-sm sm:text-lg leading-[1.4] tracking-[0.2px]">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
        </p>

        <p 
          className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
        </p>

        <p 
          className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]">
            +62-877-7123-1234
        </p>
      </div>
    </div>
  );
}

export default FooterBrandInfo;
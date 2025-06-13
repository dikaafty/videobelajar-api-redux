const Newsletter = () => {
  return (
    <div className="w-full sm:w-[525px] flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-1">
        <p 
          className="font-dm-sans font-medium text-base sm:text-lg leading-[1.4] tracking-[0.2px]
            text-center text-[#C1C2C4]">
            NEWSLETTER
        </p>

        <div className="flex flex-col justify-center items-center gap-2.5">
          <h3 
            className="font-poppins font-semibold text-2xl sm:text-[32px] leading-[1.1] 
              text-center text-white">
              Mau Belajar Lebih Banyak?
          </h3>

          <p 
            className="font-dm-sans font-normal text-sm sm:text-base leading-[1.4] tracking-[0.2px]
              text-center text-[#F4F5FA]">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
          </p>
        </div>
      </div>

      <div className="w-fit sm:w-full relative flex flex-col gap-4 sm:block">
        <input 
          type="email" 
          name="userEmail" 
          id="userEmail" 
          placeholder="Masukkan Emailmu" 
          className="w-[280px] h-fit sm:w-full sm:h-[58px] bg-white text-[#333333AD] border-none 
            rounded-[10px] py-2.5 pr-2 pl-3 sm:py-2 sm:pr-[175px] sm:pl-8 font-dm-sans font-normal text-sm
            sm:text-base leading-[1.4] tracking-[0.2px] align-middle max-sm:text-center focus:outline-2
            focus:outline-[#FFBD3A]"
        />

        <button 
          className="bg-[#FFBD3A] text-white border-none rounded-[10px] py-2.5 px-6.5 font-dm-sans
            font-bold text-sm sm:text-base leading-[1.4] tracking-[0.2px] cursor-pointer static sm:absolute
            sm:top-1/2 sm:right-[1.5%] transform -translate-y-0 sm:-translate-y-1/2">
            Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
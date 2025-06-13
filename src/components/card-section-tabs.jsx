const CardSectionTabs = () => {
  return (
    <div 
      className="max-w-full overflow-x-scroll whitespace-nowrap pb-4 flex scrollbar-none [scrollbar-width:none]" 
      role="tablist">
        <button 
          role="tab" 
          aria-selected="true" 
          className="flex-none bg-transparent border-none py-3 pr-9 font-dm-sans 
            font-medium text-sm sm:text-base leading-[1.4] tracking-[0.2px] cursor-pointer relative active">
            Semua Kelas
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="flex-none bg-transparent text-[#333333AD] border-none py-3 pr-9 font-dm-sans 
            font-medium text-sm sm:text-base leading-[1.4] tracking-[0.2px] cursor-pointer relative">
            Pemasaran
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="flex-none bg-transparent text-[#333333AD] border-none py-3 pr-9 font-dm-sans 
            font-medium text-sm sm:text-base leading-[1.4] tracking-[0.2px] cursor-pointer relative">
            Desain
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="flex-none bg-transparent text-[#333333AD] border-none py-3 pr-9 font-dm-sans 
            font-medium text-sm sm:text-base leading-[1.4] tracking-[0.2px] cursor-pointer relative">
            Pengembangan Diri
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="flex-none bg-transparent text-[#333333AD] border-none py-3 pr-9 font-dm-sans 
            font-medium text-sm sm:text-base leading-[1.4] tracking-[0.2px] cursor-pointer relative">
            Bisnis
        </button>
    </div>
  );
}

export default CardSectionTabs;
import heroBackground from '../assets/images/hero-background.jpg';

const Hero = () => {
  return (
    <div 
			className="w-full h-100 bg-cover bg-center bg-no-repeat rounded-[10px] text-white py-16 px-5
				sm:pt-17 sm:px-10 md:pt-18 md:px-15 lg:pt-19 lg:px-25 xl:pt-[82px] xl:px-35 flex flex-col 
				justify-center items-center gap-6"
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${heroBackground})`,
			}}>
				<div className="flex flex-col gap-3">
					<h1 
						className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] font-poppins 
							font-bold text-center">
							Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
					</h1>

					<p 
						className="text-sm lg:text-base leading-[1.4] font-dm-sans font-[500] tracking-[0.2px] text-center">
							Temukan ilmu baru yang menarik dan mendalam melalui koleksi video 
							pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan 
							interaktif yang akan meningkatkan pemahaman Anda.
					</p>
				</div>

				<button 
					className="max-sm:w-full bg-[#3ECF4C] text-white border-none rounded-[10px] py-2.5 px-[26px] 
						font-dm-sans font-normal lg:font-bold text-sm lg:text-base leading-[1.4] tracking-[0.2px] cursor-pointer">
						Temukan Video Course untuk Dipelajari!
				</button>
		</div>
  );
}

export default Hero;
import linkedInLogo from "../assets/images/linkedin-logo.png";
import facebookLogo from "../assets/images/facebook-logo.png";
import instagramLogo from "../assets/images/instagram-logo.png";
import twitterLogo from "../assets/images/twitter-logo.png";

const FooterBottomBar = () => {
  return (
    <div className="flex max-sm:flex-col-reverse justify-between gap-3 sm:gap-9">
      <p 
        className="font-dm-sans font-medium text-base leading-[1.4] tracking-[0.2px] text-[#333333AD]">
          @2023 Gerobak Sayur All Rights Reserved.
      </p>

      <div className="flex gap-[15px]">
        <img 
          src={linkedInLogo} 
          alt="linkedIn logo" 
          className="w-[35px] h-[35px] cursor-pointer"
        />

        <img 
          src={facebookLogo} 
          alt="facebook logo" 
          className="w-[35px] h-[35px] cursor-pointer"
        />

        <img 
          src={instagramLogo} 
          alt="instagram logo" 
          className="w-[35px] h-[35px] cursor-pointer"
        />

        <img 
          src={twitterLogo} 
          alt="twitter logo" 
          className="w-[35px] h-[35px] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FooterBottomBar;
import cardImgOne from "../assets/images/card-image-one.jpeg";
import cardImgTwo from "../assets/images/card-image-two.jpeg";
import cardImgThree from "../assets/images/card-image-three.jpeg";
import cardImgFour from "../assets/images/card-image-four.jpeg";
import cardImgFive from "../assets/images/card-image-five.jpeg";
import cardImgSix from "../assets/images/card-image-six.jpeg";
import cardImgSeven from "../assets/images/card-image-seven.jpeg";
import cardImgEight from "../assets/images/card-image-eight.jpeg";
import cardImgNine from "../assets/images/card-image-nine.jpeg";
import charOne from "../assets/images/char-one.png";
import charTwo from "../assets/images/char-two.png";
import charThree from "../assets/images/char-three.png";
import charFour from "../assets/images/char-four.png";
import charFive from "../assets/images/char-five.png";
import charSix from "../assets/images/char-six.png";
import charSeven from "../assets/images/char-seven.png";
import charEight from "../assets/images/char-eight.png";
import starsRatingImg from "../assets/images/stars-rating.png";
import avatar from "../assets/images/avatar.png";
import { useSelector } from "react-redux";

const cardImgMap = {
  1: cardImgOne,
  2: cardImgTwo,
  3: cardImgThree,
  4: cardImgFour,
  5: cardImgFive,
  6: cardImgSix,
  7: cardImgSeven,
  8: cardImgEight,
  9: cardImgNine,
}

const charImgMap = {
  1: charOne,
  2: charTwo,
  3: charThree,
  4: charFour,
  5: charFive,
  6: charSix,
  7: charSeven,
  8: charEight,
  9: charThree,
}

const Card = ({ id, isUserCourse = false, idx, children }) => {
  const courseData = useSelector((state) => state.course.courseData);
  console.log(courseData);

  return (
    <div 
      className="w-full sm:w-96 h-fit bg-white border-1 border-[#3A35411F] rounded-[10px] p-4 sm:p-5
      grid grid-cols-[82px_1fr] grid-rows-[repeat(4,_auto)] gap-2 sm:flex sm:flex-col sm:gap-4">
      <img 
        src={courseData[idx].courseImg || cardImgMap[id]} 
        alt={`Card Image`}
        className="w-20.5 h-20.5 sm:w-86 sm:h-[193px] rounded-[10px] object-cover max-sm:row-start-1
        max-sm:row-end-3 max-sm:col-start-1 max-sm:col-end-2" 
      />

      <div className="w-full flex flex-col gap-2">
        <h6 
          className="font-poppins font-semibold text-base sm:text-lg text-[#222325] leading-[1.2]
          max-sm:row-start-1 max-sm:row-end-2 max-sm:col-start-2 max-sm:col-end-3">
            {courseData[idx].courseTitle || "Big 4 Auditor Financial Analyst"}
        </h6>

        <p 
          className="font-dm-sans font-medium text-base leading-[1.4] tracking-[0.2px] text-[#333333AD]
          max-sm:display-none cut-two-lines">
            {
              courseData[idx].courseDescription || 
              "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
            }
        </p>
      </div>

      <div 
        className="w-full flex gap-2 sm:gap-2.5 max-sm:row-start-2 max-sm:row-end-3 max-sm:col-start-2 
        max-sm:col-end-3">
        <img 
          src={isUserCourse ? avatar : charImgMap[id]} 
          alt={`Char Image`}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px]" 
        />

        <div className="w-full">
          <p 
            className="font-dm-sans font-medium text-sm sm:text-base leading-[1.4] 
            tracking-[0.2px] text-[#222325]">
              {isUserCourse ? "User" : "Jenna Ortega"}
          </p>

          <p 
            className="font-dm-sans font-normal text-xs sm:text-sm leading-[1.4] tracking-[0.2px] 
            text-[#333333AD]">
              {isUserCourse ? "Full Stack Developer" : "Senior Accountant"}
              <span className="max-sm:hidden"> di </span>
              <span 
                className="font-bold max-sm:hidden">
                  {isUserCourse ? "Harisenin" : "Gojek"}
              </span>
          </p>
        </div>
      </div>

      <div 
        className="w-full flex justify-between max-sm:row-start-3 max-sm:row-end-4 
        max-sm:col-start-1 max-sm:col-end-3">
        <div className="flex gap-2">
          <img 
            src={starsRatingImg} 
            alt="Stars Rating" 
            className="w-22.5 h-4.5"
          />

          <p 
            className="font-dm-sans font-medium text-xs sm:text-sm leading-[1.4] tracking-[0.2px] 
            text-[#333333AD] decoration-solid underline">
              3.5 (86)
          </p>
        </div>

        <h4 
          className="font-poppins font-semibold text-xl sm:text-2xl leading-[1.2] text-[#3ECF4C]">
            Rp {courseData[idx].coursePrice || "300K"}
        </h4>
      </div>

      { children }
    </div>
  );
}

export default Card;
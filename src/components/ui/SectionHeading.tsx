import { FC } from "react";
import TripleStars from "../icons/TripleStars";

interface Props {
  title: string;
  subtitle: string
  linkText: string
  classes?:string
}

const SectionHeading: FC<Props> = ({title, subtitle, linkText, classes}) => {
  return (
    <div className={`max-w-[1920px] mx-auto flex justify-between items-end gap-50 ${classes}`}>
      <div className="flex flex-col relative">
        <h5 className="text-[48px] leading-[150%] mb-[14px] capitalize">{title}</h5>
        <p className="text-lg leading-[150%] text-gray-2">{subtitle}</p>

        <div className="absolute -top-5 -left-5">
          <TripleStars/>
        </div>
      </div>

      <a href="#" className="text-lg border border-stroke rounded-[10px] max-h-max leading-[150%] font-medium px-6 py-[18px] bg-gray-1 text-nowrap">{linkText}</a>



    </div>
  ) 
};
export default SectionHeading
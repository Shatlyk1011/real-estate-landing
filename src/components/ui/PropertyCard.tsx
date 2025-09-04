import BathroomIcon from "../icons/BathroomIcon";
import BedroomIcon from "../icons/BedroomIcon";
import VillaIcon from "../icons/VillaIcon";

const PropertyCard = () => {
  return (
    <div className="p-10 rounded-lg border border-stroke">
      <figure className="w-full mb-[30px]">
        <img className="w-full h-full object-fit" src="/images/feat-1.png" alt="" />
      </figure>

      <div>
        <h6 className="text-2xl font-semibold leading-[150%] mb-1.5">Seaside Serenity Villa</h6>
        <p className="text-gray-2 font-medium text-lg leading-[150%] line-clamp-2 mb-[30px]">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood</p>

        <ul className="flex gap-2.5 mb-[30px]">
          <li className="px-[14px] py-[9px] border border-stroke rounded-full flex items-center gap-1 text-lg leading-[150%] text-nowrap">
            <BedroomIcon/>
            <span>4-Bedroom</span>
          </li>

          <li className="px-[14px] py-[9px] border border-stroke rounded-full flex items-center gap-1 text-lg leading-[150%] text-nowrap">
            <BathroomIcon/>
            <span>3-Bathroom</span>
          </li>

          <li className="px-[14px] py-[9px] border border-stroke rounded-full flex items-center gap-1 text-lg leading-[150%] text-nowrap">
            <VillaIcon/>
            <span>Villa</span>
          </li>
        </ul>

        <div className="flex justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-lg leading-[150%] font-medium text-gray-2">Price</span>
            <div className="text-2xl leading-[150%] text-white font-semibold">$550.000</div>
          </div>

          <button className="py-[18px] rounded-[10px] px-[54px] font-medium text-lg bg-primary">View Property Details</button>
        </div>
      </div>
    </div>
  )
};
export default PropertyCard
import BuildingsIcon from "../icons/BuildingsIcon";
import InvestmentIcon from "../icons/InvestmentIcon";
import LinkArrow from "../icons/LinkArrow";
import PropertyIcon from "../icons/PropertyIcon";
import ShopIcon from "../icons/ShopIcon";

const CARDS = [
  {
    icon: <ShopIcon />,
    title: "Find Your Dream Home",
  },
  {
    icon: <PropertyIcon />,
    title: "Unlock Property Value",
  },
  {
    icon: <BuildingsIcon />,
    title: "Effortless Property Management",
  },
  {
    icon: <InvestmentIcon />,
    title: "Smart Investments, Informed Decisions",
  },
]

const FeatureCards = () => {
  return (
    <section className="max-w-[1920px] mx-auto p-5 flex gap-5">
      {/* card */}
      {CARDS.map((card) => (
        <div key={card.title} className="w-full bg-gray-1 py-10 px-5 rounded-xl relative">
          <div className="flex flex-col items-center gap-5">
            {card.icon}
            <h4>{card.title}</h4>
          </div>
          <div className="absolute top-5 right-5 ">
            <LinkArrow className="text-[#4D4D4D]" />
          </div>
        </div>
      ))}
    </section>
  )
};
export default FeatureCards
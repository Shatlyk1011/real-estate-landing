import LinkArrow from "../icons/LinkArrow";

const CARDS = [
  {
    value: "200+",
    label: "Happy Customers",
  },
  {
    value: "10k+",
    label: "Properties For Clients",
  },
  {
    value: "16+",
    label: "Years of Experience",
  },
]

const Hero = () => {
  return (
    <section className="w-full mx-auto flex justify-center gap-20 mt-16">
      {/* left */}
      <div className="flex-1 w-full py-36 pl-[162px] max-w-[920px]">
        <div className="relative">
          <h1 className="text-[60px] font-semibold leading-[120%] mb-6">Discover Your Dream Property with Estatein</h1>
          <p className="text-lg font-medium leading-[150%] text-gray-2">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>

          {/* curved text */}

          <div className="absolute top-0 right-[-22%]">
            <div className="max-w-max border border-stroke rounded-full p-4 relative bg-background">
              <svg viewBox="0 0 100 100" width="175" height="175" className="animate-spin [animation-duration:10s]">
                <defs>
                  <path id="circle"
                    d="
                      M 50, 50
                      m -37, 0
                      a 37,37 0 1,1 74,0
                      a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fontSize="11">
                  <textPath href="#circle" className="fill-white" letterSpacing={2}>
                    Discover your dream property✨
                  </textPath>
                </text>
              </svg>
            </div>

            {/* inner circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center border border-stroke rounded-full bg-gray-1">
              <LinkArrow/>
            </div>
          </div>

          <div className="flex items-center gap-5 my-[60px]">
            <button className="px-6 py-[18px] border border-stroke rounded-[10px]">Learn More</button>
            <button className="px-6 py-[18px] border border-stroke bg-primary rounded-[10px]">Browse Properties</button>
          </div>

          <div className="flex gap-5 leading-[150%]">
            {CARDS.map((card) => (
              <div key={card.value} className="px-6 py-4 rounded-xl border border-stroke bg-gray-1 flex-1">
                <div className="text-[40px] font-bold leading-[150%]">{card.value}</div>
                <h3 className="text-gray-2 text-lg font-medium">{card.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-1 bg-gray-700 w-full  h-full">
        <figure className="w-full h-full">
          <img className="object-cover w-full h-full" src="/images/hero.png" alt="Buildings image" />
        </figure>
      </div>
    </section>
  )
};
export default Hero
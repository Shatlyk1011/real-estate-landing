const Promo = () => {
  return (
    <section className="w-full relative">
      <div className="max-w-[1920px] mx-auto px-[162px] py-25">
        <div className="flex gap-16 items-center">
          {/* left */}
          <div className="flex-1 max-w-[1154px]">
            <div className="text-[48px] leading-[150%] font-semibold">Start Your Real Estate Journey Today</div>

            <p className="text-lg font-medium leading-[150%]">Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
          </div>

          {/* right */}
          <button className="px-6 py-[18px] bg-primary rounded-[10px] text-lg font-medium leading-[150%] h-max">Explore Properties</button>

        </div>
      </div>

      <img className="absolute object-cover bottom-0 left-0 -z-[1]" src="/images/promo-left.png" alt="" />
      <img className="absolute object-cover bottom-0 right-0 -z-[1]" src="/images/promo-right.png" alt="" />
    </section>
  )
};
export default Promo
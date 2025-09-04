import FacebookIcon from "../icons/socials/Facebook";
import LinkedInIcon from "../icons/socials/LinkedInIcon";
import TwitterIcon from "../icons/socials/TwitterIcon";
import YoutubeIcon from "../icons/socials/YoutubeIcon";

const LINKS = [
  [
    "Home",
    "Hero Section",
    "Features",
    "Properties",
    "Testimonials",
    "Faq's"
  ],
  [
    "About Us",
    "Our Story",
    "Our Works",
    "How It Works",
    "Our Team",
    "Our Clients"
  ],
  [
    "Properties",
    "Portfolio",
    "Categories"
  ],
  [
    "Services",
    "Valuation Mastery",
    "Strategic Marketing",
    "Negotiation Wizardry",
    "Closing Success",
    "Property Management"
  ],
  [
    "Contact Us",
    "Contact Form",
    "Our Offices"
  ]
]

const Footer = () => {
  return (
    <footer className="">
      {/* top footer */}
      <div className="py-25 flex gap-20 justify-center px-[162px]">
        {/* left */}
        <div className="flex flex-col gap-[30px] min-w-[540px]">
          <figure>
        <img src="/images/Logo.png" alt="" />
          </figure>

          <label className="px-6 py-5 border border-stroke rounded-xl max-w-[424px]">
        <input className="focus:outline-none placeholder:text-lg placeholder:font-[inherit]" type="text" placeholder="Enter Your Email" />
          </label>
        </div>

        {/* right */}
        <div className="flex gap-25 text-nowrap">
          {LINKS.map((list, idx) => (
            <ul
              key={idx}
              className="[&>*]:text-lg [&>*]:font-medium [&>*]:leading-[24px] space-y-5 [&>*]:first:text-xl [&>*]:first:text-gray-2 [&>*]:first:mb-[30px]"
            >
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-gray-1 py-10 px-[162px] flex items-center justify-between">
        {/* left */}
        <div className="text-lg font-medium leading-[24px] flex items-center text-nowrap gap-[38px] ">
          <div>@2023 Estatein. All Rights Reserved.</div>
          <div>Terms & Conditions</div>
        </div>

        {/* right */}
        <ul className="flex gap-2.5 items-center">
          <li><FacebookIcon/></li>
          <li><LinkedInIcon/></li>
          <li><TwitterIcon/></li>
          <li><YoutubeIcon/></li>
        </ul>
      </div>
    </footer>
  )
};
export default Footer
import FaqCard from "../ui/FaqCard";
import Pagination from "../ui/Pagination";
import SectionHeading from "../ui/SectionHeading";

const Faq = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-[162px] pb-24">
      <SectionHeading title="Frequently Asked Questions" subtitle="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way." linkText="View All FAQ’s" classes="mb-20"/>

      <div className="flex gap-[30px] mb-[50px]">
        <FaqCard/>
        <FaqCard/>
        <FaqCard/>
      </div>

      <Pagination/>
    </section>
  )
};
export default Faq
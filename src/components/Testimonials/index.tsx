import Pagination from "../ui/Pagination";
import SectionHeading from "../ui/SectionHeading";
import Testimonial from "../ui/Testimonial";

const Testimonials = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-[162px] pb-[150px]">
      <SectionHeading title="What Our Clients Say" subtitle="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs." linkText="View All Testimonials" classes="mb-20"/>

      <div className="flex gap-[30px] mb-[50px]">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
      </div>

      <Pagination />
    </section>
  )
};
export default Testimonials
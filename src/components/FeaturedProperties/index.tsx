import Pagination from "../ui/Pagination";
import PropertyCard from "../ui/PropertyCard";
import SectionHeading from "../ui/SectionHeading";

const FeaturedProperties = () => {
  return (
    <section className="max-w-[1920px] mx-auto py-[150px] px-[162px]">
      <SectionHeading title="Featured Properties" subtitle="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information." linkText="View All Properties" classes="mb-20"/>

      {/* cards */}
      <div className="flex flex-nowrap gap-[30px] mb-[50px]">
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
      </div>

      {/* Pagination */}

      <Pagination/>

    </section>
  )
};
export default FeaturedProperties
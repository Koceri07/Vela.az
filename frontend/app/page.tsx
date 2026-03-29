
import HeroPage from "@/components/design/heroPage";
import HowItWorks from "@/components/design/HowItWorks";
import WhyVela from "@/components/design/WhyVela";
import SelectedItems from "@/components/design/SelectedItems";
import PopularCategories from "@/components/design/PopularCategories";
import Testimonials from "@/components/design/Testimonials";

export default function Home() {
  return (
    <>
      <HeroPage />
      <HowItWorks />
      <PopularCategories />
      <WhyVela />
      <SelectedItems />
      <Testimonials />

    </>
  );
}

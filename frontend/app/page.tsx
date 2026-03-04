import Container from "@/components/common/Container";
import HeroPage from "@/components/heroPage";
import HowItWorks from "@/components/HowItWorks";
import WhyVela from "@/components/WhyVela";
import SelectedItems from "@/components/SelectedItems";
import PopularCategories from "@/components/PopularCategories";
import Testimonials from "@/components/Testimonials";

import Image from "next/image";



export default function Home() {
  return (
    <>
      <HeroPage/>
      <HowItWorks/>
      <PopularCategories/>
      <WhyVela/>
      <SelectedItems/>
      <Testimonials/>
      <Container>
        <h1>salam</h1>
      </Container>
    </>
  );
}
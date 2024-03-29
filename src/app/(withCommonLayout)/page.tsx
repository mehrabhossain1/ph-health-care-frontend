import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
};

export default HomePage;

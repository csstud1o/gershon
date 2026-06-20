import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Chef from "@/components/Chef";
import Interior from "@/components/Interior";
import Terrace from "@/components/Terrace";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Interior />
      <Terrace />
      <Reviews />
      <Reservation />
      <Location />
      <InstagramFeed />
      <Footer />
    </>
  );
}

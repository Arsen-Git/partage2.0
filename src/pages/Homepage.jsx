import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HowSection from "../components/HowSection/HowSection";
import Creators from "../components/Creators/Creators";
import Collections from "../components/Collections/Collections";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <HowSection />
      <Creators />
      <Collections />
      <Form />
      <Footer />
    </>
  );
}

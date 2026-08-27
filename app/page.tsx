import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Tripcart from "@/components/case/Tripcart";
import CoachPodium from "@/components/case/CoachPodium";
import Creativelaya from "@/components/case/Creativelaya";
import Toastmasters from "@/components/case/Toastmasters";
import Leadership from "@/components/Leadership";
import Stack from "@/components/Stack";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <CursorGlow />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Experience />
        <Work />
        <Tripcart />
        <CoachPodium />
        <Creativelaya />
        <Toastmasters />
        <Leadership />
        <Stack />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import  Features  from "@/components/Features";
import  Faq  from "@/components/Feq";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import  Pricing  from "@/components/Pricing";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
         <Pricing />
        <Cta />
       {/* <Footer /> */}
      </div>
    </>
  );
}

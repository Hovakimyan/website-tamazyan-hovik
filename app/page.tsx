import Hero from "@/app/sections/Hero";
import Thesis from "@/app/sections/Thesis";
import Capabilities from "@/app/sections/Capabilities";
import Roadmap from "@/app/sections/Roadmap";
import Principles from "@/app/sections/Principles";
import Outcomes from "@/app/sections/Outcomes";
import CtaBanner from "@/app/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <Capabilities />
      <Roadmap />
      <Principles />
      <Outcomes />
      <CtaBanner />
    </>
  );
}

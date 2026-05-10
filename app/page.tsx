import Hero from "@/app/sections/Hero";
import Quote from "@/app/sections/Quote";
import ExpertiseTiles from "@/app/sections/ExpertiseTiles";
import Process from "@/app/sections/Process";
import Values from "@/app/sections/Values";
import Stats from "@/app/sections/Stats";
import CtaBanner from "@/app/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <ExpertiseTiles />
      <Process />
      <Values />
      <Stats />
      <CtaBanner />
    </>
  );
}

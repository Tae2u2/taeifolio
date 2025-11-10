import dynamic from "next/dynamic";
import Gallery from "@/components/home/Gallery";
import Stack from "@/components/stack/Stack";
import ObjectCanvas from "@/components/home/ObjectCanvas";
const Contact = dynamic(() => import("@/components/home/Contact"));
const AutoSlide = dynamic(() => import("@/components/home/AutoSlide"));

export default function Home() {
  return (
    <main>
      <ObjectCanvas />
      <Contact />
      <Gallery />
      <Stack />
    </main>
  );
}

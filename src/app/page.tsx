import dynamic from "next/dynamic";
import Gallery from "@/components/home/Gallery";
import Stack from "@/components/stack/Stack";
const Contact = dynamic(() => import("@/components/home/Contact"));
const AutoSlide = dynamic(() => import("@/components/home/AutoSlide"));

export default function Home() {
  return (
    <main>
      <Contact />
      <Gallery />
      <Stack />
      <AutoSlide />
    </main>
  );
}

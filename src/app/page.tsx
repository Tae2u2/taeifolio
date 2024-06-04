import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/contact/Contact"));

export default function Home() {
  return (
    <main>
      <Contact />
    </main>
  );
}

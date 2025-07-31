import dynamic from "next/dynamic";
const AutoSlide = dynamic(() => import("@/components/home/AutoSlide"));
const ThankUpage = () => {
  return <AutoSlide />;
};

export default ThankUpage;

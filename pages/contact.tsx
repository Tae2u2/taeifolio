import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@components/contact/Contact"));

const contact = () => {
  return <Contact />;
};

export default contact;

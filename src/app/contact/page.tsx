import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/contact/Contact"));

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;

import dynamic from "next/dynamic";
const Stack = dynamic(() => import("@components/stack/Stack"));

const skill = () => {
  return <Stack />;
};

export default skill;

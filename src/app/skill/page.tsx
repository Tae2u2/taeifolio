import dynamic from "next/dynamic";
const Stack = dynamic(() => import("@/components/stack/Stack"));

const SkillPage = () => {
  return <Stack />;
};

export default SkillPage;

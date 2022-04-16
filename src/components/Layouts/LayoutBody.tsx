import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";

const LayoutBody = () => {
  return (
    <>
      <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
    </>
  );
};

export default LayoutBody;

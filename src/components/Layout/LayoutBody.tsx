import { ContextProvider } from "../../context";

import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";

const LayoutBody = () => {
  return (
    <ContextProvider>
      <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
    </ContextProvider>
  );
};

export default LayoutBody;

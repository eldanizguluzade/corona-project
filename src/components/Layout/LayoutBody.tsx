import { ContextProvider } from "../../context";

import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";

const LayoutBody = () => {
  return (
    <ContextProvider>
      <LayoutHeader />
      <LayoutMain />
    </ContextProvider>
  );
};

export default LayoutBody;

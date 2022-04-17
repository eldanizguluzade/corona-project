import React from "react";
import LayoutBody from "./components/Layout/LayoutBody";
import { ContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <LayoutBody />
      </ContextProvider>
    </div>
  );
}

export default App;

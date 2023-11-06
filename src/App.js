import JobProvider from "./context/jobContext";
import { GlobalStyle } from "./global/style";
import Routers from "./routes/index";
import React from "react";

function App() {
  return (
    <div>
      <GlobalStyle />
      <JobProvider>
        <Routers />
      </JobProvider>
    </div>
  );
}

export default App;

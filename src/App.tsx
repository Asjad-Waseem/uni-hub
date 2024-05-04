import "@assets/styles/App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "routes";
import { AppLayout } from "layouts";

function App() {
  return (
    <BrowserRouter>
      {/* <Router /> */}
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

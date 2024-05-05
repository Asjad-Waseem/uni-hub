import "assets/styles/global/App.css";

import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "layouts";

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

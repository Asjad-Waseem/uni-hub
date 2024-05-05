import "assets/styles/global/index.css";

import { Header, Footer } from "@components";
import Router from "routes";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

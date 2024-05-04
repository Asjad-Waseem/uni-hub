import { Header, Footer } from "@components";
import Router from "routes";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

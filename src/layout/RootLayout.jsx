import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FooterComponent from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-3 flex-grow">
          <Header />

          <Outlet />
        </div>

        <FooterComponent />
      </div>
    </>
  );
}

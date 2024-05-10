import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-3 flex-grow">
          <h1>Header</h1>

          <Outlet />
        </div>

        <h1>Footer</h1>
      </div>
    </>
  );
}

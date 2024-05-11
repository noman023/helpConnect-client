import { Helmet } from "react-helmet";
import Login from "../../components/Login/Login";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>HelpConnect | Login</title>
      </Helmet>

      {/* <p>login page</p> */}
      <Login />
    </>
  );
}

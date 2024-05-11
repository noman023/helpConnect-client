import { Helmet } from "react-helmet";
import Register from "../../components/Register/Register";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>HelpConnect | Register</title>
      </Helmet>

      <Register />
    </>
  );
}

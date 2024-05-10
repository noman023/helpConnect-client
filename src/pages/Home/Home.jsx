import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HelpConnect | Home</title>
      </Helmet>

      <Slider />
    </>
  );
}

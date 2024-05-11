import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import CardComponent from "../../components/Card/Card";
import Reviews from "../../components/Reviews/Reviews";
import SectionHead from "../../components/SectionHead/SectionHead";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HelpConnect | Home</title>
      </Helmet>

      <Slider />

      <div>
        <SectionHead>Where Your Help Needed</SectionHead>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <CardComponent />
        </div>

        <Reviews />
      </div>
    </>
  );
}

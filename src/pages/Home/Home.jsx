import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import CardComponent from "../../components/Card/Card";
import Reviews from "../../components/Reviews/Reviews";
import SectionHead from "../../components/SectionHead/SectionHead";
import NeedVolunteer from "../../components/NeedVolunteer/NeedVolunteer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HelpConnect | Home</title>
      </Helmet>

      <Slider />

      <NeedVolunteer />

      <Reviews />
    </>
  );
}

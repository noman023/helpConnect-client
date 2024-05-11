import SectionHead from "../SectionHead/SectionHead";
import CardComponent from "../Card/Card";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NeedVolunteer() {
  return (
    <div>
      <SectionHead>Where Your Help Needed</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <CardComponent />
      </div>

      <Link to={"/allPost"}>
        <Button color={"success"} className="mb-10 mx-auto">
          See All Post
        </Button>
      </Link>
    </div>
  );
}

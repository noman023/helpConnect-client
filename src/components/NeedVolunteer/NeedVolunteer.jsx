import SectionHead from "../SectionHead/SectionHead";
import CardComponent from "../Card/Card";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SpinnerComponent from "../Spinner/Spinner";
import axios from "axios";

export default function NeedVolunteer() {
  const { data, isPending, status } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/posts");

      return res.data;
    },
  });

  let posts;
  if (status === "success") {
    posts = data.slice(0, 6);
  }

  return (
    <div>
      <SectionHead>Where Your Help Needed</SectionHead>

      {isPending ? (
        <div className="text-center mt-10">
          <SpinnerComponent />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
          {posts.map((post) => (
            <CardComponent key={post._id} data={post} />
          ))}
        </div>
      )}

      <Link to={"/allPost"}>
        <Button color={"success"} className="mb-10 mx-auto">
          See All Post
        </Button>
      </Link>
    </div>
  );
}

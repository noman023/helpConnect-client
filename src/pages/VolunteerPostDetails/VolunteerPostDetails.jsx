import { Helmet } from "react-helmet";
import PostDetails from "../../components/PostDetails/PostDetails";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../../baseUrl";
import SpinnerComponent from "../../components/Spinner/Spinner";

export default function VolunteerPostDetails() {
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["postDetails"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/post/${id}`);

      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>HelpConnect | Volunteer Post Details</title>
      </Helmet>

      {isPending ? <SpinnerComponent /> : <PostDetails data={data} />}
    </div>
  );
}

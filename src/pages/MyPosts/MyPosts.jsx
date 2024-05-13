import { Helmet } from "react-helmet";
import TableComponent from "../../components/Table/Table";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../../baseUrl";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import SpinnerComponent from "../../components/Spinner/Spinner";

export default function MyPosts() {
  const { user } = useContext(AuthContext);

  const { data, isPending } = useQuery({
    queryKey: ["myPosts"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/myPosts?email=${user.email}`);

      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>HelpConnect | My Volunteer Posts</title>
      </Helmet>

      {isPending ? (
        <SpinnerComponent />
      ) : (
        <TableComponent tableUsedIn={"myPost"} data={data} />
      )}
    </div>
  );
}

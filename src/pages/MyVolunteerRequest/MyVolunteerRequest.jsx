import { Helmet } from "react-helmet";
import TableComponent from "../../components/Table/Table";
import { useContext, useEffect } from "react";

import axios from "axios";
import baseUrl from "../../baseUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useQuery } from "@tanstack/react-query";
import SpinnerComponent from "../../components/Spinner/Spinner";

export default function MyVolunteerRequest() {
  const { user } = useContext(AuthContext);

  const { data, isPending } = useQuery({
    queryKey: ["myPosts"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/myRequests?email=${user?.email}`);

      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>HelpConnect | My Volunteer Requests</title>
      </Helmet>

      {isPending ? (
        <SpinnerComponent />
      ) : (
        <TableComponent tableUsedIn={"myRequest"} data={data} />
      )}
    </div>
  );
}

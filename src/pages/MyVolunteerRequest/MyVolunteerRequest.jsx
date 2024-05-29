import { Helmet } from "react-helmet";
import TableComponent from "../../components/Table/Table";
import { useContext, useEffect } from "react";

import axios from "axios";
import baseUrl from "../../baseUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useQuery } from "@tanstack/react-query";
import SpinnerComponent from "../../components/Spinner/Spinner";
import { useState } from "react";
import { TextInput } from "flowbite-react";

export default function MyVolunteerRequest() {
  const [searchText, setsearchText] = useState("");
  const { user } = useContext(AuthContext);

  const { data, isPending, status } = useQuery({
    queryKey: ["myPosts"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/myRequests?email=${user?.email}`);

      return res.data;
    },
  });

  let filteredPosts;
  // Filter posts based on search text
  if (status === "success" && searchText) {
    filteredPosts = data.filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
  } else {
    filteredPosts = data; //if no search text then all data will be filteredPosts
  }

  return (
    <div>
      <Helmet>
        <title>HelpConnect | My Volunteer Requests</title>
      </Helmet>

      {/* search text */}
      <div className="md:w-1/3 mx-auto mt-5">
        <TextInput
          type="text"
          placeholder="Search by Post Title"
          onChange={(e) => setsearchText(e.target.value)}
        />
      </div>

      {isPending ? (
        <SpinnerComponent />
      ) : (
        <TableComponent tableUsedIn={"myRequest"} data={filteredPosts} />
      )}
    </div>
  );
}

import { Helmet } from "react-helmet";
import { TextInput } from "flowbite-react";

import CardComponent from "../../components/Card/Card";
import { useState } from "react";
import TableComponent from "../../components/Table/Table";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaTableList } from "react-icons/fa6";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../../baseUrl";
import SpinnerComponent from "../../components/Spinner/Spinner";

export default function AllVolunteerPost() {
  const [searchText, setsearchText] = useState("");
  const [isTableLayout, setIsTableLayout] = useState(false);

  const { data, status } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/posts`);

      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>HelpConnect | All Volunteer Posts</title>
      </Helmet>

      {/* search text */}
      <div className="md:w-1/3 mx-auto mt-5">
        <TextInput
          type="text"
          placeholder="Search by Post Title"
          onChange={(e) => setsearchText(e.target.value)}
        />
      </div>

      {/* select layout format*/}
      <div className="text-center my-5 text-green-600">
        <p className="text-xl font-bold">Change Layout</p>

        {/* card icon */}
        <div className="flex gap-4 text-2xl items-center justify-center mt-2">
          <BsGrid3X3GapFill
            title="Card Format"
            className="cursor-pointer"
            onClick={() => setIsTableLayout(false)}
          />

          {/* table icon */}
          <FaTableList
            title="Table Format"
            className="cursor-pointer"
            onClick={() => setIsTableLayout(true)}
          />
        </div>
      </div>

      {status === "pending" && <SpinnerComponent />}

      {/* if data is there */}
      {status === "success" && (
        <>
          {/* if isTableLayout true then show data using table else using card */}
          {isTableLayout ? (
            <TableComponent tableUsedIn={"allPost"} data={data} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
              {data.map((post) => (
                <CardComponent key={post._id} data={post} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

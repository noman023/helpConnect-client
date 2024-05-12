import { Helmet } from "react-helmet";
import { TextInput } from "flowbite-react";

import CardComponent from "../../components/Card/Card";
import { useState } from "react";
import TableComponent from "../../components/Table/Table";

import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaTableList } from "react-icons/fa6";

export default function AllVolunteerPost() {
  const [searchText, setsearchText] = useState("");
  const [isTableLayout, setIsTableLayout] = useState(false);

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

        <div className="flex gap-4 text-2xl items-center justify-center mt-2">
          <BsGrid3X3GapFill
            title="Card Format"
            className="cursor-pointer"
            onClick={() => setIsTableLayout(false)}
          />

          <FaTableList
            title="Table Format"
            className="cursor-pointer"
            onClick={() => setIsTableLayout(true)}
          />
        </div>
      </div>

      {/* if isTableLayout true then show data using table else using card */}
      {isTableLayout ? (
        <TableComponent tableUsedIn={"allPost"} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <CardComponent />
        </div>
      )}
    </div>
  );
}

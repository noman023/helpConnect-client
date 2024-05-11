import { Helmet } from "react-helmet";
import { TextInput } from "flowbite-react";

import CardComponent from "../../components/Card/Card";

export default function AllVolunteerPost() {
  return (
    <div>
      <Helmet>
        <title>HelpConnect | All Volunteer Posts</title>
      </Helmet>

      <div className="w-1/3 mx-auto mt-5">
        <TextInput type="text" placeholder="Search by Post Title" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <CardComponent />
      </div>
    </div>
  );
}

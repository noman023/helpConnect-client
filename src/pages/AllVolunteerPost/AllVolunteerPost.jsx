import { Helmet } from "react-helmet";
import CardComponent from "../../components/Card/Card";

export default function AllVolunteerPost() {
  return (
    <div>
      <Helmet>
        <title>HelpConnect | All Volunteer Posts</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <CardComponent />
      </div>
    </div>
  );
}

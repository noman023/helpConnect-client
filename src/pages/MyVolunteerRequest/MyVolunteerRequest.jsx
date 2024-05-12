import { Helmet } from "react-helmet";
import TableComponent from "../../components/Table/Table";

export default function MyVolunteerRequest() {
  return (
    <div>
      <Helmet>
        <title>HelpConnect | My Volunteer Requests</title>
      </Helmet>

      <TableComponent tableUsedIn={"myRequest"} />
    </div>
  );
}

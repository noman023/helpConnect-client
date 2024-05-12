import { Helmet } from "react-helmet";
import TableComponent from "../../components/Table/Table";

export default function MyPosts() {
  return (
    <div>
      <Helmet>
        <title>HelpConnect | My Volunteer Posts</title>
      </Helmet>

      <TableComponent />
    </div>
  );
}

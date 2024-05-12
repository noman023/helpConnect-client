import { Helmet } from "react-helmet";
import AddVolunteerPost from "../../components/AddVolunteerPost/AddVolunteerPost";

export default function AddVolunteerPostPage() {
  return (
    <div>
      <Helmet>
        <title>HelpConnect | Add a Volunteer Post</title>
      </Helmet>

      <AddVolunteerPost />
    </div>
  );
}

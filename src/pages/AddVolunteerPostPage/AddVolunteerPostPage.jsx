import { Helmet } from "react-helmet";
import AddVolunteerPost from "../../components/AddOrUpdatePost/AddOrUpdatePost";

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

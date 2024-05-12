import { Helmet } from "react-helmet";
import PostDetails from "../../components/PostDetails/PostDetails";

export default function VolunteerPostDetails() {
  return (
    <div>
      <Helmet>
        <title>HelpConnect | Volunteer Post Details</title>
      </Helmet>

      <PostDetails />
    </div>
  );
}

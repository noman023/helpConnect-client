import { Button, Card } from "flowbite-react";

import cleaning from "../../assets/cleaning.jpg";
import { Link } from "react-router-dom";

export default function CardComponent() {
  return (
    <Card className="max-w-sm" imgAlt="Volunteer post image" imgSrc={cleaning}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>

      <div className="flex justify-between font-normal text-gray-700 dark:text-gray-400">
        <p>Environment service </p>
        <p>Deadline: 2024-06-28</p>
      </div>

      <Link to={"/postDetails/2"}>
        <Button color="success">View Details</Button>
      </Link>
    </Card>
  );
}

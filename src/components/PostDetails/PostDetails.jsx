import { Badge, Button, Modal } from "flowbite-react";

import cleaning from "../../assets/cleaning.jpg";
import { useState } from "react";
import BeVolunteer from "../BeVolunteer/BeVolunteer";

export default function PostDetails() {
  const [openModal, setOpenModal] = useState(false);

  const obj = {
    thumbnail: "https://example.com/image1.jpg",
    title: "Community Cleanup",
    description:
      "Join us in cleaning up the local park. Gloves and trash bags provided.",
    category: "Environment",
    location: "City Park",
    volunteersNeeded: 10,
    deadline: "2024-06-15",
    organizer: {
      name: "Community Cleaners",
      email: "cleaners@example.com",
    },
  };

  return (
    <>
      <div className="my-10 flex flex-col gap-5 md:flex-row border-2 border-green-600 p-4">
        <div className="md:w-[40%] ">
          <img src={cleaning} alt="volunteer image" className="" />
        </div>

        <div className="md:w-[60%] space-y-3 text-gray-700">
          <Badge
            color="success"
            size={"sm"}
            className="sm:w-1/4 p-1 rounded-lg text-center"
          >
            Social Service
          </Badge>

          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Food Drive for Homeless Shelter
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Collecting non-perishable food items for donation to a local
            homeless shelter.
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <p>
              <span className="text-green-600 font-bold">Deadline:</span>{" "}
              2024-07-10
            </p>
            <p>
              <span className="text-green-600 font-bold">Location:</span> City
              Park
            </p>
          </div>

          <p>
            <span className="text-green-600 font-bold">Volunteers need :</span>{" "}
            10
          </p>

          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-green-600 font-bold">Organizer:</p>

            <div>
              <p className="font-bold">Community Outreach Center</p>
              <p>volunteer@communitycenter.org</p>
            </div>
          </div>

          <Button onClick={() => setOpenModal(true)} color={"success"}>
            Be a Volunteer
          </Button>
        </div>
      </div>

      {/* modal to be a volunteer */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <p className="text-green-600 font-semibold">
            Be a Volunteer. please give you information below.
          </p>
        </Modal.Header>
        <Modal.Body>
          <BeVolunteer closeModal={setOpenModal} data={obj} />
        </Modal.Body>
      </Modal>
    </>
  );
}

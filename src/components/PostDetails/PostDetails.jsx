import { Badge, Button, Modal } from "flowbite-react";

import { useState } from "react";
import BeVolunteer from "../BeVolunteer/BeVolunteer";

export default function PostDetails({ data }) {
  const [openModal, setOpenModal] = useState(false);

  const {
    thumbnail,
    title,
    description,
    category,
    volunteersNeeded,
    deadline,
    organizer,
    location,
  } = data;

  return (
    <>
      <div className="my-10 flex flex-col gap-5 md:flex-row border-2 border-green-600 p-4">
        <div className="md:w-[40%] ">
          <img src={thumbnail} alt="volunteer image" className="" />
        </div>

        <div className="md:w-[60%] space-y-3 text-gray-700">
          <Badge
            color="success"
            size={"sm"}
            className="sm:w-1/2 p-1 rounded-lg text-center"
          >
            {category} works
          </Badge>

          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <p>
              <span className="text-green-600 font-bold">Deadline:</span>{" "}
              {deadline}
            </p>
            <p>
              <span className="text-green-600 font-bold">Location:</span> City
              {location}
            </p>
          </div>

          <p>
            <span className="text-green-600 font-bold">Volunteers need :</span>{" "}
            {volunteersNeeded}
          </p>

          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-green-600 font-bold">Organizer:</p>

            <div>
              <p className="font-bold">{organizer.name}</p>
              <p>{organizer.email}</p>
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
          <BeVolunteer closeModal={setOpenModal} data={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}

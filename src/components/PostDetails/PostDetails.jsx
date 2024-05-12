import { Badge, Button, Modal } from "flowbite-react";

import cleaning from "../../assets/cleaning.jpg";
import { useState } from "react";

export default function PostDetails() {
  const [openModal, setOpenModal] = useState(true);

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
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Request</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

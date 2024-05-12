import { Table, Button, Modal } from "flowbite-react";
import { useState } from "react";

import AddOrUpdatePost from "../AddOrUpdatePost/AddOrUpdatePost";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";

export default function TableComponent({ tableUsedIn }) {
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

  const hanldeDelete = () => {
    console.log("delete button clicked");
  };

  const hanldeCancel = () => {
    console.log("Cancel button clicked");
  };

  let buttons;

  // tableUsedIn indicate where this table component being used
  // button varies by tableUsedIn
  if (tableUsedIn === "myPost") {
    buttons = (
      <>
        <Button color={"purple"} onClick={() => setOpenModal(true)}>
          Update
        </Button>

        <Button color={"failure"} onClick={hanldeDelete}>
          Delete
        </Button>
      </>
    );
  } else if (tableUsedIn === "myRequest") {
    buttons = (
      <>
        <Button color={"failure"} onClick={hanldeCancel}>
          Cancel
        </Button>
      </>
    );
  } else {
    buttons = (
      <>
        <Link to={`/postDetails/2`}>
          <Button color={"success"}>View Details</Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="overflow-x-auto my-10">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Post Title</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <TableRow buttons={buttons} data={obj} />
          </Table.Body>
        </Table>
      </div>

      {/* modal for update post data and this will be used when TableUsedIn = myPost*/}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Post</Modal.Header>

        <Modal.Body>
          <AddOrUpdatePost closeModal={setOpenModal} data={obj} />
        </Modal.Body>
      </Modal>
    </>
  );
}

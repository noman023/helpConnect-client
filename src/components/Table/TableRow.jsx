import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";

import AddOrUpdatePost from "../AddOrUpdatePost/AddOrUpdatePost";
import Swal from "sweetalert2";
import axios from "axios";
import baseUrl from "../../baseUrl";

export default function TableRow({ data, tableUsedIn }) {
  const [openModal, setOpenModal] = useState(false);

  const hanldeDelete = () => {
    Swal.fire({
      title: "Do you want to delete this post permanently?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${baseUrl}/post/${data._id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              Swal.fire({
                icon: "success",
                title: "your post has been deleted successfully",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "warning",
              title: err.message,
            });
          });
      }
    });
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
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>
          <img src={data.thumbnail} alt="volunteer image" className="w-24" />
        </Table.Cell>

        <Table.Cell>{data.title}</Table.Cell>
        <Table.Cell>{data.location}</Table.Cell>

        <Table.Cell className="flex flex-col md:flex-row gap-3">
          {buttons}
        </Table.Cell>
      </Table.Row>

      {/* modal for update post data and this will be used when TableUsedIn = myPost*/}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <p className="text-green-600 font-semibold">Update Post</p>
        </Modal.Header>

        <Modal.Body>
          <AddOrUpdatePost closeModal={setOpenModal} data={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}

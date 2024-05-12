import { Table, Button, Modal } from "flowbite-react";

import cleaning from "../../assets/cleaning.jpg";
import AddOrUpdatePost from "../AddOrUpdatePost/AddOrUpdatePost";
import { useState } from "react";

export default function TableComponent() {
  const [openModal, setOpenModal] = useState(false);

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
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <img src={cleaning} alt="volunteer image" className="w-24" />
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>

              <Table.Cell className="flex flex-col md:flex-row gap-3">
                <Button color={"purple"} onClick={() => setOpenModal(true)}>
                  Update
                </Button>
                <Button color={"failure"}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      {/* modal for update post data */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Post</Modal.Header>

        <Modal.Body>
          <AddOrUpdatePost closeModal={setOpenModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}

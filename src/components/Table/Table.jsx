import { Table } from "flowbite-react";

import TableRow from "./TableRow";

export default function TableComponent({ tableUsedIn, data }) {
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
            {data?.length === 0 && (
              <p className="text-red-600 font-bold text-right mt-6">
                There is no data.
              </p>
            )}

            {data?.map((post) => (
              <TableRow key={post._id} data={post} tableUsedIn={tableUsedIn} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

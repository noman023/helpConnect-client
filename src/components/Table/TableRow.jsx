import { Table } from "flowbite-react";

import cleaning from "../../assets/cleaning.jpg";

export default function TableRow({ buttons, data }) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
        <img src={cleaning} alt="volunteer image" className="w-24" />
      </Table.Cell>

      <Table.Cell>{data.title}</Table.Cell>
      <Table.Cell>{data.location}</Table.Cell>

      <Table.Cell className="flex flex-col md:flex-row gap-3">
        {buttons}
      </Table.Cell>
    </Table.Row>
  );
}

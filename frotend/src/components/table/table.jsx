import { Table } from "@chakra-ui/react";

function TableUDS(props) {
  const { data } = props;

  return (
      <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Height</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Mass</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data && data.map((item) => (
          <Table.Row key={item.name}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.height}</Table.Cell>
            <Table.Cell textAlign="end">{item.mass}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    )
}

export default TableUDS;
import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item Number</Table.HeaderCell>
        <Table.HeaderCell>Item Name</Table.HeaderCell>
        <Table.HeaderCell>Item ID</Table.HeaderCell>
        <Table.HeaderCell>Year of Acquisition</Table.HeaderCell>
        <Table.HeaderCell>Model</Table.HeaderCell>
        <Table.HeaderCell>Serial Number</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Calibration Due</Table.HeaderCell>
        <Table.HeaderCell>Equipment details and Certificate</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default TableHeader;

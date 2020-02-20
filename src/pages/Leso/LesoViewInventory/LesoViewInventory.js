import React, { useEffect, useState } from 'react';
import LesoMenuBar from '../LesoMenuBar/LesoMenuBar';
import { Table, Container, Button, Header, Icon } from 'semantic-ui-react';
import TableHeader from './TableHeader/TableHeader';
import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';
import LesoViewEquipment from '../LesoViewEquipment/LesoViewEquipment';

const LesoViewInventory = ({ location, history }) => {
  const { selected, selectedCollege } = location.state;

  useEffect(() => {
    firestoreMethods
      .getwhere('equipments', 'LabName', '==', selected, 'Status', 'desc')
      .then(data => {
        console.log(data.value);
        let temp = data.value;

        setInventory(
          temp.filter(equip => {
            return equip.CollegeName === selectedCollege;
          })
        );

        // .get('equipments')
        // .then(data => {
        //   console.log(data.value);
      });
    console.log();
  }, []);

  const handleButtons = selected => {
    history.push({
      pathname: '/LesoViewEquipment',
      state: { selected }
    });
  };
  const [unfilteredInventory, setUnfilteredInventory] = useState([]);
  const [inventory, setInventory] = useState([]);

  const tableBody = inventory.map(inventory => {
    console.log(inventory);
    const { serialNumber, key } = inventory;
    return (
      <Table.Row key={serialNumber}>
        <Table.Cell>{inventory.ItemNumber}</Table.Cell>
        <Table.Cell>{inventory.ItemName}</Table.Cell>
        <Table.Cell>{inventory.ItemId}</Table.Cell>
        <Table.Cell>{inventory.Age}</Table.Cell>
        <Table.Cell>{inventory.Model}</Table.Cell>
        <Table.Cell>{inventory.SerialNumber}</Table.Cell>
        <Table.Cell>{inventory.Status}</Table.Cell>
        <Table.Cell>{inventory.CalibrationDue}</Table.Cell>
        <Table.Cell>
          <Button color='yellow' onClick={() => handleButtons(key)}>
            <p style={{ color: 'black' }}> View Details</p>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <div>
      <MenuBar />

      <Container>
        <Header as='h2' style={{ marginTop: '2%' }}>
          <Icon name='lab' />
          <Header.Content>
            {selected}
            <Header.Subheader>College of {selectedCollege}</Header.Subheader>
          </Header.Content>
        </Header>
        <Button
          onClick={() => alert('Notification Sent to the Laboratory')}
          color='red'
          style={{ marginTop: '2%' }}
        >
          Notify Lab to Calibrate Equipments
        </Button>

        <Button
          onClick={() => alert('Notification Sent to the Laboratory')}
          color='blue'
          style={{ marginTop: '2%' }}
          onClick={() =>
            alert('Request sent! Please wait for an email containing your copy')
          }
        >
          Request Copy of record
        </Button>
        <Table celled padded color='yellow'>
          <TableHeader />
          <Table.Body>{tableBody}</Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default withRouter(LesoViewInventory);

{
  /* <Table.Row>
              <Table.Cell>783478347834</Table.Cell>
              <Table.Cell>Beaker</Table.Cell>
              <Table.Cell>85985895</Table.Cell>
              <Table.Cell>2012</Table.Cell>
              <Table.Cell>2010</Table.Cell>
              <Table.Cell>8478347843783487</Table.Cell>
              <Table.Cell>uncalibrated</Table.Cell>
              <Table.Cell>November 11, 2019</Table.Cell>
              <Table.Cell>
                <Button color='yellow'>
                  <p style={{ color: 'black' }}> View Details</p>
                </Button>
              </Table.Cell>
            </Table.Row> */
}

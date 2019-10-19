import React, { useEffect, useState } from 'react';
import LesoMenuBar from '../CollegeMenuBar/CollegeMenuBar';
import {
  Button,
  Header,
  Icon,
  Segment,
  Container,
  Grid
} from 'semantic-ui-react';

import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';

const LesoViewEquipment = () => {
  //   useEffect(() => {
  //     let select = selected.toString();
  //     firestoreMethods
  //       .getwhere('equipments', 'lab_code', '==', select, 'Status', 'desc')
  //       .then(data => {
  //         // console.log(data.value);
  //         setInventory(data.value);

  //         //   .get('equipments')
  //         //   .then(data => {
  //         //     console.log(data.value);
  //       });
  //   }, []);
  const [inventory, setInventory] = useState([]);

  return (
    <div>
      <MenuBar />

      <Container>
        <Segment placeholder>
          <Header icon>
            <Icon name='pdf file outline' />
            No documents are listed for this customer.
          </Header>
          <Button primary>Add Document</Button>

          <Segment>
            <Header size='medium'>Equipment Name:</Header> Beaker
          </Segment>
          <Segment>
            <Header size='medium'>Date of Purchase:</Header> November 18, 2009
          </Segment>
          <Segment>
            <Header size='medium'>Last Calibration</Header>
          </Segment>
          <Segment>
            <Header size='medium'>Date of Purchase: </Header>November 18, 2009
          </Segment>
          <Segment>
            <Header size='medium'>Calibration Certificate status:</Header>{' '}
            External
          </Segment>
          <Segment>
            <Header size='medium'>Item Status:</Header>
            <Grid>
              <Button
                onClick={() => alert('Equipment set as calibrating!')}
                color='green'
              >
                Request for Calibration{' '}
              </Button>
              <Button
                onClick={() => alert('Equipment set as Uncalibrated!')}
                color='red'
              >
                {' '}
                Set as Uncalibrated
              </Button>
              <Button
                color='orange'
                onClick={() => alert('Equipment set as For Disposal!')}
              >
                {' '}
                Set as For Disposal
              </Button>
            </Grid>
          </Segment>
          <Segment>
            Action Taken
            <Grid>
              <Button
                color='green'
                onClick={() => alert('Equipment set as calibrating!')}
              >
                Set as 'calibrating'{' '}
              </Button>
              <Button
                color='yellow'
                onClick={() => alert('Equipment set as Under Maintenance!')}
              >
                {' '}
                Set as 'Under Maintenance'
              </Button>
              <Button
                color='red'
                onClick={() => alert('Equipment set as For Pull out!')}
              >
                {' '}
                Set as 'For Pull Out'
              </Button>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    </div>
  );
};

export default withRouter(LesoViewEquipment);

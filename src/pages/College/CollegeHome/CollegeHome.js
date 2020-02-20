import React, { useEffect, useState } from 'react';
import { realtimeDatabase } from '../../../firebase/firebase';
import {
  Grid,
  Container,
  Card,
  Feed,
  Icon,
  Segment,
  Button,
  Header,
  Image,
  Divider,
  Item
} from 'semantic-ui-react';
import HeaderComponent from '../../../components/headerComponent';
import CollegeMenuBar from '../CollegeMenuBar/CollegeMenuBar';
import { withRouter, Redirect } from 'react-router';
import lesoLogo from '../../../assets/images/logo.jpg';
const CollegeHome = ({ history, location }) => {
  // const { signedInDisplayName } = location.state;
  useEffect(() => {
    realtimeDatabase
      .getWhere('/Laboratories', 'CollegeName', 'Science')
      .then(data => {
        setLaboratories(data.values);
      });
  }, []);

  const [laboratories, setLaboratories] = useState([]);
  const handleButtons = selected => {
    history.push({
      pathname: '/CollegeViewInventory',
      state: { selected }
    });
  };
  // const segmentDisplay = laboratories.map(laboratory => {
  //   const { name, uid } = laboratory;
  //   return (
  //     <Segment
  //       key={uid}
  //       color='yellow'
  //       size='massive'
  //       onClick={() => handleButtons(name)}
  //       className='segmentBanner'
  //     >
  //       <Header as='h2' textAlign='center' style={{ color: 'black' }}>
  //         {laboratory.name}
  //       </Header>
  //     </Segment>
  //   );
  // });

  const Cards = laboratories.map(laboratory => {
    const { name, code, uid } = laboratory;
    return (
      <Card
        onClick={() => handleButtons(name)}
        color='yellow'
        key={uid}
        style={{ cursor: 'pointer' }}
      >
        <Card.Content>
          <Image src={laboratory.image} size='large' centered />
          {/* <Icon name='lab' size='massive' /> */}
          <Card.Header style={{ marginTop: '2%' }} textAlign='center'>
            {name}
          </Card.Header>

          <Card.Description style={{ fontWeight: 'bold' }}>
            Uncalibrated Equipments Found
          </Card.Description>
          <Card.Description style={{ fontWeight: 'bold' }}>
            Please Calibrate before: December 10, 2019
          </Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    );
  });
  return (
    <div>
      <div>
        <CollegeMenuBar />;
        <Container>
          <div style={{ marginTop: '2%' }}></div>
          <Segment textAlign='center'>
            <Header icon>
              {/* <Image style={{ width: '140px' }} src={lesoLogo} fluid /> */}
              <Header as='h2' textAlign='center'>
                <Icon name='lab' />
                <Header.Content>
                  Your Laboratories
                  <Header.Subheader>
                    Select a laboratory to view its inventory
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Header>
          </Segment>
          <Button
            className='viewButton'
            color='yellow'
            icon
            labelPosition='left'
            onClick={() => history.push('CollegeAddLaboratory')}
          >
            <p style={{ color: 'black' }}> Add Laboratory</p>
          </Button>
          {/* {segmentDisplay} */}
          <Card.Group itemsPerRow={4}>{Cards}</Card.Group>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(CollegeHome);

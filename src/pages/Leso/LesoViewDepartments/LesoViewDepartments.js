import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  Button,
  Icon,
  Container,
  Segment,
  Header,
  Image
} from 'semantic-ui-react';
import { realtimeDatabase } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';
import './LesoViewDepartments.css';

// not pushing CRS college as array
const LesoViewColleges = ({ history, location }) => {
  const { selected } = location.state;
  useEffect(() => {
    realtimeDatabase
      .getWhere('/Departments', 'college', selected)
      .then(data => {
        setDepartments(data.values);
      });
  }, []);

  const [departments, setDepartments] = useState([
    {
      code: '',
      col_code: null,
      col_id: '',
      name: '',
      uid: ''
    }
  ]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const handleButtons = selected => {
    history.push({
      pathname: '/LesoViewLaboratories',
      state: { selected }
    });
  };

  console.log(departments);

  // const segmentDisplay = departments.map(department => {
  //   const { name, uid, code } = department;
  //   return (
  //     <Segment
  //       key={uid}
  //       color='yellow'
  //       size='massive'
  //       onClick={() => handleButtons(name)}
  //       className='segmentBanner'
  //     >
  //       <Header as='h2' textAlign='center' style={{ color: 'black' }}>
  //         {department.name}
  //       </Header>
  //     </Segment>
  //   );
  // });

  const Cards = departments.map(department => {
    const { name, code, uid } = department;
    return (
      <Card
        onClick={() => handleButtons(name)}
        color='yellow'
        key={uid}
        style={{ cursor: 'pointer' }}
      >
        <Card.Content>
          <Image src={department.image} size='large' centered />
          <Card.Header style={{ marginTop: '2%' }} textAlign='center'>
            {department.name}
          </Card.Header>
          <Card.Description>10 equipments uncalibrated</Card.Description>
          <Card.Description>5 equipments for Review</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    );
  });
  return (
    <div>
      <MenuBar />
      <Container>
        <Segment textAlign='center'>
          <Header icon>
            {/* <Image style={{ width: '140px' }} src={lesoLogo} fluid /> */}
            {/* <Image
              src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
              wrapped
              ui={false}
            /> */}
            <Header as='h2' textAlign='center'>
              <Icon name='lab' />
              <Header.Content>
                {selected} Departments
                <Header.Subheader>
                  Select a department to view their laboratories
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Header>
        </Segment>
        <Card.Group itemsPerRow={4}>{Cards}</Card.Group>
      </Container>
    </div>
  );
};

export default withRouter(LesoViewColleges);

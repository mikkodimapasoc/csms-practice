import React, { useState, useEffect } from 'react';
import { Grid, Card, Button, Icon, Container } from 'semantic-ui-react';
import { realtimeDatabase } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';
import './LesoViewDepartments.css';

// not pushing CRS college as array
const LesoViewColleges = ({ history, location }) => {
  const { selected } = location.state;
  useEffect(() => {
    realtimeDatabase
      .getWhere('/Departments', 'col_code', selected)
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

  const Cards = departments.map(department => {
    const { code, uid } = department;
    return (
      <Card color='yellow' key={uid}>
        <Card.Content>
          {/* <Image floated='right' size='mini' src={logo} /> */}
          <Card.Header>{department.name}</Card.Header>
          <Card.Meta> Uncalibrated Equipments inside!</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button
              className='viewButton'
              color='yellow'
              icon
              labelPosition='left'
              onClick={() => handleButtons(code)}
            >
              <Icon name='lab' className='viewIcon' />
              <p className='viewIcon'>View</p>
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  });
  return (
    <div>
      <MenuBar />
      <Container>
        <div style={{ marginTop: '2%' }}>
          <Card.Group>{Cards}</Card.Group>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(LesoViewColleges);

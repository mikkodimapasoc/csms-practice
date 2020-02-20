import React, { useState, useEffect } from 'react';
import { Grid, Card, Button, Icon, Container, Image } from 'semantic-ui-react';
import { realtimeDatabase } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';
import logo from '../../../assets/images/logo.jpg';
import './LesoViewColleges.css';
const LesoViewColleges = ({ history }) => {
  useEffect(() => {
    realtimeDatabase.get('/Colleges').then(data => {
      setColleges(data.values);
    });
  }, []);
  const [colleges, setColleges] = useState([]);

  const [selectedCollege, setSelectedCollege] = useState();

  const handleButtons = selected => {
    // setSelectedCollege(selected);
    // state = passed state to the next component
    history.push({
      pathname: '/LesoViewDepartments',
      state: { selected }
    });
  };

  const Cards = colleges.map(college => {
    const { code, uid } = college;
    return (
      <Card color='yellow' key={uid}>
        <Card.Content>
          <Image src={logo} size='small' />
          <Card.Header>{college.name}</Card.Header>
          <Card.Meta> Uncalibrated Equipments inside!</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button
              className='viewButton'
              onClick={() => handleButtons(code)}
              icon
              labelPosition='left'
              color='yellow'
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

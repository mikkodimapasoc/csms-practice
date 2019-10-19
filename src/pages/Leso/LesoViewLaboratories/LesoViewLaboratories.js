import React, { useEffect, useState } from 'react';
import { Grid, Card, Button, Icon, Container } from 'semantic-ui-react';
import { realtimeDatabase } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';
const LesoViewLaboratories = ({ history, location }) => {
  const { selected } = location.state;
  useEffect(() => {
    realtimeDatabase
      .getWhere('/Laboratories', 'dept_code', selected)
      .then(data => {
        setLaboratories(data.values);
      });
  }, []);

  const [laboratories, setLaboratories] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const handleButtons = selected => {
    history.push({
      pathname: '/LesoViewInventory',
      state: { selected }
    });
  };

  console.log(laboratories);
  const Cards = laboratories.map(laboratory => {
    const { code, uid } = laboratory;
    return (
      <Card color='yellow' key={uid}>
        <Card.Content>
          {/* <Image floated='right' size='mini' src={logo} /> */}
          <Card.Header>{laboratory.name}</Card.Header>
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
export default withRouter(LesoViewLaboratories);

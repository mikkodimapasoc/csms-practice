import React, { useEffect, useState } from 'react';
import { Grid, Card, Button, Icon, Container } from 'semantic-ui-react';
import { realtimeDatabase } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
const CollegeViewLaboratories = ({ history }) => {
  useEffect(() => {
    realtimeDatabase.getWhere('/Laboratories', 'dept_code', 1001).then(data => {
      setLaboratories(data.values);
    });
  }, []);

  const [laboratories, setLaboratories] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const handleButtons = selected => {
    history.push({
      pathname: '/CollegeViewInventory',
      state: { selected }
    });
  };
  const redirectToAdd = () => {
    history.push('/CollegeAddLaboratory');
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
          <Button
            className='viewButton'
            color='yellow'
            icon
            labelPosition='left'
            onClick={redirectToAdd}
          >
            <p style={{ color: 'black' }}>Request to Add Laboratory</p>
          </Button>
        </div>
        <div style={{ marginTop: '2%' }}>
          {' '}
          <Card.Group>{Cards}</Card.Group>
        </div>
      </Container>
    </div>
  );
};
export default withRouter(CollegeViewLaboratories);

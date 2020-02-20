import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  Button,
  Icon,
  Container,
  Segment,
  Header
} from 'semantic-ui-react';
import { realtimeDatabase } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../HeadMenuBar/HeadMenuBar';
const HeadViewLaboratories = ({ history, location }) => {
  const { selected } = location.state;
  useEffect(() => {
    realtimeDatabase
      .getWhere('/Laboratories', 'department', selected)
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
  const segmentDisplay = laboratories.map(laboratory => {
    const { name, uid, code } = laboratory;
    return (
      <div className='segmentDiv'>
        <Segment
          key={uid}
          color='yellow'
          size='massive'
          onClick={() => handleButtons(name)}
          className='segmentBanner'
        >
          <Header as='h2' textAlign='center' style={{ color: 'black' }}>
            {laboratory.name}
          </Header>
        </Segment>
      </div>
    );
  });
  // const Cards = laboratories.map(laboratory => {
  //   const { code, uid } = laboratory;
  //   return (
  //     <Card color='yellow' key={uid}>
  //       <Card.Content>
  //         {/* <Image floated='right' size='mini' src={logo} /> */}
  //         <Card.Header>{laboratory.name}</Card.Header>
  //         <Card.Meta> Uncalibrated Equipments inside!</Card.Meta>
  //       </Card.Content>
  //       <Card.Content extra>
  //         <div className='ui two buttons'>
  //           <Button
  //             className='viewButton'
  //             color='yellow'
  //             icon
  //             labelPosition='left'
  //             onClick={() => handleButtons(code)}
  //           >
  //             <Icon name='lab' className='viewIcon' />
  //             <p className='viewIcon'>View</p>
  //           </Button>
  //         </div>
  //       </Card.Content>
  //     </Card>
  //   );
  // });

  return (
    <div>
      <MenuBar />
      <Container>
        <Segment textAlign='center'>
          <Header icon>
            {/* <Image style={{ width: '140px' }} src={lesoLogo} fluid /> */}
            <Header as='h2' textAlign='center'>
              <Icon name='lab' />
              <Header.Content>
                {selected} Laboratories
                <Header.Subheader>
                  Select a laboratory to view its inventory
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Header>
        </Segment>
        {segmentDisplay}
      </Container>
    </div>
  );
};
export default withRouter(HeadViewLaboratories);

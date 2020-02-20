import React, { useEffect, useState } from 'react';
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
const LesoViewLaboratories = ({ history, location }) => {
  const { selected } = location.state;
  useEffect(() => {
    setSelectedCollege(selected);
    realtimeDatabase
      .getWhere('/Laboratories', 'CollegeName', selected)
      .then(data => {
        setLaboratories(data.values);
      });
  }, []);

  const [laboratories, setLaboratories] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const handleButtons = selected => {
    history.push({
      pathname: '/LesoViewInventory',
      state: { selected, selectedCollege }
    });
  };

  console.log(laboratories);
  // const segmentDisplay = laboratories.map(laboratory => {
  //   const { name, uid, code } = laboratory;
  //   return (
  //     <div className='segmentDiv'>
  //       <Segment
  //         key={uid}
  //         color='yellow'
  //         size='massive'
  //         onClick={() => handleButtons(name)}
  //         className='segmentBanner'
  //       >
  //         <Header as='h2' textAlign='center' style={{ color: 'black' }}>
  //           {laboratory.name}
  //         </Header>
  //       </Segment>
  //     </div>
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
            Department In Charge: Chemistry
          </Card.Description>
          <Card.Description style={{ fontWeight: 'bold' }}>
            Department Head: Mr. Carlo Olayta
          </Card.Description>
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
        <Card.Group itemsPerRow={4}>{Cards}</Card.Group>
      </Container>
    </div>
  );
};
export default withRouter(LesoViewLaboratories);

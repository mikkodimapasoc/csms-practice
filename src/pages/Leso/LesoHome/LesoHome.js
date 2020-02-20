import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import {
  Grid,
  Card,
  Feed,
  Container,
  Icon,
  Segment,
  Header,
  Image
} from 'semantic-ui-react';
import LesoMenuBar from '../LesoMenuBar/LesoMenuBar';
import { auth, realtimeDatabase } from '../../../firebase/firebase';
import { withRouter } from 'react-router';
import lesoLogo from '../../../assets/images/logo.jpg';
import CrsLogo from '../../../assets/images/Crs.jpg';
import PharmacyLogo from '../../../assets/images/Pharmacy.jpg';
import ScienceLogo from '../../../assets/images/Science.jpg';
import './LesoHome.css';
import { AuthContext } from '../../../context/Auth';
const LesoHome = props => {
  const { currentUser } = useContext(AuthContext);
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    realtimeDatabase.get('/Colleges').then(data => {
      setColleges(data.values);
    });
  }, []);

  const handleButtons = selected => {
    // setSelectedCollege(selected);
    // state = passed state to the next component
    props.history.push({
      pathname: '/LesoViewLaboratories',
      state: { selected }
    });
  };

  const segmentDisplay = colleges.map(college => {
    const { name, uid } = college;
    return (
      <Segment
        key={uid}
        color='yellow'
        size='massive'
        onClick={() => handleButtons(name)}
        className='segmentBanner'
      >
        <Header as='h2' textAlign='center' style={{ color: 'black' }}>
          {college.name}
        </Header>
      </Segment>
    );
  });
  return (
    <div>
      <LesoMenuBar />;
      {/* <div>
        <Segment textAlign='center'>
          <Header as='h2' textAlign='center'>
            <Icon name='settings' />
            <Header.Content>
              
              <Header.Subheader>
                Select a College to view their departments
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Segment>
        <Container>{segmentDisplay}</Container>
      </div> */}
      <Container>
        <Segment textAlign='center'>
          <Header icon>
            {/* <Image style={{ width: '50%' }} src={lesoLogo} centered /> */}
            <Header as='h2' textAlign='center'>
              <Icon name='lab' />
              <Header.Content>
                Leso Colleges
                <Header.Subheader>
                  <p style={{ fontWeight: 'bold' }}>
                    Select a college to view their Laboratories
                  </p>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Header>
        </Segment>
        {/* {segmentDisplay} */}

        <Segment
          color='yellow'
          size='massive'
          onClick={() => handleButtons('Science')}
          className='segmentBanner'
        >
          <Image src={ScienceLogo} size='tiny' centered />
          <Header as='h2' textAlign='center' style={{ color: 'black' }}>
            College of Science
          </Header>
        </Segment>

        {/* ----------------- */}

        <Segment
          color='yellow'
          size='massive'
          onClick={() => handleButtons('Crs')}
          className='segmentBanner'
        >
          <Image src={CrsLogo} size='tiny' centered />
          <Header as='h2' textAlign='center' style={{ color: 'black' }}>
            College of Rehabilitation Sciences
          </Header>
        </Segment>
        {/* ------------------ */}

        <Segment
          color='yellow'
          size='massive'
          onClick={() => handleButtons('Pharmacy')}
          className='segmentBanner'
        >
          <Image src={PharmacyLogo} size='tiny' centered />
          <Header as='h2' textAlign='center' style={{ color: 'black' }}>
            Faculty of Pharmacy
          </Header>
        </Segment>
      </Container>
    </div>
  );
};

export default withRouter(LesoHome);

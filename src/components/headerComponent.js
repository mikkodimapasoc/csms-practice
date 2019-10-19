import React from 'react';
import { Segment, Image, Header, Grid, Icon } from 'semantic-ui-react';

import leso from '../assets/images/logo.jpg';
import ust from '../assets/images/ustlogo.png';

const HeaderComponent = () => (
  <div>
    <Segment attached='top' color='yellow'>
      {/* <Grid.Column>
        <Image src={logo} size='large' />    
        <Image className="lesoLogo" src={leso} size='tiny' /> 
      </Grid.Column> */}

      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src={ust} size='large' className='ustPic' />
          </Grid.Column>
          {/* <Grid.Column>
            <Header as='h1'>Welcome User!!!</Header>
          </Grid.Column>
          <Grid.Column>
            <Image src={leso} size='tiny' className='ustPic' />
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default HeaderComponent;

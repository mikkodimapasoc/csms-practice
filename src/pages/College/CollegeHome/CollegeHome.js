import React from 'react';
import { Grid, Container, Card, Feed, Icon } from 'semantic-ui-react';
import HeaderComponent from '../../../components/headerComponent';
import CollegeMenuBar from '../CollegeMenuBar/CollegeMenuBar';
const CollegeHome = () => {
  return (
    <div>
      <div>
        <CollegeMenuBar />;
        <Container>
          <Grid className='rowCards'>
            <Grid.Row centered columns={3}>
              <Grid.Column>
                <Card color='yellow'>
                  <Card.Content>
                    <Card.Header>Notifications</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Icon name='exclamation' size='big' />
                        <Feed.Content>
                          <Feed.Date content='1 day ago' />
                          <Feed.Summary>
                            Notifications Sent! Laboratory 2 of Faculty of
                            Pharmacy
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                      <Feed.Event>
                        <Icon name='exclamation' size='big' />
                        <Feed.Content>
                          <Feed.Date content='3 days ago' />
                          <Feed.Summary>
                            Notifications Sent! Laboratory 2 of Faculty of CRS
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                      <Feed.Event>
                        <a>See more</a>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card color='yellow'>
                  <Card.Content>
                    <Card.Header>Calibration Summary</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Icon name='exclamation' size='big' />
                        <Feed.Content>
                          <Feed.Date content='1 day ago' />
                          <Feed.Summary>
                            5 uncalibrated Equipments
                            <a> - College of Science</a>
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                      <Feed.Event>
                        <Icon name='exclamation' size='big' />
                        <Feed.Content>
                          <Feed.Date content='3 days ago' />
                          <Feed.Summary>
                            2 equipments On process <a>Faculty of Pharmacy</a>
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                      <Feed.Event>
                        <a>See more</a>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card color='yellow'>
                  <Card.Content>
                    <Card.Header>Calibration Dues for the Month</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Icon name='exclamation' size='big' />
                        <Feed.Content>
                          <Feed.Date content='1 day ago' />
                          <Feed.Summary>
                            Biology Laboratory <a> November 1, 2019</a>
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                      <Feed.Event>
                        <Icon name='exclamation' size='big' />
                        <Feed.Content>
                          <Feed.Date content='3 days ago' />
                          <Feed.Summary>
                            Physics Laboratory <a>November 1, 2019</a>
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                      <Feed.Event>
                        <a>See more</a>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default CollegeHome;

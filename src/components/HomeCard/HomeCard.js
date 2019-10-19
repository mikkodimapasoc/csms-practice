import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';
const HomeCard = ({ header }) => {
  return (
    <Card color='yellow' inverted>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Icon name='exclamation' size='big' />
            <Feed.Content>
              <Feed.Date content='1 day ago' />
              <Feed.Summary>
                3 equipments <a>Calibrated</a> - Pharmacy Laboratory
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );
};

export default HomeCard;

import React from 'react';
import axios from 'axios';
import { Card, Divider, Image} from 'semantic-ui-react'
class MyCats extends React.Component {
  state = { cats: [], }
  componentDidMount() {
    axios.get("/api/my_cats")
      .then( res => {
        this.setState({ cats: res.data, })
      })
  }
  render() {
    return (
      <Card.Group itemsPerRow={4}>
        { this.state.cats.map( cat => (
          <Card key={cat.id}>
            <Image src={cat.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>{cat.name}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )
  }
}
export default MyCats;

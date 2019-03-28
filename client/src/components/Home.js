import React from 'react';
import { Header, Card, Image, Icon, Button, } from 'semantic-ui-react';
import axios from 'axios';
import { Link, } from 'react-router-dom'
class Home extends React.Component {
  state = { cats: [], }
  componentDidMount() {
    axios.get("/api/cats")
      .then( res => {
        this.setState({ cats: res.data, })
      })
  }
  sample = () => {
    const { cats, } =  this.state;
    if (cats.length) {
      const index = Math.floor(Math.random() * cats.length);
      return cats[index]
    } else {
      return null;
    }
  }
  downvote = (id) => {
    const { cats, } = this.state;
    this.setState({ cats: cats.filter( c => c.id !== id)})
  }
  upvote = (id) => {
    const { cats, } = this.state;
    axios.put(`/api/cats/${id}`)
      .then( () => this.setState({ cats: cats.filter( c => c.id !== id ), }) )
  }
  render() {
    const cat = this.sample();
    if (cat) {
      return (
        <div>
          <br/>
          <Header as="h1">Cat Tinder</Header>
          <br/>
          <Card>
            <Image src={cat.avatar} />
            <Card.Content>
              <Card.Header>{cat.name}</Card.Header>
              <Card.Description>{cat.breed}</Card.Description>
              <Card.Meta>{cat.registry}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={ () => this.downvote(cat.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="blue" icon basic onClick={ () => this.upvote(cat.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to='/my_cats'>
            <Button>My Cats</Button>
          </Link>
        </div>
      )
    } else {
      return <Header as="h1">There are no more cats in your area!</Header>
    }
  }
}
export default Home;
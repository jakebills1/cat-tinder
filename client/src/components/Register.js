import React from 'react'
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "", }
  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation,} = this.state;
    const { auth: { handleRegister, }, history, } =  this.props;
    if (password === passwordConfirmation){
      handleRegister({ email, password, passwordConfirmation, }, history);
    } else {
      alert("password dont match")
    }
  }
  render() {
    const { email, password, passwordConfirmation, } = this.state;
    return (
      <Segment basic>
        <Header as="h1">Registration Form</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email:"
            name="email"
            required
            autoFocus
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password:"
            name="password"
            required
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation:"
            name="passwordConfirmation"
            required
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            onChange={this.handleChange}
            type="password"
          />
          <Segment textAlign="center" basic>
            <Form.Button primary type="submit">Submit</Form.Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}
const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => (
      <Register {...props} auth={auth} />
    )}
  </AuthConsumer>
)
export default ConnectedRegister;
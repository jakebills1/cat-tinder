import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider'
class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }} = this.props;
    if (user) {
      // user is signed in
      return (
        <Menu.Menu position="right">
          <Menu.Item
          name="Logout"
          onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        // user is not signed in
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item 
              name="Login"
            />
          </Link>
          <Link to="/register">
            <Menu.Item 
              name="Register"
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu secondary pointing>
          <Link to="/">
            <Menu.Item name="Home" />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    {auth => (
      <Navbar { ...props} auth={auth} />
    )}
  </AuthConsumer>
)
export default withRouter(ConnectedNavbar);
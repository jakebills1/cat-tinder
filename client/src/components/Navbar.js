import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Menu secondary pointing>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
        </Menu>
      </div>
    )
  }
}
export default Navbar;
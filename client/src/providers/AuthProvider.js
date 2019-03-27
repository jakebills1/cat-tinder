import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, }

  handleRegister = () => {
    debugger    
  }

  handleLogin = () => {
    debugger
  }

  handleLogout = () => {
    debugger
  }
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state, 
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        authenticated: this.state.user !== null,
        setUser: (user) => this.setState({ user, }),
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}


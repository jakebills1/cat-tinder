import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, }

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, })
        // devise sends back the response with an extra data object to traverse, so res.data.data gets the user info
        history.push("/")
      })
  }

  handleLogin = (user, history, ) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, })
        history.push("/")
      })
     
  }

  handleLogout = (history) => {
    // debugger
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push("/login")
      })
      .catch( err => {
        alert("didnt work")
      })
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


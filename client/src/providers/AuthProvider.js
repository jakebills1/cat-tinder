import React from 'react';
import axios from 'axios';


//creates context, gives access to consumer and provider. consumer allows api calls to be made accross the application
const AuthContext = React.createContext();
//  export consumer
export const AuthConsumer = AuthContext.Consumer;

// create and export provider. determines what data is being provided to the application
export class AuthProvider extends React.Component {
  state = { user: null, }

  handleRegister = (user, history) => {
    // creates user in the db, and logs them in. user is the info from the regustration form
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, })
        // devise sends back the response with an extra data object to traverse, so res.data.data gets the user info
        history.push("/")
      })
  }

  handleLogin = (user, history, ) => {
    // devise will see is the user info sent matches that in the db, and sends the user info back as a response, which we user for state
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, })
        history.push("/")
      })
     
  }

  handleLogout = (history) => {
    // invalidates the token, destroying the user session. sets user to null
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
      // what data is being provided to components consuming the provider
      <AuthContext.Provider value={{
        ...this.state, 
        // user
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        // these functions affect state and make axios calls
        authenticated: this.state.user !== null,
        // quick way to check if the user is authenticated
        setUser: (user) => this.setState({ user, }),
        // function to set the state to the user

      }}>
        {this.props.children}
          {/* renders the children of auth provider, ie. everything in the app */}
      </AuthContext.Provider>
    )
  }
}


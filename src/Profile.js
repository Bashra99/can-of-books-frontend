import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return <div>
       <p> Welcome {user.name}</p>
       <p>  Email {user.email}</p>
       <p> Nice picture {user.name} </p>
       <img  src={user.picture} alt="{user.name}"/>   

        </div>;
  }
}

export default withAuth0(Profile);
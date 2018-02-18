import React, { Component } from 'react';
import * as blockstack from 'blockstack';
import { BLOCKSTACK_HANDLER } from 'blockstack/lib/utils';

class Blockstack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
      person: false
    }

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    let isSignedIn = this.checkSignedInStatus();
    if (isSignedIn) {
      const person = this.loadPerson();
      this.setState({
        isSignedIn: true,
        person: person
      });
    }
  }

  checkSignedInStatus() {
    if (blockstack.isUserSignedIn()) {
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin;
      })
      return false;
    }
    return false;
  }

  loadPerson() {
    let profile = blockstack.loadUserData().profile;

    return new blockstack.Person(profile);
  }

  handleSignIn(event) {
    event.preventDefault();
    blockstack.redirectToSignIn();
  }

  handleSignOut(event) {
    event.preventDefault();
    blockstack.signUserOut(window.location.href);
  }

  render() {
    let blockButton = null;
    if (!this.state.isSignedIn || !this.state.person) {
      blockButton = (
        <button onClick={this.handleSignIn}>
          Sign-in with Blockstack
        </button>
      );
    }
    else {
      const name = this.state.person.name();
      blockButton = (
        <span>
          <p>You are signed into Blockstack! I will call you by your previously given name, {name}.</p>
          <button onClick={this.handleSignOut}>
            Sign-out
          </button>
        </span>
      );
    }
    return (
      <div className="blockstack">
        {blockButton}
      </div>
    )
  }
}

export default Blockstack;
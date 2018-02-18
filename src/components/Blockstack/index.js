import React, { Component } from 'react';
import * as blockstack from 'blockstack';
import { BLOCKSTACK_HANDLER } from 'blockstack/lib/utils';

class Blockstack extends Component {
  constructor(props) {
    super(props);

    let isSignedIn = this.checkSignedInStatus();
    console.log(isSignedIn);

    this.state = {
      isSignedIn,
      person: isSignedIn && this.loadPerson()
    }

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  checkSignedInStatus() {
    console.log('checking signin status');
    if (blockstack.isUserSignedIn()) {
      // showProfile(profile)
      console.log('got signing true');
      return true;
    } else if (blockstack.isSignInPending()) {
      console.log('signin pending?');
      blockstack.handlePendingSignIn().then(function(userData) {
        window.location = window.location.origin;
      })
      return false;
    }
    console.log('nope no signin');
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
    if (!this.state.isSignedIn) {
      console.log('not signed in, rendering sign in button');
      blockButton = (
        <button onClick={this.handleSignIn}>
          Sign-in with Blockstack
        </button>
      );
    }
    else {
      console.log('signed in, rendering sign out button');
      console.log(this.state.person);
      const name = this.state.person.name();
      console.log(name);
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
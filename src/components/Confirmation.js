import React, { Component } from 'react';

class Confirmation extends Component {

  render() {
    return (
      <div className='user-form'>
        <h2 id='intro-text'>Your ticket is on the chain!</h2>
        <h3>Thank you for your purchase <span role='img' aria-label='Cool Emoji'>😎</span></h3>
        <p>A record of your transaction has been permanently<br />stored on the blockchain and <a href='http://localhost:9292'>can be viewed here</a></p>
      </div>
    );
  }
}

export default Confirmation;

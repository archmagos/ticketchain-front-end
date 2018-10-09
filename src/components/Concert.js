import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// These constants are temporary measures and will eventually be replaced
const MAXIMUM_PRICE = 600;
const SENDER_ADDRESS = '61709b365969c742160b4a365a9d43216b118ad5b626d07b81fedd4f88da9943';
const RECEIVER_ADDRESS = '525410238f3386eecd7e7d4682e124b193b41ddc3ff9d36aade4406f07a83e2a';

class Concert extends Component {

  handleClick(e) {
    e.preventDefault();

    fetch('http://localhost:9292/transaction', {
      method: 'POST',
      body: JSON.stringify(
        {
          'params':
            {
              'sender': SENDER_ADDRESS,
              'receiver': RECEIVER_ADDRESS,
              'name': this.props.concert.displayName,
              'value': this.getPrice(this.props.concert.displayName)
            }
        })
    });
    this.props.history.push('/confirmation');
  }

  getPrice(name) {
    var re = name.length * 11 + name.charCodeAt(0) % MAXIMUM_PRICE;
    return re;
  }

  getDate(date) {
    var newDate = new Date(date);
    var re = newDate.toLocaleDateString('en-US');
    return re;
  }

  render() {
    return (
      <div className='concert'>
        <p id='concert-title'>{this.props.concert.displayName.substr(0, 30)}...</p>
        <p id='concert-location'>Location: {this.props.concert.location.city}</p>
        <p id='concert-date'>Date: {this.getDate(this.props.concert.start.date)}</p>
        <p id='concert-price'>Price: {this.getPrice(this.props.concert.displayName)} BKH</p>
        <Button id='concert-button' onClick={(e) => this.handleClick(e)}>
          BUY!
        </Button>
      </div>
    );
  }
}

export default withRouter(Concert);

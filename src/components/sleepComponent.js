import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSleep extends Component {
  constructor(props) {
    super(props);

    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      duration: 0,

    }
  }

 

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

 

  onSubmit(e) {
    e.preventDefault();

    const sleep = {

      duration: this.state.duration,

    }

    console.log(sleep);

    axios.post('http://localhost:5000/sleep/add', sleep)
      .then(res => console.log(res.data));

  }

  render() {
    return (
    <div>
      <h3>Create New Sleep Log</h3>
      <form onSubmit={this.onSubmit}>
      
        <div className="form-group">
          <label>Duration (in hours): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
   
        <div className="form-group">
          <input type="submit" value="Create Sleep Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
import React, { Component } from 'react';

import axios from 'axios';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  componentDidMount() {
    const { test } = this.state;

    axios.get('http://localhost:5000/api/test/test').then(response => {
      this.setState(() => ({
        test: response.data,
      }));
      console.log(test);
    });
  }

  render() {
    const { test } = this.state;
    return (
      <div>
        Test Page
        <p>{test}</p>
      </div>
    );
  }
}

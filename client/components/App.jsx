import React from 'react';

export default class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      sup:'wat'
    };

  }

  render() {
    return (
      <div  className="app">
        WATTUP!!!
      </div>
    );
  }
}

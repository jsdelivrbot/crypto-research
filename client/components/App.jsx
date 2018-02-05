import React from 'react';

export default class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      sup:'wat'
    };

    console.log('App constructor.');
  }

  render() {
    return (
      <div  className="app">
        WATUP
        <img src="img/doggo.gif" />
      </div>
    );
  }
}

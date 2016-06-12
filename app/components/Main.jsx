var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io-client');
var Header = require('Header');

var Main = React.createClass({
  getInitialState: function () {
    return {
      status: 'disconnected'
    }
  },
  connect: function () {
    this.setState({status: 'connected'});
  },
  componentWillMount: function () {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  },
  render: function () {
    return (
      <div>
        <Header title="New Header" status={this.state.status}></Header>
      </div>
    );
  }
});

module.exports = Main;

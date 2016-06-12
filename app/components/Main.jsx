var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io-client');
var Header = require('Header');

var Main = React.createClass({
  getInitialState: function () {
    return {
      status: 'disconnected',
      title: ''
    }
  },
  componentWillMount: function () {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome);
  },
  disconnect: function () {
    this.setState({status: 'disconnected'});
  },
  connect: function () {
    this.setState({status: 'connected'});
  },
  welcome: function (serverState) {
    this.setState({title: serverState.title})
  },
  render: function () {
    return (
      <div>
        <Header title={this.state.title} status={this.state.status}></Header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;

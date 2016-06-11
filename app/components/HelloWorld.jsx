var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io-client');
var HelloWorld = React.createClass({
  render: function () {
    return (
      <h1>Hello World from React</h1>
    );
  },
	componentWillMount: function () {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
	},
	connect: function () {
		alert('Connected: ' + this.socket.id);
	}
});

module.exports = HelloWorld;

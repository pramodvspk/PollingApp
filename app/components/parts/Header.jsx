var React = require('react');
var PropTypes = React.PropTypes;

var Header = React.createClass({
  getDefaultProps: function () {
    return {
      status: 'Disconnected'
    }
  },
  render: function () {
    return(
        <header className="row">
          <div className="col-xs-10">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col-xs-2">
            <span id="connection-status" className={this.props.status}></span>
          </div>
        </header>

    );
  }

});


Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

module.exports = Header;

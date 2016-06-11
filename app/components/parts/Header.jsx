var React = require('react');
var PropTypes = React.PropTypes;

function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

module.exports = Header;

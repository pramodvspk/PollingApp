var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Speaker = require('Speaker');
var Board = require('Board');
var Audience = require('Audience');


// var routes = (
//   <Route handler={Main}>
//     <DefaultRoute handler={Audience}></DefaultRoute>
//     <Route name="speaker" path="speaker" handler={Speaker}></Route>
//     <Route name="board" path="board" handler={Board}></Route>
//   </Route>
// );
//
// ReactDOM.render((<Router>{ route }</Router>), document.getElementById('react-container'));

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Audience}></IndexRoute>
      <Route path="speaker" component={Speaker}></Route>
      <Route path="board" component={Board}></Route>
    </Route>
  </Router>,
  document.getElementById('react-container')
);

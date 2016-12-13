var React = require('react');
var Main = require('../components/Main');
var Profile = require('../components/Profile')
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
<Route path="/" component={Main}>
	<Route path="profile/:username" component={Profile}/>	
	<IndexRoute component ={Home}/>
</Route>
)

var React = require('react');

var Repos = React.createClass({
	render:function(){
		return(
			<div> 
				<p> Repos </p>
				<p> {this.props.username}</p>
			 </div>
		)
	}
});

module.exports = Repos;
var React = require('react');

var Notes = React.createClass({
	render:function(){
		return(
			<div> {this.props.notes} </div>
		)
	}
});

module.exports = Notes;
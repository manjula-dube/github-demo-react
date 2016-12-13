var React = require('react');
var ReactDom = require('react-dom');

var Profile = React.createClass({
	 getInitialState:function(){
	 	return{
	 		notes:[],
	 		bio:{},
	 		repo:[]
	 	}
	 },

	render:function(){
		console.log(this.props);
		return(
			<div className="row">
				<div className="col-md-4">
					User Profile Component -->>> {this.props.params.username}
				</div>
				<div className="col-md-4">
					Repos Component
				</div>
				<div className="col-md-4">
					Notes Component
				</div>
			</div>	
		)
	}
});

module.exports = Profile;
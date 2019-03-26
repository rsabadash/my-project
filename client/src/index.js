import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classes from './slyles/index.scss';

console.log(classes);

class Test extends Component {
	constructor () {
		super();
		this.state = {
			text: ''
		};
	}

	componentDidMount () {
		fetch('/test', {
			method: 'GET'
		})
			.then(res => {
				return res.json();
			})
			.then(res => {
				this.setState({
					text: res.data.test
				})
			});
	}

	render () {
		return (
			<h1>{this.state.text}</h1>
		)
	}
}

ReactDOM.render(
	<div className={classes.test}>
		<Test />
	</div>,
	document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
	module.hot.accept();
}
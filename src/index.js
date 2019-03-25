import React from 'react';
import ReactDOM from 'react-dom';
import classes from './slyles/index.scss';

console.log(classes);

ReactDOM.render(
	<div className={classes.test}>Test</div>,
	document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
	module.hot.accept();
}
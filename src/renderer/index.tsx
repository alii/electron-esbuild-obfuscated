import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import './index.css';

render(
	<>
		<div className="title-bar">
			<p>Title</p>
		</div>
		<div className="padding">
			<App />
		</div>
	</>,
	document.getElementById('root'),
);

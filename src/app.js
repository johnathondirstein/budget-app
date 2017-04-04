import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
		<div>
			<header>
				<h1>Budget Tracker</h1>
			</header>
		</div>	
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
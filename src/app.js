import React from 'react'
import { AppContainer } from 'react-hot-loader'  /* eslint-disable-line */
import ReactDOM from 'react-dom'
import App from './App.jsx'

// ReactDOM.hydrate(<App />,document.getElementById("root"));

const render = (Component) => {
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root'),
	)
}

render(App);
if (module.hot) { // 在webpack 加上hot
	module.hot.accept('./App.jsx', () => {
        const NextApp = require("./App.jsx").default; // eslint-disable-line
		render(NextApp);
		//  ReactDOM.hydrate(<NextApp />,document.getElementById("root"));
	});
}

import React from 'react'
import { AppContainer } from 'react-hot-loader'  /* eslint-disable-line */
import ReactDOM from 'react-dom'
import App from './views/App'

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
	module.hot.accept('./views/App', () => {
        const NextApp = require("./views/App").default; // eslint-disable-line
		render(NextApp);
		//  ReactDOM.hydrate(<NextApp />,document.getElementById("root"));
	});
}

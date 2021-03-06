const express = require('express')
const ReactSSR = require('react-dom/server')
const favicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(favicon(path.join(__dirname, '../favicon.ico')))

const isDev = process.env.NODE_ENV === 'development'

if (!isDev) {
	const serverEntry = require('../dist/server-entry').default // eslint-disable-line
	const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
	app.use('/public', express.static(path.join(__dirname, '../dist')))

	app.get('*', (req, res) => {
		const appString = ReactSSR.renderToString(serverEntry)

		res.send(template.replace('<!--app-->', appString))
	})
} else {
	const devStatic = require('./utils/dev-static') // eslint-disable-line
	devStatic(app)
}
app.listen(3333, () => {
	console.log(' server is listening on 3333')
})

const {defineConfig} = require('vite');
const reactRefresh = require('@vitejs/plugin-react-refresh');

module.exports = defineConfig({
	plugins: [reactRefresh()],
	build: {
		target: 'chrome89',
	},
});

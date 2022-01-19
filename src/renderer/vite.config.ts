import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

module.exports = defineConfig({
	plugins: [reactRefresh()],
	build: {
		target: 'chrome89',
	},
});

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	const allowedHost = env.ALLOWED_HOST?.trim()
	const port = env.PORT?.trim()

	return {
		plugins: [react()],

		server: {
			host: '0.0.0.0',
			port: port ? Number(port) : 5173,
			allowedHosts: allowedHost ? [allowedHost] : undefined
		}
	}
})

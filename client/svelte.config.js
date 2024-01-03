// Import packages
import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

// SvelteKit configuration types
/** @type {import('@sveltejs/kit').Config} */

// SvelteKit configuration
const svelteKitConfig = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
}

// Exports
export default svelteKitConfig

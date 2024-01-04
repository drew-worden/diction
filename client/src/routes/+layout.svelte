<script lang="ts">
	// Import components
	import Sidebar from "../components/Sidebar.svelte"
	import Selector from "../components/Selector.svelte"

	// Import styles
	import "../styles/global.css"
</script>

<Sidebar />
<main>
	<Selector />
	<slot />
</main>

<style>
	main {
		background-color: white;
		width: calc(100vw - 70px);
		margin-left: auto;
		height: calc(100vh - 20px);
		margin-top: auto;
		border-top-left-radius: 8px;
		display: flex;
		border-top: 2px solid grey;
		border-left: 2px solid grey;
		box-shadow:
			rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
			rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	}
</style>

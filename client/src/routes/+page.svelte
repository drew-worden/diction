<script lang="ts">
	// Import libraries
	import { send, receive } from "../lib/index"

	// Import components
	import LoginForm from "../components/LoginForm.svelte"
	import RegisterForm from "../components/RegisterForm.svelte"

	// State
	let showLoginForm = false
	let showRegisterForm = false

	// Handlers
	function handleForm(form: "login" | "register" | "home") {
		if (form === "login") {
			showLoginForm = true
			showRegisterForm = false
		} else if (form === "register") {
			showLoginForm = false
			showRegisterForm = true
		} else {
			showLoginForm = false
			showRegisterForm = false
		}
	}
</script>

<div class="container">
	{#if showLoginForm}
		<LoginForm {handleForm} />
	{:else if showRegisterForm}
		<RegisterForm {handleForm} />
	{:else}
		<div
			class="home-container"
			in:receive="{{ key: 'block' }}"
			out:send="{{ key: 'block' }}"
		>
			<h1 class="title">Diction</h1>
			<p class="subtitle">A Discord clone constructed for educational purposes.</p>
			<div class="button-container">
				<button
					class="login-button clickable main-button"
					on:click="{() => (showLoginForm = true)}">Login</button
				>
				<button
					class="register-button clickable main-button"
					on:click="{() => (showRegisterForm = true)}">Register</button
				>
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 100%;
		background-image: url("/wave.svg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0px 20px;
		box-shadow: inset 0px 0px 61px 37px rgba(0, 0, 0, 0.1);
	}

	.home-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
	}

	.title {
		font-family: grand;
		font-size: 96px;
		font-weight: 900;
		margin-bottom: 0.5rem;
		color: #99caf4;
		-webkit-text-stroke-width: 3px;
		-webkit-text-stroke-color: #333333;
	}

	.subtitle {
		font-family: grand;
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 2rem;
		color: #333333;
	}

	.main-button {
		font-family: grand;
		font-size: 16px;
		font-weight: 500;
		padding: 12px 32px;
		border-radius: 4px;
		border-radius: 1000px;
		box-shadow:
			rgba(0, 0, 0, 0.4) 0px 2px 4px,
			rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
			rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}

	.button-container {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.login-button {
		background-color: #3793f6;
		color: #ffffff;
		margin: 8px 0px;
		border: 1px solid #3793f6;
	}

	.register-button {
		background-color: #ffffff;
		color: #3793f6;
		border: 1px solid #3793f6;
	}
</style>

<script lang="ts">
	// Import libraries
	import {send, receive} from "../lib/index"

	// Props
	export let handleForm: (form: "login" | "register" | "home") => void
</script>

<div class="form" in:receive={{ key: "block" }} out:send={{ key: "block" }}>
	<button class="exit-wrapper clickable" on:click="{() => handleForm("home")}">
		<svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="#333333" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
	</button>
	<span class="form-title">Register</span>
	<div class="dual-input">
		<input
			type="text"
			placeholder="First Name"
		/>
		<input
			type="text"
			placeholder="Last Name"
		/>
	</div>
	<div class="dual-input">
		<input
			type="text"
			placeholder="Email Address"
		/>
		<input
			type="text"
			placeholder="Username"
		/>
	</div>
	<div class="dual-input">
		<input
			type="password"
			placeholder="Password"
		/>
		<input
			type="password"
			placeholder="Confirm Password"
		/>
	</div>
	<button class="login-button main-button clickable">Register</button>
	<span class="question"
		>Already have an account? <button
			class="side-button clickable"
			on:click="{() => handleForm('login')}">Login</button
		></span
	>
</div>

<style>
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

	.login-button {
		background-color: #3793f6;
		color: #ffffff;
		margin: 8px 0px;
		border: 1px solid #3793f6;
	}

	.exit-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #d1d6d8;
		padding: 8px;
		display: flex;
		border-radius: 1000px;
		cursor: pointer;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		width: 425px;
		position: absolute;
	}

	.form-title {
		font-family: grand;
		font-size: 64px;
		font-weight: 800;
		color: #555555;
	}

	input {
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
		width: 100%;
	}

	.dual-input {
		display: flex;
		gap: 16px;
	}

	.side-button {
		font-family: grand;
		font-size: 16px;
		font-weight: 500;
		color: #3793f6;
		text-decoration: underline;
	}

	.question {
		font-family: grand;
		font-size: 16px;
		font-weight: 500;
		color: #555555;
	}
</style>

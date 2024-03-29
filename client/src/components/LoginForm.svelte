<script lang="ts">
	// Import packages
	import toast from "svelte-french-toast"

	// Import libraries
	import { send, receive } from "../lib/index"
	import { validateLoginForm } from "../lib/validators"
	import type { ValidatorFields } from "../types/validators"

	// Import types

	// Props
	export let handleForm: (form: "login" | "register" | "home") => void

	// State
	let email = ""
	let password = ""
	let toastId = ""
	let disableButton = true
	let errorField: ValidatorFields = null

	// Compute previous state "hash"
	let previousState = email + password

	// Disable button if previous state is the same as current state
	$: if (previousState !== email + password) {
		disableButton = false
	} else {
		disableButton = true
	}

	// Handlers
	function handleSubmit() {
		// Reset error field
		errorField = null

		// Validate form
		const { valid, message, field } = validateLoginForm(email, password)
		if (!valid) {
			previousState = email + password
			// If form is invalid, display error toast
			toast.dismiss(toastId)
			toastId = toast.error(message, {
				position: "bottom-center",
				style: "margin-left: 320px; margin-bottom: 225px; font-family: grand; color: #333333; border-radius: 1000px; padding: 8px 16px; box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
			})
			if (field) {
				errorField = field
			}
			return
		}
	}
</script>

<div
	class="login-form form"
	in:receive="{{ key: 'block' }}"
	out:send="{{ key: 'block' }}"
>
	<button
		class="exit-wrapper clickable"
		on:click="{() => {
			toast.dismiss(toastId)
			handleForm('home')
		}}"
	>
		<svg
			width="16"
			height="16"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
				fill="#333333"
				fill-rule="evenodd"
				clip-rule="evenodd"
			></path></svg
		>
	</button>
	<span class="form-title">Login</span>
	<input
		type="text"
		placeholder="Email Address"
		bind:value="{email}"
		style:outline="{errorField === "email" ? "solid 2px #FF4B4B" : null}"
	/>
	<input
		type="password"
		placeholder="Password"
		bind:value="{password}"
		style:outline="{errorField === "password" ? "solid 2px #FF4B4B" : null}"
	/>
	<button
		class="login-button main-button clickable"
		on:click="{() => handleSubmit()}"
		disabled="{disableButton}">Login</button
	>
	<span class="question"
		>Don't have an account? <button
			class="side-button clickable"
			on:click="{() => {
				toast.dismiss(toastId)
				handleForm('register')
			}}">Register</button
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

	.main-button:disabled {
		background-color: #cccccc;
		color: #999999;
		border: 1px solid #cccccc;
		cursor: not-allowed;
	}

	.login-button {
		background-color: #3793f6;
		color: #ffffff;
		margin: 8px 0px;
		border: 1px solid #3793f6;
	}

	.login-form {
		max-width: 300px;
		position: relative;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		width: 425px;
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
		transition: all 0.1s ease-in-out;
		color: #333333;
	}

	input:focus {
		transform: scale(1.05);
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

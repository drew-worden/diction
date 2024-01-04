<script lang="ts">
    // Props
    export let handleForm: (form: "login" | "register") => void;
</script>
	
<div class="form">
	<span class="form-title">Register</span>
	<div class="dual-input">
		<input type="text" placeholder="First Name"/>
		<input type="text" placeholder="Last Name"/>
	</div>
	<div class="dual-input">
		<input type="text" placeholder="Email Address">
		<input type="text" placeholder="Username">
	</div>
	<div class="dual-input">
		<input type="password" placeholder="Password">
		<input type="password" placeholder="Confirm Password">
	</div>
	<button class="login-button main-button clickable">Register</button>
	<span class="question">Already have an account? <button class="side-button clickable" on:click="{() => handleForm("login")}">Login</button></span>
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

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		width: 425px;
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

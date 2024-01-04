<div class="container">
	<h1 class="title">Diction</h1>
	<p class="subtitle">A Discord clone constructed for educational purposes.</p>
	<div class="button-container">
		<button class="login-button clickable">Login</button>
		<button class="register-button clickable">Register</button>
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-image: url("/wave.svg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0px 20px;
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
		margin-bottom: 3rem;
		color: #333333;
	}

	button {
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
		border: none;
		margin-right: 1rem;
	}

	.register-button {
		background-color: #ffffff;
		color: #3793f6;
		border: 1px solid #3793f6;
	}
</style>

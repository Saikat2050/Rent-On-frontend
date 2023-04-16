const SignUp1 = () => {
    return (
		<div className="signUp">
			<div className="screen">
				<div className="screen__content">
					<form className="registration-form">
						<div className="registration__field">
							<input type="email" className="login__input" placeholder="Email" />
						</div>
                        <div className="registration__field">
							<input type="text" className="login__input" placeholder="Name" />
						</div>
						<div className="registration__field">
							<input type="password" className="login__input" placeholder="Password" />
						</div>
						<div className="registration__field">
							<input type="password" className="login__input" placeholder="Confirm Password" />
						</div>
						<button className="button registration__submit">
							<span className="button__text">Next</span>
							<i className="button__icon fas fa-chevron-right"></i>
						</button>
					</form>
					<div className="change-methode">
						<h5>Already Registred</h5>
						<div className="registration-icon">
							<button type="button" class="btn btn-outline-light change-methode__icon">Log In</button>
						</div>
					</div>
				</div>
				<div className="screen__background">
					<span className="screen__background__shape screen__background__shape4"></span>
					<span className="screen__background__shape screen__background__shape3"></span>
					<span className="screen__background__shape screen__background__shape2"></span>
					<span className="screen__background__shape screen__background__shape1"></span>
				</div>
			</div>
		</div>
    );
}

export default SignUp1;
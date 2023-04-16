import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faUser, faKey } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faUser, faKey);

const SignIn = () => {
	return (
		<div className="signIn">
			<div className="screen">
				<div className="screen__content">
					<form className="login">
						<div className="login__field">
							<FontAwesomeIcon icon="fa-solid fa-user" />
							<input type="text" className="login__input" placeholder="User name / Email" />
						</div>
						<div className="login__field">
							<FontAwesomeIcon icon="fa-solid fa-key" />
							<input type="password" className="login__input" placeholder="Password" />
						</div>
						<button className="button login__submit">
							<span className="button__text">Log In Now</span>
							<i className="button__icon fas fa-chevron-right"></i>
						</button>
					</form>
					<div className="change-methode">
						<h5>Don't have an account</h5>
						<div className="registration-icon">
							<button type="button" class="btn btn-outline-light change-methode__icon">Register Yourself</button>
							{/* <Link to="/sign-up" className="change-methode__icon">Register Yourself</Link> */}
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

export default SignIn;
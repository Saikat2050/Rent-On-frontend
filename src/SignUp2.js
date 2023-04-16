const SignUp2 = () => {
    return (
        <div className="signUp">
            <div className="screen">
                <div className="screen__content">
                    <div className="change-methode2">
                        <h5>Already Registred</h5>
                        <div className="registration-icon">
                            <button type="button" class="btn btn-outline-light change-methode__icon">Log In</button>
                        </div>
                    </div>
                    <form>
                        <div className="registration-form2">
                            <div className="registration__field">
                                <input type="number" className="login__input" placeholder="Mobile" />
                            </div>
                            <div className="registration__field">
                                <select type="text" className="login__input" placeholder="Gender">
                                    {/* <option className="login__input" value="" disabled selected>Gender</option> */}
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="registration__field">
                                <input type="number" className="login__input" placeholder="Age" />
                            </div>
                            <div className="registration__field">
                                <input type="text" className="login__input" placeholder="City" />
                            </div>
                        </div>
                        <div className="registration__button__location">
                            <button className="button registration__submit">
                                <span className="button__text">Register Me</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape8"></span>
                    <span className="screen__background__shape screen__background__shape7"></span>
                    <span className="screen__background__shape screen__background__shape6"></span>
                    <span className="screen__background__shape screen__background__shape5"></span>
                </div>
            </div>
        </div>
    );
}

export default SignUp2;
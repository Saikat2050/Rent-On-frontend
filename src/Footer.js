import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub);

const Footer = () => {
    return (
        <div className="footer">
            <div className="container my-5">

                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <Link className="btn btn-outline-light btn-floating m-1" to="https://mdbootstrap.com/" role="button"
                            ><FontAwesomeIcon icon="fa-solid fa-facebook-f" /></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="https://mdbootstrap.com/" role="button"
                            ><FontAwesomeIcon icon="fa-solid fa-twitter" /></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="https://mdbootstrap.com/" role="button"
                            ><FontAwesomeIcon icon="fa-solid fa-google" /></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="https://mdbootstrap.com/" role="button"
                            ><FontAwesomeIcon icon="fa-solid fa-instagram" /></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="https://mdbootstrap.com/" role="button"
                            ><FontAwesomeIcon icon="fa-solid fa-linkedin-in" /></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="https://mdbootstrap.com/" role="button"
                            ><FontAwesomeIcon icon="fa-solid fa-github" /></Link>
                        </section>
                    </div>
                    <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                        © 2020 Copyright:
                        <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
                    </div>
                </footer>

            </div>
        </div>
    );
}

export default Footer;
import logoTwitter from '../assets/logos/twitter-icon.svg';
import logoFacebook from '../assets/logos/facebook-icon.svg';
import logoInstagram from '../assets/logos/instagram-icon.svg';
import logoGitHub from '../assets/logos/github-icon.svg';

export default function Footer() {
    return(
        <footer>
            <img src={logoTwitter} alt="Twitter logo"></img>
            <img src={logoFacebook} alt="Facebook logo"></img>
            <img src={logoInstagram} alt="Instagram logo"></img>
            <img src={logoGitHub} alt="GitHub logo"></img>
        </footer>
    )
}
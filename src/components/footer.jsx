import logoTwitter from '../logos/Twitter Icon.svg';
import logoFacebook from '../logos/Facebook Icon.svg';
import logoInstagram from '../logos/Instagram Icon.svg';
import logoGitHub from '../logos/GitHub Icon.svg';

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
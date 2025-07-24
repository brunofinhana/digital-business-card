import Twitter from '../assets/logos/twitter-icon.svg';
import Facebook from '../assets/logos/facebook-icon.svg';
import Instagram from '../assets/logos/instagram-icon.svg';
import GitHub from '../assets/logos/github-icon.svg';

export default function Footer() {
    return(
        <>
            <img src={Twitter} alt="Twitter logo." />
            <img src={Facebook} alt="Facebook logo." />
            <img src={Instagram} alt="Instagram logo." />
            <img src={GitHub} alt="GitHub logo." />
        </>
    )
}
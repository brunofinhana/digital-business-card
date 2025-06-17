import emailLogo from '../logos/Email Icon.png';
import linkedInLogo from '../logos/Linkedin Icon.svg';
import maleYoung from '../assets/profilePics/male-young.jpg';

export default function Info() {
    return (
        <div className="profile-container">
            <img src={maleYoung} alt="Profile" className="profile-image" />
            <div className="profile-details">
                <h1>Jane Doe</h1>
                <h2>Frontend Developer</h2>
                <h3>janedoe.website</h3>
                <div className="profile-button-container">
                    <button className="email-button">
                        <img src={emailLogo} className='emailLogo' alt="Email logo" />
                        Email
                    </button>
                    <button className="linkedin-button">
                        <img src={linkedInLogo} alt="LinkedIn logo" />
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    )
}
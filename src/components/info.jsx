import ProfilePic from "../assets/profilePics/user1.jpg";

export default function Header(props) {
    const {...otherProps} = props;
    return(
        <div className="infoHolder">
            <div className="profilePicHolder">
            </div>
            <h1>{userName}</h1>
            <h2>{occupation}</h2>
            <div>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}
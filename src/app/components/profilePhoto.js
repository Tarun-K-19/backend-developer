import { ProfilePic } from '../common/images';
import '../styles/profile.css';

function Profile() {
    return(
    <div className = "profile-frame">
        <div className="profile-frame-inner">
            <img src={ProfilePic} alt="Tarun" />
        </div>
    </div>
  );
}

export default Profile;
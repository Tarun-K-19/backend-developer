<<<<<<< HEAD
import { ProfilePic } from '../utils/images';
import '../styles/profile.css';

function Profile() {
    return (
        <div className="profile-frame">
            <div className="profile-frame-inner">
                <img src={ProfilePic} alt="Tarun" />
            </div>
        </div>
    );
=======
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
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517
}

export default Profile;
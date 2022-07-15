import Menu from "../Menu/Menu";
import MyCoin from "../Home/Pages/MyCoinPage/MyCoin/MyCoin";
import "./Profile.scss"

function Profile() {
    return ( 
        <div className="profile">
            <Menu />
            <MyCoin />
        </div>
     );
}

export default Profile;
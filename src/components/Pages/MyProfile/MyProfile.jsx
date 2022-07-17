import "./MyProfile.scss";

function MyProfile() {
  return (
    <div className="profile">
      <h3 className="profile__header">USER INFORMATION</h3>
      <div className="profile__wrap">
        <div className="profile__infor">
          <h3 className="profile__title">Username:</h3>
          <p className="profile__content">antran</p>
        </div>
        <div className="profile__infor">
          <h3 className="profile__title">Email Address:</h3>
          <p className="profile__content">phamtrangiaan27@gmail.com</p>
        </div>
        <div className="profile__infor">
          <h3 className="profile__title">Password:</h3>
          <p className="profile__password">Change password</p>
        </div>
      </div>

      <div className="profile__footer">
            <h3 className="profile__footer-title">PAYMENT</h3>
            <p className="profile__footer-desc">support the following payment methods to load or withdraw funds.</p>
            <button className="profile__footer-btn">
                <a href="https://coin-silk.vercel.app/login" className="profile__footer-link">Log out</a>
            </button>
      </div>
    </div>
  );
}

export default MyProfile;

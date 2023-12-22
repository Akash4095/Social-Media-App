import React from "react";
import "./profilecard.css";
import ProfileImage from "../../img/profileImg.jpg";
import CoverImage from "../../img/cover.jpg";

const Profilecard = () => {

  const ProfilePage = true
  return (
    <div className="profilecard">
      <div className="profileImages">
        <img src={CoverImage} alt="" />
        <img src={ProfileImage} alt="" />
      </div>
      <div className="profile-name">
        <span>Akash Athnure</span>
        <span>React.Js Developer</span>
      </div>
      <div className="follow-status">
        <hr />
        <div>
          <div className="follow">
            <span>600</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>250</span>
            <span>Followers</span>
          </div>
          {
            ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )
          }
        </div>
        <hr />
      </div>
      {

        ProfilePage ? "" : <span>My Profile</span>
      }

    </div>
  );
};

export default Profilecard;

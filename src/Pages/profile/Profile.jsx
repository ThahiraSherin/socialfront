import React from 'react';
import './Profile.css';
import ProfilePageLeft from '../../Components/ProfilePageLeft/ProfilePageLeft';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfilePageLeft />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Profile;

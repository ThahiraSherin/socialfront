import React from 'react';
import './Home.css';
import ProfileSide from '../../Components/profileSide/ProfileSide.jsx';
import PostSide from '../../Components/PostSide/PostSide.jsx';
import RightSide from '../../Components/RightSide/RightSide.jsx';

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;

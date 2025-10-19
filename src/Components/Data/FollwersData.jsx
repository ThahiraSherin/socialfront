import React from 'react';
import './Followers.css';
import { Followers as followersData } from '../Data/Followers';
import DefaultProfile from '../Img/defaultProfile.png';

const FollowersList = () => {
  return (
    <div className="followersCard">
      <h3>Followers</h3>
      <div className="followersList">
        {followersData.map((follower, index) => (
          <div className="followerItem" key={index}>
            <img
              src={follower.img || DefaultProfile}
              alt={follower.name}
              className="avatar followerImg"
            />
            <div className="followerInfo">
              <span className="followerName">{follower.name}</span>
              <span className="followerUsername">@{follower.username}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowersList;

import React, { useEffect, useState } from 'react';
import './InfoCard.css';
import EditIcon from '@mui/icons-material/Edit';
import ProfileModal from '../ProfileModal/ProfileModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js';
import { logOut } from '../../actions/AuthAction.js';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;

  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      try {
        if (profileUserId === user._id) {
          setProfileUser(user);
        } else {
          const profileUserData = await UserApi.getUser(profileUserId);
          setProfileUser(profileUserData);
        }
      } catch (error) {
        console.error("Failed to fetch profile user:", error);
      }
    };
    fetchProfileUser();
  }, [user, profileUserId]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Profile Info</h4>

        {user._id === profileUserId && (
          <div className='edit-icon'>
            <EditIcon
              style={{ cursor: 'pointer' }}
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        )}
      </div>

      <div className="info">
        <span><b>Status:</b></span>
        <span>{profileUser.relationship || "Not specified"}</span>
      </div>

      <div className="info">
        <span><b>Lives in:</b></span>
        <span>{profileUser.livesin || "Not specified"}</span>
      </div>

      <div className="info">
        <span><b>Works at:</b></span>
        <span>{profileUser.worksAt || "Not specified"}</span>
      </div>

      {user._id === profileUserId && (
        <button className='button logout-button' onClick={handleLogOut}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default InfoCard;

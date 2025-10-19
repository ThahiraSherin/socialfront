import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import { Button } from '@mantine/core';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
      <Button>Hello from Mantine</Button>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </div>
  )
}

export default ProfileSide
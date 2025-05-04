import React from 'react'
import './Profile.css'
import ProfileCard from '../../Components/Profile Card/ProfileCard';
import NavigationBar from '../../Components/Navigation Bar/NavigationBar';

const Profile = () => {
  return (
    <>
      <NavigationBar />
      <ProfileCard />
    </>
  );
};

export default Profile;

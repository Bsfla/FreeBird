import React, { useState } from 'react';
import { MainLayout, ProfileCard, ProfileEditModal } from '@components/index';

const Profile = () => {
  return (
    <MainLayout>
      <ProfileCard />
      <ProfileEditModal />
    </MainLayout>
  );
};

export default Profile;

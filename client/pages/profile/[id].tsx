import React, { useState } from 'react';
import { MainLayout, ProfileCard, ProfileEditModal } from '@components/index';

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  return (
    <MainLayout>
      <ProfileCard />
      <ProfileEditModal isOpen={isOpenModal} />
    </MainLayout>
  );
};

export default Profile;

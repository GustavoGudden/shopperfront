import React from 'react';
import HeaderComponent from '../../ui/header';

import { HomeModel } from '@/views/home/model';
import ContentHomeWrapper from '@/components/organisms/homeContentWrapper';

const Hometemplates = (HomeViewModel: HomeModel) => {
  return (
    <main className="w-full ">
      <HeaderComponent />
      <ContentHomeWrapper {...HomeViewModel} />
    </main>
  );
};

export default Hometemplates;

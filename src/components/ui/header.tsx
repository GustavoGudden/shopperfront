import Image from 'next/image';
import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="w-full flex flex-row justify-between p-6 bg-indigo">
      <Image src="/shopper.webp" alt="logo shopper" width={100} height={100} />
    </div>
  );
};

export default HeaderComponent;

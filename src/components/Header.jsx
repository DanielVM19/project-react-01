import React from 'react';

const Header = ({ children }) => {
  return (
    <>
      <div className='Header-title'>
        {children}
      </div>
    </>
  );
};

export default Header;
import React from 'react';

export const Container = ({ children }) => (
  <div className="w-full flex justify-center">
    <div className="flex px-4 w-full xl:w-xl">
      {children}
    </div>
  </div>
);

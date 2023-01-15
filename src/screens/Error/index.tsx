import React, { useEffect } from 'react';
import { redirect } from 'react-router-dom';

const Error: React.FC = () => {
  useEffect(() => {
    redirect('/');
  }, []);
  return <></>;
};

export default Error;

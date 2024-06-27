// hocs/withAuth.tsx

import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import Router from 'next/router';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        Router.push('/login');
      }
    }, [loading, user]);

    if (loading) {
      return <p>Loading...</p>; // You can show a loading spinner or any other loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

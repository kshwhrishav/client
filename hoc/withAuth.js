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
    }, [user]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  // Attach requireAuth to Wrapper component
  Wrapper.requireAuth = WrappedComponent.requireAuth;

  return Wrapper;
};

export default withAuth;

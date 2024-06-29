import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect, ReactNode } from 'react';
import Footer from './components/footer';
import Header from './components/header';

interface LayoutProps {
  children: ReactNode;
  requireAuth?: boolean;
}

function Layout({ children, requireAuth = false }: LayoutProps) {
  const { user, loading }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && requireAuth && !user) {
      router.push('/login');
    }
  }, [loading, requireAuth, user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Header />
      <div className='s-main'>
        {children}
      </div>
      <Footer />
    </section>
  );
}

export default Layout;

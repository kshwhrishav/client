import { useRouter } from 'next/router';
import React,{useEffect, useState} from 'react'
import Footer from './components/footer';
import Header from './components/header';

function Layout({children}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/home');
    }
  }, [router.pathname]);

  return (
    <section>
      <Header />
      <div className='s-main'>
        {children}
      </div>
      <Footer />
    </section>  
    
  )
}

export default Layout
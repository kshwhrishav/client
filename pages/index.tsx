import { useRouter } from 'next/router';
import React,{useEffect, useState} from 'react'
import Header from './header';

function Layout({children}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return (
    <section>
      <Header />
      <div className='s-main'>
        {children}
      </div>
    </section>  
    
  )
}

export default Layout
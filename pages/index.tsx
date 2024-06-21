import React,{useState} from 'react'
import Header from './header';

function Layout({children}: {
  children: React.ReactNode
}) {

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
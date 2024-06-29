import React from 'react'
import withAuth from '../hoc/withAuth';
import Navbar from './components/navbar';

function Dashboard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

Dashboard.requireAuth = true;

export default withAuth(Dashboard)
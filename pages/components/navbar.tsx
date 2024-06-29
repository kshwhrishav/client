import { Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/common/navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.NavContainer}>
        <div className={styles.NavMenu}>
            <Typography>Patients</Typography>
            <Typography>Memberships</Typography>
            <Typography>Funds</Typography>
            <Typography>Our page highlights</Typography>
        </div>
    </div>
  )
}

export default Navbar
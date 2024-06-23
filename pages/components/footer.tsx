import { Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "../../styles/common/footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <Typography>Satvik Foundation</Typography>
        <div className={styles.footerLogos}>
          <a href="https://www.facebook.com/profile.php?id=61558236556579">
            <FacebookOutlinedIcon />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61558236556579">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className={styles.footerContact}>
        <Typography sx={{fontWeight:'bold'}}>Contact us</Typography>
        <div>
          <Typography>Email</Typography>
          <Typography>info@satvikfoundation.com</Typography>
        </div>
        <div>
          <Typography>Phone</Typography>
          <Typography>+977-9855049626</Typography>
        </div>

      </div>
    </div>
  );
}

export default Footer;

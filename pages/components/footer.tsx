import { Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div>
      <div>
        <Typography>Satvik Foundation</Typography>
        <div>
          <a href="https://www.facebook.com/profile.php?id=61558236556579">
            <FacebookOutlinedIcon />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61558236556579">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div>
        <Typography>Contact us</Typography>
        <div>
          <Typography>Email</Typography>
          <Typography>info@satvikfoundation.com</Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;

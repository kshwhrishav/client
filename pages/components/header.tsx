import React from "react";
import Image from "next/image";
import styles from "../../styles/common/header.module.scss";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Link from "next/link";

function Header() {
  const router = useRouter();
  const onLogoClick = () => {
    router.push("/home");
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSection}>
        <div className={styles.logoContainer}>
          <Image
            src="/satvik-logo.png"
            className={styles.logo}
            onClick={onLogoClick}
            alt="Satvik Logo"
            width={50}
            height={50}
          />
          <Typography
            onClick={onLogoClick}
            sx={{ cursor: "pointer" }}
            fontFamily={styles.font}
            variant="h5"
          >
            Satvik Foundation
          </Typography>
        </div>
        <div className={styles.headerLinks}>
          <Link className={styles.links} href={"/home"} passHref>
          What do we do
          </Link>
          <Link className={styles.links} href={"/about"} passHref>
            About us
          </Link>
          <Link href={"/about/contact-us"} className={styles.links} passHref>
            Contact us
          </Link>
          <Link className={styles.links} href={"/membership"} passHref>
            Membership
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

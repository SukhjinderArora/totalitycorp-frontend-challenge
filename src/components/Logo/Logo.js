import { ReactComponent as BrandLogo } from "../../assets/icons/logo.svg";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span>
        <BrandLogo width="40" height="40" className={styles.logoIcon} />
      </span>
      <span className={styles.logoText}>OpenSea</span>
    </div>
  );
};

export default Logo;

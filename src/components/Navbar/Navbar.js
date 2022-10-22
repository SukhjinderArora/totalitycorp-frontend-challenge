import { useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import NavigationList from "../NavigationList/NavigationList";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const changeColorOnScroll = () => {
    if (window.scrollY >= 10) {
      setIsScrolledToTop(false);
    } else {
      setIsScrolledToTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeColorOnScroll);
    };
  }, []);
  return (
    <nav
      className={`${styles.navigation} ${
        isScrolledToTop ? styles.transparent : ""
      }`}
    >
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.searchForm}>
        <SearchForm borderVisible={!isScrolledToTop} />
      </div>
      <div>
        <NavigationList />
      </div>
    </nav>
  );
};

export default Navbar;

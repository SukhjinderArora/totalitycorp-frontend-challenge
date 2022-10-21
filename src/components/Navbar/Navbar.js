import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import NavigationList from "../NavigationList/NavigationList";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.searchForm}>
        <SearchForm />
      </div>
      <div>
        <NavigationList />
      </div>
    </nav>
  );
};

export default Navbar;

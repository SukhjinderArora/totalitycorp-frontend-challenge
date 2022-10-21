import styles from "./NavigationList.module.css";

const NavigationList = () => {
  return (
    <div className={styles.navigationListContainer}>
      <ul className={styles.navigationList}>
        <li>
          <a href="/" className={styles.navigationLink}>
            Explore
          </a>
        </li>
        <li>
          <a href="/" className={styles.navigationLink}>
            Stats
          </a>
        </li>
        <li>
          <a href="/" className={styles.navigationLink}>
            Resources
          </a>
        </li>
        <li>
          <a href="/" className={styles.navigationLink}>
            Create
          </a>
        </li>
      </ul>
      <ul className={styles.navigationList}>
        <li>
          <a href="/" className={styles.navigationLink}>
            <span
              className={`material-symbols-outlined ${styles.navigationIcon}`}
            >
              account_circle
            </span>
          </a>
        </li>
        <li>
          <a href="/" className={styles.navigationLink}>
            <span
              className={`material-symbols-outlined ${styles.navigationIcon}`}
            >
              account_balance_wallet
            </span>
          </a>
        </li>
        <li>
          <a href="/" className={styles.navigationLink}>
            <span
              className={`material-symbols-outlined ${styles.navigationIcon}`}
            >
              shopping_cart
            </span>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationList;

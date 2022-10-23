import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";

import styles from "./NavigationList.module.css";

const NavigationList = () => {
  return (
    <div className={styles.navigationListContainer}>
      <ul className={styles.navigationList}>
        <li className={styles.listItem}>
          <a href="/" className={styles.navigationLink}>
            Explore
          </a>
          <Dropdown className={styles.dropdown}>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                All NFTS
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Solana NFTS
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Art
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Collectibles
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Domain Names
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Music
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Photography
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Trading Cards
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Utility
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Virtual Worlds
              </a>
            </DropdownItem>
          </Dropdown>
        </li>
        <li className={styles.listItem}>
          <a href="/" className={styles.navigationLink}>
            Stats
          </a>
          <Dropdown className={styles.dropdown}>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Rankings
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Activity
              </a>
            </DropdownItem>
          </Dropdown>
        </li>
        <li className={styles.listItem}>
          <a href="/" className={styles.navigationLink}>
            Resources
          </a>
          <Dropdown className={styles.dropdown}>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Learn
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Help Center
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Platform Status
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Partners
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Taxes
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Blog
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Docs
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/" className={styles.dropdownLink}>
                Newsletter
              </a>
            </DropdownItem>
          </Dropdown>
        </li>
        <li>
          <a href="/" className={styles.navigationLink}>
            Create
          </a>
        </li>
      </ul>
      <ul className={styles.navigationList}>
        <li className={styles.listItem}>
          <a href="/" className={styles.navigationLink}>
            <span
              className={`material-symbols-outlined ${styles.navigationIcon}`}
            >
              account_circle
            </span>
          </a>
          <Dropdown className={styles.dropdown}>
            <DropdownItem className={styles.dropdownItem}>
              <span
                class={`material-symbols-outlined ${styles.dropdownIcon} ${styles.filledIcon}`}
              >
                person
              </span>
              <a href="/" className={styles.dropdownLink}>
                Profile
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <span class={`material-symbols-outlined ${styles.dropdownIcon}`}>
                favorite
              </span>
              <a href="/" className={styles.dropdownLink}>
                Favorites
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <span
                class={`material-symbols-outlined ${styles.dropdownIcon}  ${styles.filledIcon}`}
              >
                visibility
              </span>
              <a href="/" className={styles.dropdownLink}>
                Watchlist
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <span class={`material-symbols-outlined ${styles.dropdownIcon}`}>
                grid_on
              </span>
              <a href="/" className={styles.dropdownLink}>
                My Collections
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <span
                class={`material-symbols-outlined ${styles.dropdownIcon}  ${styles.filledIcon}`}
              >
                settings
              </span>
              <a href="/" className={styles.dropdownLink}>
                Settings
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <span class={`material-symbols-outlined ${styles.dropdownIcon}`}>
                language
              </span>
              <div>
                <a href="/" className={styles.dropdownLink}>
                  Language
                </a>
                <span>
                  en
                  <span
                    class={`material-symbols-outlined ${styles.dropdownIcon}`}
                  >
                    arrow_forward_ios
                  </span>
                </span>
              </div>
            </DropdownItem>
          </Dropdown>
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

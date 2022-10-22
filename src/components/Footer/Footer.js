import { ReactComponent as LogoWhite } from "../../assets/icons/logo-white.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexContainer}>
        <div>
          <div className="newsletter">
            <h2>Stay in the loop</h2>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <form>
              <input type="text" placeholder="Your email address" />
              <button>Sign up</button>
            </form>
          </div>
          <div className="socials"></div>
        </div>
        <div className={styles.flexContainer}>
          <div className="companyInfo">
            <h2>Join the community</h2>
          </div>
          <div className="navigation">
            <div>
              <h3>MarketPlace</h3>
              <ul>
                <li>
                  <a href="/">All NFTs</a>
                </li>
                <li>
                  <a href="/">Salana NFTs</a>
                </li>
                <li>
                  <a href="/">Art</a>
                </li>
                <li>
                  <a href="/">Collectibles</a>
                </li>
                <li>
                  <a href="/">Domain Names</a>
                </li>
                <li>
                  <a href="/">Music</a>
                </li>
                <li>
                  <a href="/">Photography</a>
                </li>
                <li>
                  <a href="/">Sports</a>
                </li>
                <li>
                  <a href="/">Trading Cards</a>
                </li>
                <li>
                  <a href="/">Utility</a>
                </li>
                <li>
                  <a href="/">Virtual Worlds</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>My Account</h3>
              <ul>
                <li>
                  <a href="/">Profile</a>
                </li>
                <li>
                  <a href="/">Favorites</a>
                </li>
                <li>
                  <a href="/">WatchList</a>
                </li>
                <li>
                  <a href="/">My Collections</a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <h3>Stats</h3>
                <li>
                  <a href="/">Rankings</a>
                </li>
                <li>
                  <a href="/">Activity</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="/">Learn</a>
                </li>
                <li>
                  <a href="/">Help Center</a>
                </li>
                <li>
                  <a href="/">Platform Status</a>
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
                <li>
                  <a href="/">Taxes</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Docs</a>
                </li>
                <li>
                  <a href="/">Newsletter</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Ventures</a>
                </li>
                <li>
                  <a href="/">Grants</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

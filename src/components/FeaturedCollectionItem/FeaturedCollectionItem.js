import { ReactComponent as VerifiedIcon } from "../../assets/icons/verified.svg";

import styles from "./FeaturedCollectionItem.module.css";

const FeaturedCollectionItem = ({ item }) => {
  return (
    <div key={item.id} className={styles.container}>
      <a href="/" className={styles.itemLink}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={item.img} alt="Ani Mkhitaryan" />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.itemDescriptionContainer}>
          <div className={styles.itemHeadingContainer}>
            <h3 className={styles.itemHeading}>{item.name}</h3>
            {item.verified && <VerifiedIcon width="18" height="18" />}
          </div>
          <h4 className={styles.itemPrice}>Floor: {item.floorPrice}</h4>
        </div>
      </a>
    </div>
  );
};

export default FeaturedCollectionItem;

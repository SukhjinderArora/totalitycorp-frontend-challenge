import { ReactComponent as VerifiedIcon } from "../../assets/icons/verified.svg";

import styles from "./CollectionItem.module.css";

const NewCollectionItem = ({ item }) => {
  return (
    <a href="/" className={styles.link}>
      <div className={styles.container}>
        <div className={styles.coverImgContainer}>
          <img
            className={styles.coverImg}
            src={item.coverImg}
            alt={item.name}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={item.img} alt={item.name} />
          </div>
          <div className={styles.itemNameContainer}>
            <h3 className={styles.itemName}>{item.name}</h3>
            {item.verified && <VerifiedIcon width="18" height="18" />}
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewCollectionItem;

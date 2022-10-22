import { ReactComponent as VerifiedIcon } from "../../assets/icons/verified.svg";

import styles from "./CollectionStats.module.css";

const CollectionStats = ({ stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        <h3 className={`${styles.colHeading} ${styles.colHeading1}`}>
          Collection
        </h3>
        <h3 className={`${styles.colHeading} ${styles.colHeading2}`}>
          Floor Price
        </h3>
        <h3 className={`${styles.colHeading} ${styles.colHeading3}`}>Volume</h3>
      </div>
      {stats.map((stat) => (
        <div className={styles.row} key={stat.id}>
          <div className={styles.col1}>
            <div className={styles.rowId}>{stat.id}</div>
            <div className={styles.description}>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={stat.img} alt={stat.name} />
              </div>
              <div className={styles.descriptionText}>{stat.name}</div>
              {stat.verified && (
                <VerifiedIcon
                  width="18"
                  height="18"
                  style={{ marginLeft: "6px" }}
                />
              )}
            </div>
          </div>
          <div className={styles.col2}>{stat.floorPrice}</div>
          <div className={styles.col3}>{stat.volume}</div>
        </div>
      ))}
    </div>
  );
};

export default CollectionStats;

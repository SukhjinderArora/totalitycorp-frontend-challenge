import styles from "./NFTCard.module.css";

const NFTCard = ({ item }) => {
  return (
    <a href="/" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={item.coverImg} alt={item.name} className={styles.img} />
        </div>
        <div className={styles.headerContainer}>
          <h3 className={styles.cardHeading}>{item.name}</h3>
        </div>
      </div>
    </a>
  );
};

export default NFTCard;

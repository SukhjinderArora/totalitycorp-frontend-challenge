import styles from "./Category.module.css";

const Category = ({ category }) => {
  return (
    <a href="/" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            src={category.coverImg}
            alt={category.name}
            className={styles.img}
          />
        </div>
        <div className={styles.headerContainer}>
          <h3 className={styles.cardHeading}>{category.name}</h3>
        </div>
      </div>
    </a>
  );
};

export default Category;

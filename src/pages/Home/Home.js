import Slider from "../../components/Slider/Slider";

import styles from "./Home.module.css";

const Home = () => {
  const items = [1, 1, 1, 1, 1, 1, 1, 1].map(() => (
    <div
      style={{
        width: "310px",
        height: "310px",
        borderRadius: "16px",
        background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      }}
    ></div>
  ));
  return (
    <main className={styles.gridContainer}>
      <section
        className={`${styles.featuredSection} ${styles.gridItem} ${styles.section}`}
      >
        <h1 className={styles.featuredSectionTitle}>
          Explore, collect, and sell NFTs
        </h1>
        <div>
          <Slider
            spaceBetween="16"
            slidesPerView={4}
            slidesPerGroup={4}
            items={items}
            loop={true}
            autoPlay={true}
            autoPlayInterval={3000}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;

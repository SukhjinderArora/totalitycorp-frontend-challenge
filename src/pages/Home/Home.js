import Slider from "../../components/Slider/Slider";

import { featuredCollection } from "../../fake-data";

import FeaturedCollectionItem from "../../components/FeaturedCollectionItem/FeaturedCollectionItem";

import styles from "./Home.module.css";

const Home = () => {
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
            loop={true}
            autoPlay={true}
            autoPlayInterval={4000}
          >
            {featuredCollection.map((item, index) => (
              <FeaturedCollectionItem item={item} />
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;

import { useState } from "react";

import Slider from "../../components/Slider/Slider";
import FeaturedCollectionItem from "../../components/FeaturedCollectionItem/FeaturedCollectionItem";
import CollectionStats from "../../components/CollectionStats/CollectionStats";

import {
  featuredCollection,
  trendingCollections,
  topCollections,
  newCollections,
} from "../../fake-data";

import styles from "./Home.module.css";
import NewCollectionItem from "../../components/NewCollectionItem/NewCollectionItem";

const Home = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const onTabChange = (tab) => {
    setActiveTab(tab);
  };
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
              <FeaturedCollectionItem item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </section>
      <section
        className={`${styles.gridItem} ${styles.section} ${styles.statsSection}`}
      >
        <header className={`${styles.statsHeader}`}>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabBtn} ${
                activeTab === "trending" && styles.tabBtnActive
              }`}
              onClick={() => onTabChange("trending")}
            >
              Trending
            </button>
            <button
              className={`${styles.tabBtn} ${
                activeTab === "top" && styles.tabBtnActive
              }`}
              onClick={() => onTabChange("top")}
            >
              Top
            </button>
          </div>
          <div className={styles.filterBtnsContainer}>
            <button className={styles.filterBtn}>
              <span>24h</span>
              <span
                className={`material-symbols-outlined ${styles.btnExpandIcon}`}
              >
                expand_more
              </span>
            </button>
            <button className={styles.filterBtn}>View all</button>
          </div>
        </header>
        {activeTab === "trending" && (
          <>
            <div className={styles.statsCollection}>
              <CollectionStats stats={trendingCollections.slice(0, 5)} />
            </div>
            <div className={styles.statsCollection}>
              <CollectionStats stats={trendingCollections.slice(-5)} />
            </div>
          </>
        )}
        {activeTab === "top" && (
          <>
            <div className={styles.statsCollection}>
              <CollectionStats stats={topCollections.slice(0, 5)} />
            </div>
            <div className={styles.statsCollection}>
              <CollectionStats stats={topCollections.slice(-5)} />
            </div>
          </>
        )}
      </section>
      <section className={`${styles.section} ${styles.gridItem}`}>
        <h2 className={styles.newCollectionsHeader}>New and notable</h2>
        <div>
          <Slider
            spaceBetween="16"
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            autoPlay={false}
          >
            {newCollections.map((item) => (
              <NewCollectionItem item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;

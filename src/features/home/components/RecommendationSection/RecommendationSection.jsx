// src/features/home/components/RecommendationSection/RecommendationSection.jsx

import styles from "./RecommendationSection.module.css";

function RecommendationSection({
  recommendations = [],
}) {

  return (
    <section className={styles.section}>

      <h2 className={styles.title}>
        Made For You
      </h2>


      <div className={styles.grid}>

        {recommendations.map((item) => (

          <article
            key={item.id}
            className={styles.card}
          >

            <img
              src={item.cover}
              alt={item.title}
              className={styles.cover}
            />


            <h3 className={styles.name}>
              {item.title}
            </h3>


            <p className={styles.description}>
              {item.description}
            </p>


          </article>

        ))}

      </div>

    </section>
  );
}

export default RecommendationSection;
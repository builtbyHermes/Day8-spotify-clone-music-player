// src/features/home/components/Section/Section.jsx

import styles from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <button className={styles.showAllButton}>
          Show All
        </button>
      </div>

      <div className={styles.content}>
        {children}
      </div>

    </section>
  );
}

export default Section;
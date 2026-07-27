// src/layouts/components/Topbar/Topbar.jsx

import styles from "./Topbar.module.css";

//this should later be replaced with the src/components
function Topbar() {

  return (
    <header className={styles.topbar}>

      {/* Search */}
      <div className={styles.search}>

        <span>
          🔍
        </span>

        <input
          type="text"
          placeholder="Search music..."
        />

      </div>

      {/* Actions */}

      <div className={styles.actions}>

        <button className={styles.iconButton}>
          🔔
        </button>

        <div className={styles.profile}>

          <div className={styles.avatar}>
            J
          </div>

          <span>
            John
          </span>
        </div>

      </div>
    </header>
  );

}


export default Topbar;
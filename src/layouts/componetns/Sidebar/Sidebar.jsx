// src/layouts/components/Sidebar/Sidebar.jsx

import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";


function Sidebar() {

  const mainLinks = [
    {
      name: "Home",
      path: "/",
      icon: "🏠",
    },
    {
      name: "Search",
      path: "/search",
      icon: "🔍",
    },
    {
      name: "Library",
      path: "/library",
      icon: "📚",
    },
  ];

  const libraryLinks = [
    {
      name: "Liked Songs",
      path: "/liked",
      icon: "❤️",
    },
    {
      name: "Playlists",
      path: "/playlists",
      icon: "🎵",
    },
  ];

  return (

    <aside className={styles.sidebar}>

      {/* Logo */}

      <div className={styles.logo}>
        muSync
      </div>



      {/* Main Navigation */}

      <nav className={styles.navigation}>

        {mainLinks.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? styles.active
                : styles.link
            }
          >

            <span>
              {item.icon}
            </span>

            {item.name}

          </NavLink>

        ))}


      </nav>



      <div className={styles.divider} />

      {/* Library Section */}

      <section>

        <h3 className={styles.sectionTitle}>
          Library
        </h3>

        <nav className={styles.navigation}>

          {libraryLinks.map((item) => (

            <NavLink

              key={item.name}

              to={item.path}

              className={({ isActive }) =>
                isActive
                  ? styles.active
                  : styles.link
              }

            >

              <span>
                {item.icon}
              </span>


              {item.name}


            </NavLink>

          ))}


        </nav>

      </section>

      {/* Bottom */}

      <div className={styles.bottom}>
        <NavLink
          to="/settings"
          className={styles.link}
        >
          ⚙ Settings
        </NavLink>

        <NavLink
          to="/profile"
          className={styles.link}
        >
          👤 Profile
        </NavLink>
      </div>

    </aside>
  );
}

export default Sidebar;
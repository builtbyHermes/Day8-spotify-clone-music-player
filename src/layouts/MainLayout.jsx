import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

import Player from "../features/player/components/Player";

import styles from "./MainLayout.module.css";


function MainLayout(){

return (

<div className={styles.layout}>


    <Sidebar />


    <main className={styles.main}>


        <Topbar />


        <section className={styles.content}>

            <Outlet />

        </section>


    </main>


    <Player />


</div>

);

}


export default MainLayout;